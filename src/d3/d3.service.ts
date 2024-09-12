import { Injectable } from '@nestjs/common';
import { generateBarChart } from './d3-utilities';

@Injectable()
export class D3Service {
  public async generateBarChartService(
    data: { name: string; value: number }[],
  ) {
    return generateBarChart(data);
  }
}
