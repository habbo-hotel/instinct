import Sendgrid from '@sendgrid/mail';
import {Injectable} from '@nestjs/common';
import {sendGridAPIKey, sendGridSender} from '../config/environment';

@Injectable()
export class EmailService {
  constructor() {
    Sendgrid.setApiKey(sendGridAPIKey);
  }

  async sendEmail<T>(
    recipient: string,
    templateID: string,
    payload: T
  ): Promise<void> {
    await Sendgrid.send({
      to: recipient,
      from: sendGridSender,
      templateId: templateID,
      dynamicTemplateData: payload,
    });
  }
}
