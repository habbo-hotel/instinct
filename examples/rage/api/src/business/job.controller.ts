import { BusinessJobApplicationDTO } from './business.dto';
import { HasSession } from '../session/has-session.decorator';
import { GetSession } from '../session/get-session.decorator';
import { UserEntity } from '../database/rage/user/user/user.entity';
import { BusinessJob, BusinessJobApplication } from 'instinct-rp-interfaces';
import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { businessPositionWire } from '../database/rage/business/business-position/business-position.wire';
import { BusinessPositionEntity } from '../database/rage/business/business-position/business-position.entity';
import { BusinessPositionRepository } from '../database/rage/business/business-position/business-position.repository';
import { businessJobApplicationWire } from '../database/rage/business/business-job-application/business-job-application.wire';
import { BusinessJobApplicationEntity } from '../database/rage/business/business-job-application/business-job-application.entity';
import { BusinessJobApplicationRepository } from '../database/rage/business/business-job-application/business-job-application.repository';

@Controller('businesses/jobs')
@HasSession()
export class BusinessJobController {

  constructor(private readonly businessJobRepo: BusinessPositionRepository, private readonly businessJobApplicationRepo: BusinessJobApplicationRepository) {}

  @Get()
  async getAllJobs(): Promise<BusinessJob[]> {
    const allJobs: BusinessPositionEntity[] = await this.businessJobRepo.getAll();
    return allJobs.map(job => businessPositionWire(job));
  }

  @Get('vacant')
  getVacantJobs(@GetSession() user: UserEntity): Promise<BusinessJob[]> {
    return this.businessJobRepo.getVacantForUserID(user.id!);
  }

  @Post(':jobID/applications')
  async applyForJob(@Param('jobID') jobID: number, @GetSession() user: UserEntity, @Body() jobApplicationDTO: BusinessJobApplicationDTO): Promise<BusinessJobApplication> {
    const existingJobApplication: BusinessJobApplicationEntity | undefined = await this.businessJobApplicationRepo.findOneForUserAndBusiness(user.id!, jobID);

    if (existingJobApplication) {
      throw new BadRequestException('You can only apply once');
    }

    const jobApplication: BusinessJobApplicationEntity = await this.businessJobApplicationRepo.createOneForUserAndBusiness(user.id!, jobID, jobApplicationDTO.content);
    return businessJobApplicationWire(jobApplication);
  }

}


