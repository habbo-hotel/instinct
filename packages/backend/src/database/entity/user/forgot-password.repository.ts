import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserForgotPasswordEntity} from './forgot-password.entity';

@Injectable()
export class UserForgotPasswordRepository {
  constructor(
    @InjectRepository(UserForgotPasswordEntity)
    private readonly userForgotPasswordRepo: Repository<
      UserForgotPasswordEntity
    >
  ) {}

  create(
    userID: number,
    token: string,
    expiresAt: number
  ): Promise<UserForgotPasswordEntity> {
    return this.userForgotPasswordRepo.save({
      userID,
      token,
      createdAt: +new Date() / 1000,
      expiresAt,
    });
  }

  getByToken(token: string): Promise<UserForgotPasswordEntity> {
    return this.userForgotPasswordRepo.findOneOrFail({
      where: {
        token,
      },
      relations: ['user'],
    });
  }

  async deleteByToken(token: string): Promise<void> {
    await this.userForgotPasswordRepo.delete({token});
  }
}
