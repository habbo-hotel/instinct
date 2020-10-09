import {Injectable} from '@nestjs/common';
import {UserService} from '../../user.service';
import {UserEntity} from '../../../database/entity/user';
import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(email: string): Promise<boolean> {
    const user: UserEntity | undefined = await this.userService.getByEmail(email);
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
