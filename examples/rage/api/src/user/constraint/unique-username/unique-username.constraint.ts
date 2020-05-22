import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserRepository} from '../../../database/rage/user/user/user.repository';
import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UniqueUsernameConstraint implements ValidatorConstraintInterface {
  constructor(@InjectRepository(UserRepository) private readonly userRepo: UserRepository) {}

  async validate(username: string): Promise<boolean> {
    try {
      await this.userRepo.findOneByUsernameOrFail(username);
      return false;
    } catch {
      return true;
    }
  }

  defaultMessage() {
    return 'Username is taken';
  }
}

export function UniqueUsername(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueUsernameConstraint,
    });
  };
}
