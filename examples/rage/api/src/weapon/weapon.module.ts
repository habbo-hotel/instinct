import {Module} from '@nestjs/common';
import {WeaponPipe} from './weapon.pipe';
import {WeaponController} from './weapon.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WeaponController],
  providers: [WeaponPipe],
  exports: [WeaponPipe],
})
export class WeaponModule {}
