import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppeteerService } from './puppeteer/puppeteer.service';
import { PuppeteerController } from './puppeteer/puppeteer.controller';
import { D3Service } from './d3/d3.service';
import { D3Controller } from './d3/d3.controller';

@Module({
  imports: [],
  controllers: [AppController, PuppeteerController, D3Controller],
  providers: [AppService, PuppeteerService, D3Service],
})
export class AppModule {}
