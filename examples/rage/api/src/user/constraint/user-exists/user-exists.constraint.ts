import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserRepository} from '../../../database/rage/user/user/user.repository';
import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UserExistsConstraint implements ValidatorConstraintInterface {
  constructor(@InjectRepository(UserRepository) private readonly userRepo: UserRepository) {}

  async validate(username: string) {
    try {
      await this.userRepo.findOneByUsernameOrFail(username);
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
