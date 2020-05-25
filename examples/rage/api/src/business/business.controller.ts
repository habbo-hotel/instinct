import * as Moment from 'moment';
import {BusinessPipe} from './business.pipe';
import {BusinessFilter} from './business.types';
import {Business} from 'instinct-rp-interfaces';
import {HasSession} from '../session/has-session.decorator';
import {GetSession} from '../session/get-session.decorator';
import {BusinessDTO, BusinessSearchDTO} from './business.dto';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {businessWire} from '../database/rage/business/business/business.wire';
import {BusinessEntity} from '../database/rage/business/business/business.entity';
import {BusinessRepository} from '../database/rage/business/business/business.repository';
import {BusinessApplyType, BusinessType} from '../database/rage/business/business/business.types';
import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UnauthorizedException} from '@nestjs/common';

@Controller('businesses')
@HasSession()
export class BusinessController {
  constructor(private readonly businessRepo: BusinessRepository) {}

  @Get()
  async getAll(@Query('filter') filter?: BusinessFilter): Promise<Business[]> {
    const filterToPromise: Record<BusinessFilter, () => Promise<BusinessEntity[]>> = {
      private: () => this.businessRepo.findManyWhere('type', BusinessType.Private),
      government: () => this.businessRepo.findManyWhere('type', BusinessType.State),
    };

    const businesses: BusinessEntity[] = filter ? await filterToPromise[filter]() : await this.businessRepo.getAll();
    return businesses.map(business => businessWire(business));
  }

  @Post('search')
  async searchBusinesses(@Body() searchDTO: BusinessSearchDTO): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessRepo.searchByField('name', searchDTO.name);
    return businesses.map(business => businessWire(business));
  }

  @Post()
  async createNewBusiness(@Body() businessDTO: BusinessDTO, @GetSession() user: UserEntity): Promise<Business> {
    const newBusiness: BusinessEntity = await this.businessRepo.create({
      ...businessDTO,
      userID: user.id!,
      dateCreated: Moment().unix(),
      type: BusinessType.Private,
      bankBalance: 0,
      stock: 0,
      taxPAYI: 0,
      taxPRSI: 0,
      hiring: 0,
      hidden: 1,
      applyType: BusinessApplyType.Apply,
    });

    return businessWire(newBusiness);
  }

  @Get(':businessID')
  getByID(@Param('businessID', BusinessPipe) business: BusinessEntity): Business {
    return businessWire(business);
  }

  @Patch(':businessID')
  async updateByID(
    @Param('businessID', BusinessPipe) business: BusinessEntity,
    @Body() businessDTO: BusinessDTO,
    @GetSession() user: UserEntity
  ): Promise<Business> {
    if (business.userID !== user.id) {
      throw new UnauthorizedException("You cannot edit another user's business");
    }

    const updatedBusiness: BusinessEntity = await this.businessRepo.updateOneByIDOrFail(business.id!, businessDTO);
    return businessWire(updatedBusiness);
  }

  @Delete(':businessID')
  async deleteByID(@Param('businessID', BusinessPipe) business: BusinessEntity, @GetSession() user: UserEntity): Promise<string> {
    if (business.userID !== user.id) {
      throw new UnauthorizedException("You cannot edit another user's business");
    }

    await this.businessRepo.deleteOneByID(business.id!);
    return 'Your business has been deleted';
  }
}
