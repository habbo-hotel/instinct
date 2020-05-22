import {BusinessPipe} from './business.pipe';
import {BusinessService} from './business.service';
import {GetSession} from '../session/get-session.decorator';
import {HasSession} from '../session/has-session.decorator';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {BusinessJobApplicationDTO, BusinessSearchDTO} from './business.dto';
import {businessWire} from '../database/rage/business/business/business.wire';
import {BusinessEntity} from '../database/rage/business/business/business.entity';
import {Business, BusinessJob, BusinessJobApplication} from 'instinct-rp-interfaces';
import {BadRequestException, Body, Controller, Get, Param, Post} from '@nestjs/common';
import {businessJobApplicationWire} from '../database/rage/business/business-job-application/business-job-application.wire';
import {BusinessJobApplicationEntity} from '../database/rage/business/business-job-application/business-job-application.entity';

@Controller('businesses')
@HasSession()
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get()
  async getAll(): Promise<Business[]> {
    const businesses: BusinessEntity[] = await this.businessService.getAll();
    return businesses.map(business => businessWire(business));
  }

  @Get('jobs')
  async getVacantJobs(@GetSession() user: UserEntity): Promise<BusinessJob[]> {
    return this.businessService.getVacantJobsForUser(user.id!);
  }

  @Get('jobs/:jobID')
  async getJobByID(@Param('jobID') businessID: number, @GetSession() user: UserEntity): Promise<BusinessJob> {
    return this.businessService.getJobByIDForUser(user.id!, businessID);
  }

  @Post('jobs/:jobID/application')
  async applyForJob(
    @Param('jobID') jobID: number,
    @GetSession() user: UserEntity,
    @Body() jobApplicationDTO: BusinessJobApplicationDTO
  ): Promise<BusinessJobApplication> {
    const existingJobApplication: BusinessJobApplicationEntity | undefined = await this.businessService.getJobApplicationForUser(user.id!, jobID);

    if (existingJobApplication) {
      throw new BadRequestException('You can only apply once');
    }

    const jobApplication: BusinessJobApplicationEntity = await this.businessService.createJobApplicationForUser(
      user.id!,
      jobID,
      jobApplicationDTO.content
    );
    return businessJobApplicationWire(jobApplication);
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
