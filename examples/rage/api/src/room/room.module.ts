import {RoomPipe} from './room.pipe';
import {Module} from '@nestjs/common';
import {RoomController} from './room.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomPipe],
  exports: [RoomPipe],
})
export class RoomModule {}
