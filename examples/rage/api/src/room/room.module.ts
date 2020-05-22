import {RoomPipe} from './room.pipe';
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {RoomController} from './room.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomPipe],
  exports: [RoomPipe],
})
export class RoomModule {}
