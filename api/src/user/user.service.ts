import { Repository } from 'typeorm';
import *  as Random from 'randomstring';
import { UserEntity } from '../database';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashService } from '../common/hash.service';

@Injectable()
export class UserService {
  constructor(
    private readonly hashService: HashService,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save({
      ...user,
      password: this.hashService.generate(user.password),
    });
  }

  async createSSO(userID: number): Promise<string> {
    const authTicket: string = 'fashionkilla_' + Random.generate(25) + '_' + userID;
    await this.userRepository.update(userID, { authTicket });
    return authTicket;
  }

  getByID(userID: number): Promise<UserEntity> {
    return this.userRepository.findOneOrFail(userID);
  }

  getByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        username,
      },
    });
  }

  getByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({
      where: {
        email,
      },
    });
  }
}
