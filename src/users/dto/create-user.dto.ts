import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  @IsOptional()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  last_name: string;

  @IsOptional()
  @IsString()
  hex: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;
}
