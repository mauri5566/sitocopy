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
  selector: 'app-modal-frequency-update',
  templateUrl: './modal-frequency-update.component.html',
  styleUrls: ['./modal-frequency-update.component.css']
})
export class ModalFrequencyUpdateComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Options = {
    title: {
      text: 'CDF of the most frequent update frequency',
      style: {
        color: '#323232',
      }
    },
    chart: {
      zoomType: 'x',
      backgroundColor: 'white', /*{
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        },
      borderColor: 'black',
      borderWidth: 2,
      height: 550,*/
    },
    tooltip: {
      formatter: function () {
            return '<b>' + this.series.name +
            '</b><br>x: <b>' + this.x +
                '</b><br>y: <b>' + this.y + '</b>'},
      backgroundColor: 'whitesmoke',
      borderColor: 'black',
      style: {
        color: 'black'
      }
    },
    xAxis: {
        gridLineColor: 'lightgrey',
        labels: {
            style: {
                color: '#323232',
                fontSize: '1.3em'
            }
        },
        lineColor: 'lightgrey',
        minorGridLineColor: 'lightgrey',
        tickColor: 'lightgrey',
        tickWidth: 1,
        title: {
            text: 'Frequency of updates per sequence (Hz)',
            style: {
                color: '#323232',
                fontSize: '1.3em'
            }
        }
    },
    yAxis: {
        gridLineColor: 'lightgrey',
        labels: {
            style: {
                color: '#323232',
                fontSize: '1.3em'
            }
        },
        lineColor: 'lightgrey',
        minorGridLineColor: 'lightgrey',
        tickColor: 'lightgrey',
        tickWidth: 1,
        title: {
            text: 'Fraction of sequences',
            style: {
                color: '#323232',
                fontSize: '1.3em'
            }
        }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Frequency of the most frequent update in the sequence (upd/min)',
        type: 'line',
        data: [1, 2, 10, 5, 17, 22, 24, 50],
        color: 'rgb(56,78,222)',
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
                    symbolFill: 'darkgrey',
                    theme: {
                      fill: 'white'
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
        background: 'lightgrey',
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
