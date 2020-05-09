import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {userConstraints} from './constraint';
import {UserController} from './user.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {CommonModule} from '../common/common.module';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {DatabaseModule} from '../database/database.module';

const userModuleMeta: ModuleMetadata = {
  imports: [CommonModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserPipe, UserService, ...userConstraints],
  exports: [UserPipe, UserService, ...userConstraints],
};

export function mockUserModule(): Promise<TestingModule> {
  return Test.createTestingModule(userModuleMeta).compile();
}

@Module(userModuleMeta)
export class UserModuleMeta {}
