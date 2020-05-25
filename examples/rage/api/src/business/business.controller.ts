import {BusinessPipe} from './business.pipe';
import {Business} from 'instinct-rp-interfaces';
import {BusinessSearchDTO} from './business.dto';
import {HasSession} from '../session/has-session.decorator';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {businessWire} from '../database/rage/business/business/business.wire';
import {BusinessEntity} from '../database/rage/business/business/business.entity';
import {BusinessRepository} from '../database/rage/business/business/business.repository';

@Controller('businesses')
@HasSession()
export class BusinessController {
  constructor(private readonly businessRepo: BusinessRepository) {}

  @Get()
  async getAll(): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessRepo.getAll();
    return businesses.map(business => businessWire(business));
  }

  @Get(':businessID')
  getByID(@Param('businessID', BusinessPipe) business: BusinessEntity): Business {
    return businessWire(business);
  }

  @Post('search')
  async searchBusinesses(@Body() searchDTO: BusinessSearchDTO): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessRepo.searchByField('name', searchDTO.name);
    return businesses.map(business => businessWire(business));
  }
}
