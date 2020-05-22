import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {CommonModule} from '../common';
import {DatabaseModule} from '../database';
import {userConstraints} from './constraint';
import {UserController} from './user.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';

const userModuleMeta: ModuleMetadata = {
  imports: [CommonModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserPipe, ...userConstraints],
  exports: [UserPipe, ...userConstraints],
};

export function mockUserModule(): Promise<TestingModule> {
  return Test.createTestingModule(userModuleMeta).compile();
}

@Module(userModuleMeta)
export class UserModuleMeta {}
