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
  bucketAnnouncements: Array<[Date, number]> = [];
  bucketWithdrawals: Array<{x: number, y: number}> = [];
  chartOptions: Options = {
    title: {
      text: 'Sequences detected for prefix' + this.data.prefix + 'as seen from collector peer' + this.data.peerIPAddress + '(AS' + this.data.peerAS + ')',
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
    plotOptions: {
      series: {
        turboThreshold: 500000,
        dataGrouping: {
          approximation: "sum",
          smoothed: false,
          groupPixelWidth: 2,
          enabled: true,
          dateTimeLabelFormats: {
            millisecond: [
                '%A, %b %e, %H:%M:%S.%L', '%A, %b %e, %H:%M:%S.%L', '-%H:%M:%S.%L'
              ],
              second: ['%A, %b %e, %H:%M:%S', '%A, %b %e, %H:%M:%S', '-%H:%M:%S'],
              minute: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],
              hour: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],
              day: ['%A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
              week: ['Week from %A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],
              month: ['%B %Y', '%B', '-%B %Y'],
              year: ['%Y', '%Y', '-%Y']
            },
            units: [
              ['millisecond', []],
              ['second', []],
              ['minute', [30]],
              ['hour', [1, 6, 12]],
              ['day', [1]],
              ['week', null],
							['month', null],
							['year', null]
						]
          }
        }
    },
    rangeSelector: {
				enabled: false
			},
			navigator: {
				enabled: false
			},

    xAxis: {
      type: 'datetime',
      visible: true,
      dateTimeLabelFormats: {
        millisecond: '%e/%b/%y %H:%M:%S.%L',
        second: '%e/%b/%y %H:%M:%S',
        minute: '%e/%b/%y %H:%M',
        hour: '%e/%b/%y %H:%M',
        day: '%e/%b/%y',
        week: '%e/%b/%y',
        month: '%e/%b/%y',
        year: '%m/%y'
      },
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
            text: '',
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
            text: 'Number of messages',
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
            boostThreshold: 0
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
    .subscribe((data: SequenceChartData[]) => {
      this.dataChart = data;
      this.update = true;
      this.show = true;
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
        this.bucketAnnouncements[n] = [
          new Date(n * 1000),
          0
        ];
        this.bucketWithdrawals[n] = {
          x: 1,
          y: 0
        };
      }
      for (const val of this.dataChart) {
        const date = val.date;
        this.bucketAnnouncements[moment.utc(date).unix()][1] = val.announces;
      }

      this.chartOptions.series = [
          {
            name: 'ao',
            type: 'line',
            data: this.bucketAnnouncements,
            color: '#009879',
          }
        ];
        });
    }

    ngAfterViewInit(): void{
      setInterval(() => {console.log(this.bucketAnnouncements); }, 1000);
  }
}
