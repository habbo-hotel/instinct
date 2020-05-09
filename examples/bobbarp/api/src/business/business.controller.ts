import {BusinessPipe} from './business.pipe';
import { BusinessJobPipe } from './job.pipe';
import {BusinessSearchDTO} from './business.dto';
import {BusinessService} from './business.service';
import { Business, BusinessJob } from 'instinct-rp-interfaces';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { BusinessEntity, BusinessJobEntity, businessJobWire, businessWire } from '../database/entity/business';

@Controller('businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async getAll(): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessService.getAll();
    return businesses.map(business => businessWire(business));
  }

  @Get('jobs')
  async getVacantJobs(): Promise<BusinessJob[]> {
    const vacantJobs: BusinessJobEntity[] = await this.businessService.getVacantJobs();
    return vacantJobs.map(job => businessJobWire(job));
  }

  @Get('jobs/:jobID')
  getJobByID(@Param('jobID', BusinessJobPipe) businessJob: BusinessJobEntity): BusinessJob {
    return businessJobWire(businessJob);
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
