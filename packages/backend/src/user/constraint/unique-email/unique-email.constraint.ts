import {Injectable} from '@nestjs/common';
import {UserEntity, UserRepository} from '../../../database/user';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userRepo: UserRepository) {}

  async validate(email: string): Promise<boolean> {
    const user: UserEntity | undefined = await this.userRepo.getByEmail(email);
    return user === undefined;
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
