import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { LocalSerializer } from './serializers/local.serializer';

@Module({
  imports: [
    UsersModule,
    PassportModule,
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
