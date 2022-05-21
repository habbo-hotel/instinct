import {MediaPipe} from './media.pipe';
import {MediaService} from './media.service';
import {Media} from '@instinct-prj/interface';
import {FileInterceptor} from '@nestjs/platform-express';
import {HasSession, GetSession} from '@instinct-api/session';
import {mediaWire, MediaEntity, UserEntityStruct} from '@instinct-api/database';
import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

@Controller('media')
@HasSession()
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadMedia(
    @UploadedFile() file: {originalname: string; key: string; mimetype: string},
    @GetSession() session: UserEntityStruct
  ): Promise<Media> {
    const newMedia = await this.mediaService.createMedia(
      session.userID,
      file.originalname,
      file.mimetype,
      file.key
    );
    const mediaURL = await this.mediaService.getMediaURL(newMedia);
    return mediaWire(newMedia, mediaURL);
  }

  @Get(':mediaID')
  async getMediaByID(
    @Param('mediaID', MediaPipe) media: MediaEntity
  ): Promise<Media> {
    const mediaURL = await this.mediaService.getMediaURL(media);
    return mediaWire(media, mediaURL);
  }
}
