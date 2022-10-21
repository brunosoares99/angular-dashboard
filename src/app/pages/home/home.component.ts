import { Component, OnInit, ViewChild } from '@angular/core';
import icHome from '@iconify/icons-ant-design/home-filled';
import icPeople from '@iconify/icons-bi/people-fill';
import icHat from '@iconify/icons-fluent/hat-graduation-20-filled';
import icSettings from '@iconify/icons-ci/settings-filled';
import icLeave from '@iconify/icons-eva/log-out-outline';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexStroke, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  icHome = icHome
  icPeople = icPeople
  icHat = icHat
  icSettings = icSettings
  icLeave = icLeave
  constructor() {
  }

  ngOnInit(): void {
    this.generateLineChart()
  }


  generateLineChart() {
    
  }

  generateBarChart() {

  }

  generatePieChart() {
    
  }

}
