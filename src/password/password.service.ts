import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { MailService } from 'src/mail/mail.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PasswordService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailService: MailService
  ) { }
  
  async resetPassword(email: string) {
    const existingUser = await this.usersService.findByEmail(email)
    if (!existingUser) {
      throw new HttpException('No user found', HttpStatus.BAD_REQUEST)
    }
    const hex = uuidv4()
    await this.usersService.update(existingUser.id, { hex })
    const mailData = {
      from: "Mailgun Sandbox <postmaster@sandbox5516c7e245374cfc90b60f2a82c22361.mailgun.org>",
      to: "info@examlple.com",
      subject: "Hello",
      text: "Testing some Mailgun awesomness!"
    };
    await this.mailService.sendMail(mailData)
  }

  findOne(id: number) {
    return `This action returns a #${id} password`;
  }

  update(id: number) {
    return `This action updates a #${id} password`;
  }
}
