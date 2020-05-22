import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserRepository} from '../../../database/rage/user/user/user.repository';
import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(@InjectRepository(UserRepository) private readonly userRepo: UserRepository) {}

  async validate(email: string): Promise<boolean> {
    try {
      await this.userRepo.findOneByEmailOrFail(email);
      return false;
    } catch {
      return true;
    }
  }

  defaultMessage() {
    return 'Email is taken';
  }
}

export function UniqueEmail(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: UniqueEmailConstraint,
    });
  };
}
