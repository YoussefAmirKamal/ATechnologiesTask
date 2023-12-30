import { Component, ViewChild } from '@angular/core';
import { Axis } from 'echarts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class chartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: '80 0 استخدام',
          data: [
            300, 500, 100, 400, 800, 500, 600, 550, 150, 200, 100, 800, 700,
          ],
        },
      ],
      chart: {
        height: 300,

        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      yaxis: {
        show: false,
        label: false,
      },
      xaxis: {
        type: 'any',
        categories: [
          'ديسمبر',
          'نوفمبر',
          'اكتوبر',
          'سبتمبر',
          'اغسطس',
          'يوليو',
          'يونيو',
          'مايو',
          'ابريل',
          'مارس',
          'فبراير',
          'يناير',
        ],
      },
    };
  }
}
