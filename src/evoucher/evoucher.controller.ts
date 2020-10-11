import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EvoucherService } from './evoucher.service';

@Controller('evouchers')
export class EvoucherController {
  constructor(private readonly evoucherService: EvoucherService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.evoucherService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id) {
    return this.evoucherService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body('data') data) {
    return this.evoucherService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async update(@Body('data') data) {
    return this.evoucherService.update(data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('verify')
  async verify(@Body('data') data) {
    return this.evoucherService.verify(data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('checkout')
  async checkout(@Body('data') data) {
    return this.evoucherService.buy(data);
  }
}
