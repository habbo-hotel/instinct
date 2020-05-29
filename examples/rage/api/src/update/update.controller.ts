import {UpdatePipe} from './update.pipe';
import {Update} from 'instinct-rp-interfaces';
import {AUTH_SCOPE} from '../auth/auth.types';
import {HasScope} from '../auth/auth.decorator';
import {GetSession} from '../session/get-session.decorator';
import {NewUpdateDTO, PartialUpdateDTO} from './update.dto';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {updateWire} from '../database/instinct/update/update.wire';
import {UpdateEntity} from '../database/instinct/update/update.entity';
import {UpdateRepository} from '../database/instinct/update/update.repository';
import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('updates')
export class UpdateController {
  constructor(private readonly updateRepo: UpdateRepository) {}

  @Get()
  async getAllUpdates(): Promise<Update[]> {
    const updates: UpdateEntity[] = await this.updateRepo.getAll();
    return updates.map(update => updateWire(update));
  }

  @Post()
  @HasScope(AUTH_SCOPE.CREATE_UPDATE)
  async createUpdate(@GetSession() session: UserEntity, @Body() updateDTO: NewUpdateDTO): Promise<Update> {
    const newUpdate: UpdateEntity = await this.updateRepo.create({
      ...updateDTO,
      userID: session.id!,
      timestamp: new Date(),
    });

    return updateWire(newUpdate);
  }

  @Get(':updateID')
  getUpdateByID(@Param('updateID', UpdatePipe) update: UpdateEntity): Update {
    return updateWire(update);
  }

  @Patch(':updateID')
  @HasScope(AUTH_SCOPE.MODIFY_UPDATE)
  async modifyUpdateByID(@Param('updateID', UpdatePipe) update: UpdateEntity, @Body() updateDTO: PartialUpdateDTO): Promise<Update> {
    const modifiedUpdate: UpdateEntity = await this.updateRepo.updateOneByIDOrFail(update.id!, updateDTO);

    return updateWire(modifiedUpdate);
  }

  @Delete(':updateID')
  @HasScope(AUTH_SCOPE.DELETE_UPDATE)
  async deleteUpdateByID(@Param('updateID', UpdatePipe) update: UpdateEntity): Promise<string> {
    await this.updateRepo.deleteOneByID(update.id!);
    return 'Update has been deleted';
  }
}
