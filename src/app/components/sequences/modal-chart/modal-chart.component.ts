import { Component, OnInit, Inject } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { Options } from 'highcharts';
import { ChartService } from 'src/app/services/chart.service';
import { SequenceChartData } from 'src/app/model/sequenceChartData';
import { Route } from 'src/app/model/route';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Bucket } from 'src/app/model/bucket';

@Component({
  selector: 'app-modal-chart',
  templateUrl: './modal-chart.component.html',
  styleUrls: ['./modal-chart.component.css']
})
export class ModalChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;
  update = false;
  show = false;
  timerSubscription!: Subscription;
  dataChart: SequenceChartData[] = [];
  peerAS!: number;
  peerIPAddress!: string;
  prefix!: string;
  bucketAnnouncements!: Bucket[];
  bucketWithdrawals!: Bucket[];
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

  constructor(public chartService: ChartService,
              @Inject(MAT_DIALOG_DATA) public data: Route) { }

  ngOnInit(): void {
    this.chartService.getSequenceChartData(this.data.peerAS, this.data.peerIPAddress, this.data.prefix)
    .subscribe((data: SequenceChartData[]) => { this.dataChart = data; })
    let firstDay = Infinity;
    let lastDay = -Infinity;
    for (const val of this.dataChart){
      const date = moment.utc(val.date).unix();
      if (firstDay > date) {
        firstDay = date;
      }
      if (lastDay < date) {
        lastDay = date;
      }
    }
    for (let n = firstDay; n <= lastDay; n += 300) {
      this.bucketAnnouncements[n] = {
        x: new Date(n),
        y: 0
      };
      this.bucketWithdrawals[n] = {
        x: new Date(n),
        y: 0
      };
      this.update = true;
      this.show = true;
    }




    }
}
