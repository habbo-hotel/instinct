import {Controller, Get} from '@nestjs/common';

@Controller('users/high-scores')
export class UserHighScoreController {
  @Get()
  async getHighScores() {}
}
