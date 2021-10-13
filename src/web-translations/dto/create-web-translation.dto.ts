import { IsString } from 'class-validator';

export class CreateWebTranslationDto {
  @IsString()
  value: string;
}
