import { Controller, Get, Query } from '@nestjs/common';
import { D3Service } from './d3.service';

@Controller('d3')
export class D3Controller {
  constructor(private readonly d3Service: D3Service) {}

  @Get('barchart')
  getBarChart(@Query('data') data: string) {
    const parsedData = JSON.parse(data);
    return this.d3Service.generateBarChartService(parsedData);
  }
}
