import {Module} from '@nestjs/common';
import {SessionController} from './session.controller';
import {DatabaseModule} from '../database/database.module';
import {SessionModule as BaseSessionModule} from '@instinct-prj/backend';

@Module({
  imports: [DatabaseModule, BaseSessionModule],
  controllers: [SessionController],
})
export class SessionModule {}
