import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import {CDFData} from 'src/app/model/cdfData';
import { ChartService } from 'src/app/services/chart.service';
import { Subscription, timer, interval } from 'rxjs';
import { CPData } from 'src/app/model/cpData';
import { DataSet } from 'src/app/model/dataSet';
import { Data } from '@angular/router';
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
  update = false;
  show = false;
  dataSet: DataSet[] = [];

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
            return '</b><br> <b>' + this.point.name +
                '</b><br>number of sequences: <b>' + this.y + '</b>'},
      backgroundColor: 'whitesmoke',
      borderColor: 'black',
      style: {
        color: 'black'
      }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            enabled: false
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
        type: 'logarithmic',
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
        data: [{name: '', y: 0}],
        color: '#009879',
        }
    ],
    plotOptions: {
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

  constructor(public chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getNumberOfSequencesData().subscribe(
      (data: CPData[]) => {
        for (let i = 0; i < data.length; i++){
          this.dataSet.push({name: data[i].cp.peerIPAddress + " (AS: " + data[i].cp.peerAS + ")", y: data[i].sequencesCount})
        }
        this.dataSet.sort(this.compare);

        this.chartOptions.series = [
          {
            name: 'ao',
            type: 'column',
            data: this.dataSet,
            color: '#009879',
          }
        ];
        this.update = true;
        this.show = true;
      }
    );
  }

  compare(a: DataSet, b: DataSet) {
			if (a.y < b.y) {
				return 1;
			}
			if (a.y > b.y) {
				return -1;
      }
      return 0
		}


}
