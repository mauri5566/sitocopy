import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import {ChartData} from 'src/app/model/chartData';
import { ChartService } from 'src/app/services/chart.service';
import { Subscription, timer, interval } from 'rxjs';
/*import * as HighchartsExporting from 'highcharts/modules/exporting';
import * as HighchartsExportData from 'highcharts/modules/export-data';*/

const HighchartsExporting = require('highcharts/modules/exporting');
const HighchartsExportData = require('highcharts/modules/export-data');

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

interface Ao extends Highcharts.PointOptionsObject{
    chartData: ChartData
  }

@Component({
  selector: 'app-modal-most-frequent-update',
  templateUrl: './modal-most-frequent-update.component.html',
  styleUrls: ['./modal-most-frequent-update.component.css']
})
export class ModalMostFrequentUpdateComponent implements OnInit, AfterViewInit {


  Highcharts: typeof Highcharts = Highcharts;
<<<<<<< HEAD
=======
  highChart!: Highcharts.Chart | null;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6

=======
  chartData: any = [];
>>>>>>> a926c87480d8c71749e2430fd90bf2749d2773e3
=======
  chartDataX: number[] = [];
  chartDataY: number[] = [];
  chartData: any[] = [];
  timerSubscription!: Subscription;
>>>>>>> 5aa58d6a28e844b24025f944c4e9c23f53b329d6
  chartOptions: Options = {
    title: {
      text: 'CDF of the most frequent update frequency',
      style: {
        color: 'whitesmoke'
      }
    },
    chart: {
<<<<<<< HEAD
      zoomType: 'x',
      backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
      borderColor: 'black',
      borderWidth: 2,

    },
    tooltip: {
      backgroundColor: 'black',
      borderColor: '#009879',
      style: {
        color: 'white'
      }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
=======
      type: 'line',
      zoomType: 'x',
      backgroundColor: '#323232',
    },
    tooltip: {
      formatter: function () {
            return '<b>' + this.series.name +
            '</b><br>x: <b>' + this.x +
                '</b><br>y: <b>' + this.y + '</b>'; },
      backgroundColor: 'black',
      borderColor: '#009879',
      style: {
        color: '#A0A0A3',
      }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3',
                fontSize: '1.3em'
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
<<<<<<< HEAD
            style: {
                color: '#A0A0A3'
            }
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
=======
            text: 'Frequency of the most frequent update in the sequence (upd/min)',
            style: {
                color: '#A0A0A3',
                fontSize: '1.3em'
            }
        }

    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3',
                fontSize: '1.3em'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            text: 'Fraction of sequences',
            style: {
                color: '#A0A0A3',
                fontSize: '1.3em'
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6
            }
        }
    },
    credits: {
<<<<<<< HEAD
      enabled: false
    },
    series: [
      {
<<<<<<< HEAD
        name: 'boooomba',
        type: 'line',
        data: [1, 2, 10, 5, 17, 22, 24],
=======
        name: 'Frequency of the most frequent update in the sequence (upd/min)',
        type: 'line',
        data: [1, 2, 10, 5, 17, 22, 24, 50],
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6
        color: '#009879',
        }
    ],
=======
      enabled: false,
    }as Highcharts.CreditsOptions,
    series: [],
>>>>>>> a926c87480d8c71749e2430fd90bf2749d2773e3
    legend: {
        enabled: false
    },
    exporting: {
            buttons: {
                contextButton: {
                    enabled: true,
                    symbol: 'menu',
<<<<<<< HEAD
                    symbolStroke: '#666666',
                    symbolFill: 'black',
                    theme: {
                      fill: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
=======
                    symbolStroke: '#A0A0A3',
                    symbolFill: 'black',
                    theme: {
                      fill: '#323232'
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6
                    },
                }
              }
            },
    navigation: {
      menuStyle: {
          background: 'white',
          fontFamily: 'arial'
      },
      menuItemHoverStyle: {
<<<<<<< HEAD
        background: 'whitesmoke',
=======
        background: 'lightgrey',
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6
        color: 'black'
      }
    },
  };

  constructor(public chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getMostFrequentUpdateData().subscribe(
      (data: ChartData[]) => {
        for (let i = 0; i < data.length; i++){
          this.chartDataX.push(data[i].item1);
          this.chartDataY.push(data[i].item2);
          this.chartData.push([this.chartDataX[i], this.chartDataY[i]]);
        }
      });
    this.chartOptions.series = [
          {
            name: 'ao',
            type: 'line',
            data: this.chartData,
            color: '#009879',
          }
        ];

}

  ngAfterViewInit(){
    setInterval(() => {console.log(this.chartData);}, 1000)
  }

}
