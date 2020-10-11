import { Module } from '@nestjs/common';
import { EvoucherController } from './evoucher.controller';
import { EvoucherService } from './evoucher.service';

@Module({
  imports: [],
  providers: [EvoucherService],
  controllers: [EvoucherController],
})
export class EvoucherModule {}
