import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexXAxis } from "ng-apexcharts";

export interface ChartOptions {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  title?: ApexTitleSubtitle;
  responsive?: ApexResponsive[];
  labels?: any;
  plotOptions?: ApexPlotOptions;
  theme?: ApexTheme;
}
