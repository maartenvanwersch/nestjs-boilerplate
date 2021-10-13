import { PartialType } from '@nestjs/mapped-types';
import { CreateWebTranslationDto } from './create-web-translation.dto';

export class UpdateWebTranslationDto extends PartialType(
  CreateWebTranslationDto,
) {}
