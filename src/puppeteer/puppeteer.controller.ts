import { Controller, Get, Query, Res } from '@nestjs/common';
import { PuppeteerService } from './puppeteer.service';
import { Response } from 'express';

@Controller('puppeteer')
export class PuppeteerController {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  @Get('pdf')
  async getPdf(@Query('url') url: string, @Res() res: Response) {
    const pdf = await this.puppeteerService.generatePDF(url);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdf.length,
    });
    res.end(pdf);
  }
}
