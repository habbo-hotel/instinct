import {Injectable} from '@nestjs/common';
import {RankRepository} from '../database/rank/rank.repository';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class RankConstraint implements ValidatorConstraintInterface {
  constructor(private readonly rankRepo: RankRepository) {}

  async validate(rankID: number): Promise<boolean> {
    const rank = this.rankRepo.findOne({id: rankID});
    return !!rank;
  }

  defaultMessage() {
    return "That's not a valid rank";
  }
}

export function ExistingRank(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: RankConstraint,
    });
  };
}
