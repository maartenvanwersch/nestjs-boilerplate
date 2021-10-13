import { Controller, Post, Body } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('reset')
  resetPassword(@Body() updateUserDto: UpdateUserDto) {
    return this.passwordService.resetPassword(updateUserDto.email);
  }
}
