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
  highChart!: Highcharts.Chart | null;
  chartDataX: number[] = [];
  chartDataY: number[] = [];
  chartData: any[] = [];
  update = false;
  show = false;
  timerSubscription!: Subscription;
  chartOptions: Options = {
    title: {
      text: 'CDF of the most frequent update frequency',
      style: {
        color: 'whitesmoke'
      }
    },
    chart: {
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
            text: 'Frequency of the most frequent update in the sequence (upd/min)',
            style: {
                color: '#A0A0A3',
                fontSize: '1.3em'
            }
        }

    },
    yAxis: {
        min: 98.5,
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
      enabled: false,
    }as Highcharts.CreditsOptions,
    series: [{
      name: 'ao',
            type: 'line',
            data: [],
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

  constructor(public chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getMostFrequentUpdateData().subscribe(
      (data: ChartData[]) => {
        /*for (let i = 0; i < data.length; i++){
          this.chartDataX.push(data[i].item1);
          this.chartDataY.push(data[i].item2);
          this.chartData.push([this.chartDataX[i], this.chartDataY[i]]);
        }*/
        /*this.chartOptions.series = [
          {
            name: 'ao',
            type: 'line',
            data: data.map(e => [e.item1, e.item2]),
            color: '#009879',
          }
        ];*/
        this.update = true;
        this.show = true;
        this.chartOptions.series = [
          {
            name: 'ao',
            type: 'line',
            data: data.map(e => [e.item1, e.item2]),
            color: '#009879',
          }
        ];
      });



}

  ngAfterViewInit(){
    setInterval(() => {console.log(this.chartOptions.series);}, 1000)
  }

}
