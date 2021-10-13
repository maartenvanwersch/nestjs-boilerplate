import { Test, TestingModule } from '@nestjs/testing';
import { WebTranslationsController } from './web-translations.controller';
import { WebTranslationsService } from './web-translations.service';

describe('WebTranslationsController', () => {
  let controller: WebTranslationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebTranslationsController],
      providers: [WebTranslationsService],
    }).compile();

    controller = module.get<WebTranslationsController>(
      WebTranslationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
