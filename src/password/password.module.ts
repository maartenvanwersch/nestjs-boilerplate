import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';
import { PasswordController } from './password.controller';
import { UsersModule } from 'src/users/users.module';
import { MailService } from 'src/mail/mail.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, ConfigModule],
  controllers: [PasswordController],
  providers: [PasswordService, MailService]
})
export class PasswordModule {}
