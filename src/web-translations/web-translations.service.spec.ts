import { Test, TestingModule } from '@nestjs/testing';
import { WebTranslationsService } from './web-translations.service';

describe('WebTranslationsService', () => {
  let service: WebTranslationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebTranslationsService],
    }).compile();

    service = module.get<WebTranslationsService>(WebTranslationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
