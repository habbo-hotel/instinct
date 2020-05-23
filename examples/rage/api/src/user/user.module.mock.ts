import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {CommonModule} from '../common/common.module';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {DatabaseModuleMock} from '../database/database.module.mock';
import {UserExistsConstraint} from './constraint/user-exists/user-exists.constraint';
import {UniqueEmailConstraint} from './constraint/unique-email/unique-email.constraint';
import {UniqueUsernameConstraint} from './constraint/unique-username/unique-username.constraint';

const userModuleMeta: ModuleMetadata = {
  imports: [CommonModule, DatabaseModuleMock],
  controllers: [UserController],
  providers: [UserPipe, UniqueEmailConstraint, UniqueUsernameConstraint, UserExistsConstraint],
  exports: [UserPipe, UniqueEmailConstraint, UniqueUsernameConstraint, UserExistsConstraint],
};

export function mockUserModule(): Promise<TestingModule> {
  return Test.createTestingModule(userModuleMeta).compile();
}

@Module(userModuleMeta)
export class UserModuleMeta {}
