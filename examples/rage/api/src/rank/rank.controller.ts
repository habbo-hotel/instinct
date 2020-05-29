import {omit} from 'lodash';
import {RankPipe} from './rank.pipe';
import {NewRankDTO} from './rank.dto';
import {Rank} from 'instinct-rp-interfaces';
import {AUTH_SCOPE} from '../auth/auth.types';
import {HasScope} from '../auth/auth.decorator';
import {GetSession} from '../session/get-session.decorator';
import {rankWire} from '../database/rage/rank/rank/rank.wire';
import {RankEntity} from '../database/rage/rank/rank/rank.entity';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {RankRepository} from '../database/rage/rank/rank/rank.repository';

@Controller('ranks')
export class RankController {
  constructor(private readonly rankRepo: RankRepository) {}

  @Get()
  async getMany(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankRepo.getAll();
    return ranks.map(rank => rankWire(rank));
  }

  @Get('staff')
  async getStaff(): Promise<Rank[]> {
    const ranks: RankEntity[] = await this.rankRepo.getAllStaff();
    return ranks.map(rank => rankWire(rank));
  }

  @Post()
  @HasScope(AUTH_SCOPE.CREATE_RANK)
  async createRank(@GetSession() session: UserEntity, @Body() rankDTO: NewRankDTO): Promise<Rank> {
    const newRank: RankEntity = await this.rankRepo.create(omit(rankDTO, 'scopes'), rankDTO.scopes);
    return rankWire(newRank);
  }

  @Get(':rankID')
  getByID(@Param('rankID', RankPipe) rank: RankEntity): Rank {
    return rankWire(rank);
  }

  @Delete(':rankID')
  @HasScope(AUTH_SCOPE.DELETE_RANK)
  async deleteRank(@GetSession() session: UserEntity, @Param('rankID', RankPipe) rank: RankEntity): Promise<string> {
    await this.rankRepo.deleteByID(rank.id!);
    return 'Rank has been deleted and all users assigned to it have been removed';
  }
}
