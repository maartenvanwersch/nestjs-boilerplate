import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
 
@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly usersService: UsersService,
  ) {
    super();
  }
 
  serializeUser(user: User, done: CallableFunction) {
    done(null, user.id);
  }
 
  async deserializeUser(userId: string, done: CallableFunction) {
    const user = await this.usersService.findById(Number(userId))
    done(null, user);
  }
}