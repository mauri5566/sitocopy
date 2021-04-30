import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import {ChartData} from 'src/app/model/chartData';
/*import * as HighchartsExporting from 'highcharts/modules/exporting';
import * as HighchartsExportData from 'highcharts/modules/export-data';*/

const HighchartsExporting = require('highcharts/modules/exporting');
const HighchartsExportData = require('highcharts/modules/export-data');

@Component({
  selector: 'app-modal-number-sequences-cp',
  templateUrl: './modal-number-sequences-cp.component.html',
  styleUrls: ['./modal-number-sequences-cp.component.css']
})
export class ModalNumberSequencesCpComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;

  chartOptions: Options = {
    title: {
      text: 'CDF of the most frequent update frequency',
      style: {
        color: '#A0A0A3',
      }
    },
    chart: {
      zoomType: 'x',
      backgroundColor: '#323232',
      type: 'column'
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
            text: 'Frequency of updates per sequence (Hz)',
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
            }
        }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Frequency of the most frequent update in the sequence (upd/min)',
        type: 'column',
        data: [1, 2, 10, 5, 17, 22, 24, 50, 40, 4, 50, 60, 32, 32, 43, 54, 56, 67, 32, 43, 58, 24, 12,
        1, 2, 10, 5, 17, 22, 24, 50, 40, 4, 50, 60, 32, 32, 43, 54, 56, 67, 32, 43, 58, 24, 12,
      1, 2, 10, 5, 17, 22, 24, 50, 40, 4, 50, 60, 32, 32, 43, 54, 56, 67, 32, 43, 58, 24, 12,
    1, 2, 10, 5, 17, 22, 24, 50, 40, 4, 50, 60, 32, 32, 43, 54, 56, 67, 32, 43, 58, 24, 12,
  1, 2, 10, 5, 17, 22, 24, 50, 40, 4, 50, 60, 32, 32, 43, 54, 56, 67, 32, 43, 58, 24, 12,
1, 2, 10, 5, 17, 22, 24, 50, 40, 4, 50, 60, 32, 32, 43, 54, 56, 67, 32, 43, 58, 24, 12,
1, 2, 10, 5, 17, 22, 24, 50, 40, 4, 50, 60, 32, 32, 43, 54, 56, 67, 32, 43, 58, 24, 12],
        color: '#009879',
        }
    ],
    plotOptions:{
      column: {
        borderWidth: 0
      }
    },
    legend: {
        enabled: false
    },
    exporting: {
            buttons: {
                contextButton: {
                    enabled: true,
                    symbol: 'menu',
                    symbolStroke: '#A0A0A3',
                    symbolFill: 'black',
                    theme: {
                      fill: '#323232'
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

  constructor() { }

  ngOnInit(): void {
  }

}
