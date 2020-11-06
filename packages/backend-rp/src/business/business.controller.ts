import {BusinessDTO} from './business.dto';
import {BusinessPipe} from './business.pipe';
import {Business} from '@instinct-prj/interface-rp';
import {businessWire} from '../database/business/business.wire';
import {HasScope} from '@instinct-prj/backend/src/session/permission-scope.decorator';
import {
  GetSession,
  PermissionStatus,
  RoomEntity,
  RoomRepository,
  UserEntity,
} from '@instinct-prj/backend';
import {
  BusinessEntity,
  BusinessPositionRepository,
  BusinessRepository,
} from '../database/business';
import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('businesses')
export class BusinessController {
  constructor(
    private readonly roomRepo: RoomRepository,
    private readonly businessRepo: BusinessRepository,
    private readonly businessPositionRepo: BusinessPositionRepository
  ) {}

  @Post()
  @HasScope('websiteCreateBusiness')
  async createBusiness(
    @Body() businessDTO: BusinessDTO,
    @GetSession() user: UserEntity
  ): Promise<Business> {
    const room: RoomEntity = await this.roomRepo.findOneOrFail({
      id: businessDTO.homeRoom,
    });

    if (room.ownerID !== user.id!) {
      throw new ForbiddenException('You do not own this room');
    }

    const newBusiness: BusinessEntity = await this.businessRepo.create({
      name: businessDTO.name,
      desc: businessDTO.desc,
      badge: businessDTO.badge,
      userID: user.id!,
      balance: 0,
      workRoom: businessDTO.homeRoom,
    });

    await Promise.all(
      businessDTO.positions.map(_ => {
        return this.businessPositionRepo.create({
          ..._,
          canHire: _.canHire ? 1 : 0,
          canFire: _.canFire ? 1 : 0,
          canPromote: _.canPromote ? 1 : 0,
          canDemote: _.canDemote ? 1 : 0,
          isManager: _.isManager ? 1 : 0,
          businessID: newBusiness.id!,
        });
      })
    );

    const businessObject: BusinessEntity = await this.businessRepo.findOneOrFail(
      {id: newBusiness.id!}
    );
    return businessWire(businessObject);
  }

  @Get()
  async getAllBusinesses(): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessRepo.find();
    return businesses.map(_ => businessWire(_));
  }

  @Get(':businessID')
  async getBusinessByID(
    @Param('businessID', BusinessPipe) business: BusinessEntity
  ) {
    return businessWire(business);
  }

  @Patch(':businessID')
  @HasScope('websiteCreateBusiness')
  async updateBusinessByID(
    @Param('businessID', BusinessPipe) business: BusinessEntity,
    @GetSession() user: UserEntity,
    @Body() businessDTO: BusinessDTO
  ) {
    if (
      business.userID !== user.id! ||
      user.rank!.websiteManageBusiness !== PermissionStatus.Enabled
    ) {
      throw new ForbiddenException('You do not own this business');
    }

    const room = await this.roomRepo.findOneOrFail({id: business.workRoom});

    if (
      room?.ownerID !== user.id! ||
      user.rank!.websiteManageBusiness !== PermissionStatus.Enabled
    ) {
      throw new ForbiddenException('You do not own this room');
    }

    await this.businessRepo.update(
      {
        id: business.id!,
      },
      {
        name: businessDTO.name,
        desc: businessDTO.desc,
        badge: businessDTO.badge,
        workRoom: businessDTO.homeRoom,
      }
    );
  }

  @Delete(':businessID')
  @HasScope('websiteCreateBusiness')
  async deleteBusinessByID(
    @Param('businessID', BusinessPipe) business: BusinessEntity,
    @GetSession() user: UserEntity
  ) {
    if (
      business.userID !== user.id! &&
      user.rank!.websiteManageBusiness !== PermissionStatus.Enabled
    ) {
      throw new ForbiddenException('That is not your business');
    }

    await this.businessRepo.delete({id: business.id!});
  }
}
