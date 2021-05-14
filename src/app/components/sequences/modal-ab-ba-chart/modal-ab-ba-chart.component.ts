import { Component, OnInit, Inject } from '@angular/core';
import { Options } from 'highcharts';
import { Subscription } from 'rxjs';
import * as Highcharts from 'highcharts';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouteABBA } from 'src/app/model/routeABBA';
import { ChartService } from 'src/app/services/chart.service';
import { ABBAData } from 'src/app/model/ABBAData';
import { ABBAChartData } from 'src/app/model/ABBAchartdata';

@Component({
  selector: 'app-modal-ab-ba-chart',
  templateUrl: './modal-ab-ba-chart.component.html',
  styleUrls: ['./modal-ab-ba-chart.component.css']
})
export class ModalAbBaChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;
  update = false;
  show = false;
  timerSubscription!: Subscription;
  dataChart!: ABBAData[];
  bucketDates: number[] = [];
  asPath1ArrivalTimes: Date[] = [];
  asPath2ArrivalTimes: Date[] = [];
  rawData: any[] = [];
  shapes1: string[] = ['circle', 'triangle', 'circle', 'triangle', 'circle', 'triangle'];
  shapes2: string[] = ['diamond', 'triangle-down', 'diamond', 'triangle-down', 'diamond', 'triangle-down']
  colors1: string[] = ['#EF9F60', '#009879', '#CA38CA', '#2B2BCD', '#FFFFFF'];
  colors2: string[] = ['#7DB5E9', '#E9E44C', '#F7AB12', '#9E4F4F', '#F71212']
  chartOptions: Options = {
    title: {
      text: 'AB-BA Chart',
      style: {
        color: 'whitesmoke'
      }
    },
    chart: {
      type: 'scatter',
      zoomType: 'x',
      backgroundColor: '#323232',
    },
    plotOptions: {
      series: {
        turboThreshold: 50000
      }
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
                fontSize: '1em'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            text: 'Dates',
            style: {
                color: '#A0A0A3',
                fontSize: '1.3em'
            }
        }

    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            enabled: false
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
          text: ''
        }
    },
    credits: {
      enabled: false,
    }as Highcharts.CreditsOptions,
    series: [{
      name: 'ao',
            type: 'scatter',
            data: [],
            color: '#009879',
    }
    ],
    legend: {
        enabled: true,
        itemStyle: {
          color: '#E0E0E3',
        }
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
              @Inject(MAT_DIALOG_DATA) public data: RouteABBA) { }

  ngOnInit(): void {
    this.chartService.getABBAChartData(this.data.sequenceId).subscribe((data: ABBAData[]) => {
      for (let i = 0; i < data.length; i++) {
        this.rawData.push({
          dataLabels: {
            allowOverlap: false,
            enabled: false
        },
        data: data[i].asPath1ArrivalTimes.map(x => {
          return { x: new Date(x), y: i + 1 }
        }).sort(function (a, b) {
          if (a.x < b.x) return -1;
          if (a.x > b.x) return 1;
					return 0;
        }),
        name: data[i].asPath1[0].as.toString() + '(' + data[i].asPath1ArrivalTimes.length + ')',
        color: this.colors1[i],
        marker: {
          symbol: this.shapes1[i]
        }
      });
    }
      for (let i = 0; i < data.length; i++) {
        this.rawData.push({
          dataLabels: {
            allowOverlap: true,
            enabled: false
          },
          data: data[i].asPath2ArrivalTimes.map(x => {
            return { x: new Date(x), y: i + 1 }
          }).sort(function(a, b) {
            if (a.x < b.x){ return -1; }
					       if (a.x > b.x){ return 1; }
					return 0;
        }),
        name: data[i].asPath2[0].as.toString() + '(' + data[i].asPath2ArrivalTimes.length + ')',
        color: this.colors2[i],
        marker: {
          symbol: this.shapes2[i]
        }
      });
    }
    this.chartOptions.series = this.rawData;
    this.update = true;
        this.show = true;
    });
  }

  ngAfterViewInit(): void{
    setInterval(() => {console.log(this.chartOptions.series);}, 1000)
  }

  compare(a: ABBAChartData, b: ABBAChartData) {
			if (a.x < b.x) {
				return 1;
			}
			if (a.x > b.x) {
				return -1;
      }
      return 0
		}


}
