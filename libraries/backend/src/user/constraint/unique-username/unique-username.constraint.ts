import {Injectable} from '@nestjs/common';
import {UserService} from '../../user.service';
import {UserEntity} from '../../../database/entity/user';
import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

@ValidatorConstraint({async: true})
@Injectable()
export class UniqueUsernameConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(username: string): Promise<boolean> {
    const user: UserEntity | undefined = await this.userService.getByUsername(username);
    return user === undefined;
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
