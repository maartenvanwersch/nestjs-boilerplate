import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import * as Joi from '@hapi/joi'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MAILGUN_DOMAIN: Joi.string().required(),
        MAILGUN_API: Joi.string().required(),
      })
    }),
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
