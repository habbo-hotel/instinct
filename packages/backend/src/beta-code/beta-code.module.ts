import {Module} from '@nestjs/common';
import {BetaCodeController} from './beta-code.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BetaCodeController],
})
export class BetaCodeModule {}