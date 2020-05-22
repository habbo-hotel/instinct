import {getConnection} from 'typeorm';
import {TestingModule} from '@nestjs/testing';
import {mockUserModule} from '../../user.module.mock';
import {UserEntity} from '../../../database/entity/user';
import {userFactory} from '../../../database/factory/user';
import {UniqueUsernameConstraint} from './unique-username.constraint';

describe('UniqueUsernameConstraint', () => {
  let userModule: TestingModule;
  let uniqueUsernameConstraint: UniqueUsernameConstraint;

  let mockUser: UserEntity;

  beforeAll(async () => {
    userModule = await mockUserModule();
    uniqueUsernameConstraint = userModule.get(UniqueUsernameConstraint);
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
    it('will return false if username already exists', async () => {
      const result: boolean = await uniqueUsernameConstraint.validate(mockUser.username);
      expect(result).toBeFalsy();
    });

    it('will return true if username does not exist', async () => {
      const result: boolean = await uniqueUsernameConstraint.validate('FAKE_USER');
      expect(result).toBeTruthy();
    });
  });
});
