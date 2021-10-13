import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebTranslationsModule } from './web-translations/web-translations.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PasswordModule } from './password/password.module';
import { MailModule } from './mail/mail.module';
import { DatabaseModule } from './database/database.module';
import * as Joi from '@hapi/joi'

@Module({
  imports: [
    WebTranslationsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        SESSION_SECRET: Joi.string().required(),
        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
      })
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    PasswordModule,
    MailModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
