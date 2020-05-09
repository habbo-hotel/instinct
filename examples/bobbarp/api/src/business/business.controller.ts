import {BusinessPipe} from './business.pipe';
import {Business} from 'instinct-rp-interfaces';
import {BusinessSearchDTO} from './business.dto';
import {BusinessService} from './business.service';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {BusinessEntity, businessWire} from '../database/entity/business';

@Controller('businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async getAll(): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessService.getAll();
    return businesses.map(business => businessWire(business));
  }

  @Get(':businessID')
  getByID(@Param('businessID', BusinessPipe) business: BusinessEntity): Business {
    return businessWire(business);
  }

  @Post('search')
  async searchBusinesses(@Body() searchDTO: BusinessSearchDTO): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessService.searchByField('name', searchDTO.name);
    return businesses.map(business => businessWire(business));
  }
}
