import {getConnection} from 'typeorm';
import {TestingModule} from '@nestjs/testing';
import {mockUserModule} from '../../user.module.mock';
import {UserExistsConstraint} from './user-exists.constraint';
import {UserEntity} from '../../../database/rage/user/user/user.entity';
import {userFactory} from '../../../database/rage/user/user/user.factory';

describe('UserExistsConstraint', () => {
  let userModule: TestingModule;
  let userExistsConstraint: UserExistsConstraint;

  let mockUser: UserEntity;

  beforeAll(async () => {
    userModule = await mockUserModule();
    userExistsConstraint = userModule.get(UserExistsConstraint);
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
    it('will return false if user does not exist', async () => {
      const result: boolean = await userExistsConstraint.validate('FAKE_USER');
      expect(result).toBeFalsy();
    });

    it('will return true if user does exist', async () => {
      const result: boolean = await userExistsConstraint.validate(mockUser.username);
      expect(result).toBeTruthy();
    });
  });
});
