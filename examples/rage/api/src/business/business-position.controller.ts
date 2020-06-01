import {BusinessJobApplicationDTO} from './business.dto';
import {BusinessPositionPipe} from './business-position.pipe';
import {HasSession} from '../session/session/has-session.decorator';
import {GetSession} from '../session/session/get-session.decorator';
import {BackendUserSession} from '../session/session/session.type';
import {BusinessJobApplicationPipe} from './business-job-application,pipe';
import {BusinessJobApplication, BusinessPosition} from 'instinct-rp-interfaces';
import {businessPositionWire} from '../database/rage/business/business-position/business-position.wire';
import {BusinessPositionEntity} from '../database/rage/business/business-position/business-position.entity';
import {BusinessPositionRepository} from '../database/rage/business/business-position/business-position.repository';
import {businessJobApplicationWire} from '../database/rage/business/business-job-application/business-job-application.wire';
import {BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UnauthorizedException} from '@nestjs/common';
import {BusinessJobApplicationEntity} from '../database/rage/business/business-job-application/business-job-application.entity';
import {BusinessJobApplicationRepository} from '../database/rage/business/business-job-application/business-job-application.repository';

@Controller('businesses')
@HasSession()
export class BusinessPositionController {
  constructor(
    private readonly businessJobRepo: BusinessPositionRepository,
    private readonly businessJobApplicationRepo: BusinessJobApplicationRepository
  ) {}

  @Get('positions')
  async getAllPositions(): Promise<BusinessPosition[]> {
    const allPositions: BusinessPositionEntity[] = await this.businessJobRepo.getAll();
    return allPositions.map(job => businessPositionWire(job));
  }

  @Get('positions/vacant')
  getVacantPositions(@GetSession() { user }: BackendUserSession): Promise<BusinessPosition[]> {
    return this.businessJobRepo.getVacantForUserID(user.id!);
  }

  @Get(':businessID/:positionID')
  getPositionByID(@Param('positionID', BusinessPositionPipe) businessPosition: BusinessPositionEntity): BusinessPosition {
    return businessPositionWire(businessPosition);
  }

  @Get(':businessID/positions/:positionID/applications')
  async getAllApplicationsForPosition(
    @Param('positionID', BusinessPositionPipe) businessPosition: BusinessPositionEntity
  ): Promise<BusinessJobApplication[]> {
    const allJobApplications: BusinessJobApplicationEntity[] = await this.businessJobApplicationRepo.getAllForPosition(businessPosition.id!);
    return allJobApplications.map(jobApplication => businessJobApplicationWire(jobApplication));
  }

  @Post(':businessID/positions/:positionID/applications')
  async applyForPosition(
    @Param('positionID', BusinessPositionPipe) businessPosition: BusinessPositionEntity,
    @GetSession() { user }: BackendUserSession,
    @Body() jobApplicationDTO: BusinessJobApplicationDTO
  ): Promise<BusinessJobApplication> {
    const existingJobApplication: BusinessJobApplicationEntity | undefined = await this.businessJobApplicationRepo.findOneForUserAndBusiness(
      user.id!,
      businessPosition.id!
    );

    if (existingJobApplication) {
      throw new BadRequestException('You can only apply once');
    }

    const jobApplication: BusinessJobApplicationEntity = await this.businessJobApplicationRepo.createOneForUserAndPosition(
      user.id!,
      businessPosition.id!,
      jobApplicationDTO.content
    );
    return businessJobApplicationWire(jobApplication);
  }

  @Patch(':businessID/positions/:positionID/applications/:jobApplicationID')
  async updateJobApplicationByID(
    @Param('jobApplicationID', BusinessJobApplicationPipe) jobApplication: BusinessJobApplicationEntity,
    @Body() jobApplicationDTO: BusinessJobApplicationDTO,
    @GetSession() { user }: BackendUserSession,
  ): Promise<BusinessJobApplication> {
    if (jobApplication.userID !== user.id) {
      throw new UnauthorizedException("You can't edit another user's job application");
    }

    const updatedJobApplication: BusinessJobApplicationEntity = await this.businessJobApplicationRepo.updateOneByIDOrFail(
      jobApplication.id!,
      jobApplicationDTO
    );
    return businessJobApplicationWire(updatedJobApplication);
  }

  @Delete(':businessID/positions/:positionID/applications/:jobApplicationID')
  async deleteJobApplicationByID(
    @Param('jobApplicationID', BusinessJobApplicationPipe) jobApplication: BusinessJobApplicationEntity,
    @GetSession() { user }: BackendUserSession,
  ): Promise<string> {
    if (jobApplication.userID !== user.id) {
      throw new UnauthorizedException("You can't delete another user's job application");
    }

    await this.businessJobApplicationRepo.deleteOneByID(jobApplication.id!);
    return 'Your job application has been deleted';
  }
}
