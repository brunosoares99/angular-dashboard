import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'src/app/types/chart-options';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() type: any
  chartOptions: any;
  isReady: boolean = false
  constructor() {}

  ngOnInit(): void {
    switch (this.type) {
      case 'line':
        this.generateLineChart()
        break;
      case 'pie':
        this.generatePieChart()
        break;
      case 'bar':
        this.generateBarChart()
        break;
      case 'area':
        this.generateAreaChart()
        break;
    }
  }

  generateLineChart() {
    this.chartOptions = {
      series: [
        {
          name: "Atividades",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 60]
        }
      ],
      chart: {
        width: 500,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: true,
          tools: {
            download: true
          }
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Atividades feitas por mês",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ]
      }
    };
    this.isReady = true
    console.log('ready')
  }

  generatePieChart() {
    this.chartOptions = {
      series: [277, 420, 232, 328, 318],
      chart: {
        type: "pie",
        width: 500,
        toolbar: {
          show: true,
          tools: {
            download: true
          }
        }
      },
      title: {
        text: "Matérias mais acessadas",
        align: "left"
      },
      labels: [
      "Port",
      "Mat",
      "Química",
      "Hist",
      "Geo"],
    };
    this.isReady = true

  }

  generateBarChart() {
    this.chartOptions =  {
      chart: {
        type: 'bar',
        width: 500,
        toolbar: {
          show: true,
          tools: {
            download: true
          }
        }
      },
      title: {
        text: "Ranking de alunos por XP",
        align: "left"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      series: [
        {
        name: "XP",
        data: [{
          x: 'Joãozinho',
          y: 650
        }, {
          x: 'Pedrinho',
          y: 1200
        }, {
          x: 'Maria',
          y: 400
        }]
      }]
    };
    this.isReady = true
  }

  generateAreaChart() {
    this.chartOptions = {
      series: [
        {
          name: "Mês Anterior",
          data: [31, 40, 28]
        },
        {
          name: "Mês Atual",
          data: [11, 32, 4]
        }
      ],
      title: {
        text: "Tempo conectado dos alunos por período",
        align: "left"
      },
      chart: {
        width: 500,
        type: "area",
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      // stroke: {
      //   curve: "smooth"
      // },
      xaxis: {
        categories: [
          "Manhã",
          "Tarde",
          "Noite",
        ]
      },
      // tooltip: {
      //   x: {
      //     format: "dd/MM/yy HH:mm"
      //   }
      // }
    };
  }
}
