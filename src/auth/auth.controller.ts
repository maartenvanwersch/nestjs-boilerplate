import { Controller, Post, UseGuards, Request, HttpCode, UseInterceptors, ClassSerializerInterceptor, Session } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CookieAuthenticationGuard } from './guards/cookie-auth.guard';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @HttpCode(200)
  @UseGuards(CookieAuthenticationGuard)
  @Post('log-out')
  async logOut(@Request() req) {
    req.logOut();
    req.session.cookie.maxAge = 0;
  }

  @HttpCode(200)
  @Post('session')
  async session(@Session() session: Record<string, any>) {
    return {
      "activeSession": !!session?.passport?.user
    }
  }
}
