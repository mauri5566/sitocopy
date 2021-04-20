import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import {ModalService} from 'src/app/services/modal.service';
import {ChartData} from 'src/app/model/chartData';
/*import * as HighchartsExporting from 'highcharts/modules/exporting';
import * as HighchartsExportData from 'highcharts/modules/export-data';*/

const HighchartsExporting = require('highcharts/modules/exporting');
const HighchartsExportData = require('highcharts/modules/export-data');

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

@Component({
  selector: 'app-modal-most-frequent-update',
  templateUrl: './modal-most-frequent-update.component.html',
  styleUrls: ['./modal-most-frequent-update.component.css']
})
export class ModalMostFrequentUpdateComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Options = {
    title: {
      text: 'CDF of the most frequent update frequency',
      style: {
        color: 'whitesmoke'
      }
    },
    chart: {
      zoomType: 'x',
      backgroundColor: '#323232', /*{
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
      borderColor: 'black',
      borderWidth: 2,*/
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
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
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
            }
        }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'boooomba',
        type: 'line',
        data: [1, 2, 10, 5, 17, 22, 24],
        color: '#009879',
        }
    ],
    legend: {
        enabled: false
    },
    exporting: {
            buttons: {
                contextButton: {
                    enabled: true,
                    symbol: 'menu',
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
        background: 'whitesmoke',
        color: 'black'
      }
    },
  };

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    /*this.modalService.getData().subscribe(
      (data: ChartData[]) => {
        if (this.chartOptions.series[0].type === 'line'){
          this.chartOptions.series[0].data = data;
        }
      }
    );*/
  }
}
