import {getConnection} from 'typeorm';
import {TestingModule} from '@nestjs/testing';
import {mockUserModule} from '../../user.module.mock';
import {UserEntity} from '../../../database/entity/user';
import {userFactory} from '../../../database/factory/user';
import {UniqueEmailConstraint} from './unique-email.constraint';

describe('UniqueEmailConstraint', () => {
  let userModule: TestingModule;
  let uniqueEmailConstraint: UniqueEmailConstraint;

  let mockUser: UserEntity;

  beforeAll(async () => {
    userModule = await mockUserModule();
    uniqueEmailConstraint = userModule.get(UniqueEmailConstraint);
  });

  beforeEach(async () => {
    await getConnection().synchronize(true);

    mockUser = await userFactory();
  });

  afterAll(async () => {
    await getConnection().dropDatabase();
    await userModule.close();
  });

  describe('validate', () => {
    it('will return false if email already exists', async () => {
      const result: boolean = await uniqueEmailConstraint.validate(mockUser.email);
      expect(result).toBeFalsy();
    });

    it('will return true if email  does not exist', async () => {
      const result: boolean = await uniqueEmailConstraint.validate('fake@email.com');
      expect(result).toBeTruthy();
    });
  });
});
