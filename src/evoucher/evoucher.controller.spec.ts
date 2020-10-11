import { Test, TestingModule } from '@nestjs/testing';
import { EvoucherController } from './evoucher.controller';

describe('EvoucherController', () => {
  let controller: EvoucherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvoucherController],
    }).compile();

    controller = module.get<EvoucherController>(EvoucherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
