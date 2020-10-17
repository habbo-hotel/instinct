import {UserBanDTO} from '@instinct/interface';
import {IsNotEmpty, IsNumber, IsString} from 'class-validator';
import {UserBanEntity} from '../database/entity/user';

export class UserBanDTOClass implements UserBanDTO {
  @IsNumber()
  userID!: number;

  @IsString()
  @IsNotEmpty()
  reason!: string;

  @IsNumber()
  banStart!: number;

  @IsNumber()
  banEnd!: number;
}

export function userBanDataTransferObjectToEntity(
  userBanDTO: UserBanDTO
): Partial<UserBanEntity> {
  return {
    userID: userBanDTO.userID,
    banReason: userBanDTO.reason,
    banStartedTimestamp: userBanDTO.banStart,
    banExpirationTimestamp: userBanDTO.banEnd,
  };
}
