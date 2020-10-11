import {Injectable} from '@nestjs/common';
import {UserRepository} from '../../../database/entity/user';
import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UserExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userRepo: UserRepository) {}

  async validate(username: string) {
    try {
      await this.userRepo.getByUsername(username);
      return true;
    } catch (e) {
      return false;
    }
  }

  defaultMessage() {
    return 'User does not exist';
  }
}

export function UserExists(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: UserExists,
    });
  };
}
