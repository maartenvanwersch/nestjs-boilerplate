import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'
const bcrypt = require('bcrypt')
import { bcryptConstants } from "src/auth/auth.constants";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // check if email already exists
    const existingUser = await this.userRepository.findOne({ email: createUserDto.email })
    if (existingUser) {
      throw new HttpException(`Email is already taken`, HttpStatus.BAD_REQUEST)
    }

    const newPassword = createUserDto.password
      ? await bcrypt.hash(createUserDto.password, bcryptConstants.saltRounds)
      : null
    
    // if not create new internal-user
    const internalUser = this.userRepository.create({
      ...createUserDto,
      password: newPassword
    })
    await this.userRepository.save(internalUser)
    return
  }

  findAll() {
    return this.userRepository.find({
        select: ['id', 'email', 'first_name', 'last_name', 'hex', 'password']
    });
  }

  async findById(id: number): Promise<User | undefined> {
    const user = this.userRepository.findOne(id)
    if (!user) {
      throw new HttpException(`No user found with id: ${id}`, HttpStatus.BAD_REQUEST);
    }
    return user
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto)
  }

  async remove(id: number) {
    const existingUser = await this.findById(id)
    return await this.userRepository.remove(existingUser)
  }
}
