import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService {
  async generatePDF(url: string): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const pdfUint8Array = await page.pdf();
    await browser.close();
    // Convert Uint8Array to Buffer
    return Buffer.from(pdfUint8Array);
  }
}
