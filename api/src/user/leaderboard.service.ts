import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../database/entity/user';

@Injectable()
export class UserLeaderBoardService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  getMostCredits(limit = 10): Promise<UserEntity[]> {
    return this.userRepository.find({
      order: {
        credits: 'ASC',
      },
      take: limit,
    });
  }

  getMostPixels(limit = 10): Promise<UserEntity[]> {
    return this.userRepository.find({
      order: {
        pixels: 'ASC',
      },
      take: limit,
    });
  }

  getMostPoints(limit = 10): Promise<UserEntity[]> {
    return this.userRepository.find({
      order: {
        points: 'ASC',
      },
      take: limit,
    });
  }
}
