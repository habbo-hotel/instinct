import { Controller, Get } from '@nestjs/common';

@Controller('rooms')
export class RoomController {

  @Get()
  getAll() {

  }

}