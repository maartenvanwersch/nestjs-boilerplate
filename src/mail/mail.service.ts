import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Mail } from './interfaces/mail.interface';
const mailgun = require("mailgun-js");

@Injectable()
export class MailService {
  constructor(
    private readonly configService: ConfigService
  ) { }
  
  domain = this.configService.get<string>('MAILGUN_DOMAIN');
  apiKey = this.configService.get<string>('MAILGUN_API');
  mg = mailgun({ apiKey: this.apiKey, domain: this.domain });

  async sendMail(mail: Mail) {
    await this.mg.messages().send(mail, function (error, body) {
      console.log(body);
    });
  }
}
