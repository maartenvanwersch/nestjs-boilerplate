import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
  ) {}

  async create(createLanguageDto: CreateLanguageDto) {
    const { name } = createLanguageDto;
    const existingLanguage = await this.languageRepository.findOne({ name });
    if (existingLanguage) {
      throw new NotFoundException(`Language with name ${name} already exists`);
    }
    const language = this.languageRepository.create(createLanguageDto);
    return this.languageRepository.save(language);
  }

  async findAll() {
    const languages = await this.languageRepository.find();
    if (languages.length == 0) {
      throw new NotFoundException(`No languages found`);
    }
    return languages;
  }

  async findOne(id: number) {
    const language = await this.languageRepository.findOne(id);
    if (!language) {
      throw new NotFoundException(`No language found with id ${id}`);
    }
    return language;
  }

  async update(id: number, updateLanguageDto: UpdateLanguageDto) {
    const existingLanguage = await this.findOne(id);
    const language = await this.languageRepository.preload({
      id: id,
      ...updateLanguageDto,
    });
    return this.languageRepository.save(language);
  }

  async remove(id: number) {
    const language = await this.languageRepository.findOne(id);
    if (!language) {
      throw new NotFoundException(`No language found with id ${id}`);
    }
    return this.languageRepository.remove(language);
  }
}
