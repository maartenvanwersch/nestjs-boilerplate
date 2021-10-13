import { Injectable } from '@nestjs/common';
import { CreateWebTranslationDto } from './dto/create-web-translation.dto';
import { UpdateWebTranslationDto } from './dto/update-web-translation.dto';

@Injectable()
export class WebTranslationsService {
  create(createWebTranslationDto: CreateWebTranslationDto) {
    return 'This action adds a new webTranslation';
  }

  findAll() {
    return `This action returns all webTranslations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webTranslation`;
  }

  update(id: number, updateWebTranslationDto: UpdateWebTranslationDto) {
    return `This action updates a #${id} webTranslation`;
  }

  remove(id: number) {
    return `This action removes a #${id} webTranslation`;
  }
}
