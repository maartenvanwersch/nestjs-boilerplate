import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { HttpException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
const bcrypt = require('bcrypt')

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | undefined> {
    try {
      const user = await this.usersService.findByEmail(email);
      const matching = await this.comparePassword(pass, user.password)
      if (!matching) throw new Error
      const { password, ...result } = user
      return user
    } catch (err) {
      throw new HttpException('Wrong credentials provided', HttpStatus.UNAUTHORIZED);
    }
  }

  async comparePassword(password: string, storedPassword: string): Promise<Boolean> {
    return await bcrypt.compare(password, storedPassword)
  }
}
