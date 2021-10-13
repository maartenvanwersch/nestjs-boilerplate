import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WebTranslationsService } from './web-translations.service';
import { CreateWebTranslationDto } from './dto/create-web-translation.dto';
import { UpdateWebTranslationDto } from './dto/update-web-translation.dto';

@Controller('web-translations')
export class WebTranslationsController {
  constructor(
    private readonly webTranslationsService: WebTranslationsService,
  ) {}

  @Post()
  create(@Body() createWebTranslationDto: CreateWebTranslationDto) {
    return this.webTranslationsService.create(createWebTranslationDto);
  }

  @Get()
  findAll() {
    return this.webTranslationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webTranslationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWebTranslationDto: UpdateWebTranslationDto,
  ) {
    return this.webTranslationsService.update(+id, updateWebTranslationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webTranslationsService.remove(+id);
  }
}
