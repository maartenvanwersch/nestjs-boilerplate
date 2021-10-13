import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguagesModule } from '../languages/languages.module';
import { WebTranslationsService } from './web-translations.service';
import { WebTranslationsController } from './web-translations.controller';
import { WebTranslation } from './entities/web-translation.entity';

@Module({
  imports: [LanguagesModule, TypeOrmModule.forFeature([WebTranslation])],
  controllers: [WebTranslationsController],
  providers: [WebTranslationsService],
})
export class WebTranslationsModule {}
