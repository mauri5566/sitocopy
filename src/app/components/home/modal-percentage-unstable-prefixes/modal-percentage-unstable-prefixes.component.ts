import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

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
      text: 'CDF of the percentage of prefixes appearing in at least a sequence among those announced by an AS',
      style: {
        color: 'whitesmoke'
      }
    },
    chart: {
      type: 'area',
      zoomType: 'x',
      backgroundColor: '#323232',
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
                            [0, '#323232'],
                            [1, '#009879']
                        ]
                    },
          }
    },
    tooltip: {
      formatter: function () {
            return '<b>' + this.series.name +
            '</b><br>x: <b>' + this.x +
                '</b><br>y: <b>' + this.y + '</b>'},
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
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            text: 'CDF of the percentage of prefixes appearing in at least a sequence among those announced by an AS',
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
            text: 'Fraction of ASes',
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
        name: 'CDF of the percentage of prefixes appearing in at least a sequence among those announced by an AS',
        type: 'area',
        data: [1, 4, 7, 18, 30, 40, 45, 48, 50],
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
