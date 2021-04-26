import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import {ChartData} from 'src/app/model/chartData';
/*import * as HighchartsExporting from 'highcharts/modules/exporting';
import * as HighchartsExportData from 'highcharts/modules/export-data';*/

const HighchartsExporting = require('highcharts/modules/exporting');
const HighchartsExportData = require('highcharts/modules/export-data');


@Component({
  selector: 'app-modal-percentage-unstable-prefixes',
  templateUrl: './modal-percentage-unstable-prefixes.component.html',
  styleUrls: ['./modal-percentage-unstable-prefixes.component.css']
})
export class ModalPercentageUnstablePrefixesComponent implements OnInit {

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
      backgroundColor: 'white',
      type: 'area'
    },
    plotOptions: {
      area: {
        marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            },
            fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 1,
                            x2: 0,
                            y2: 0
                        },
                        stops: [
                            [0, 'white'],
                            [1, 'rgb(133,186,235)']
                        ]
                    },
          }
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
        type: 'area',
        data: [1, 5, 20, 40, 50, 55, 58, 60],
        color: 'rgb(133,186,235)',
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

  constructor() { }

  ngOnInit(): void {
  }

}
