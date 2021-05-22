import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { Options } from 'highcharts';
import { ChartService } from 'src/app/services/chart.service';
import { CDFData } from 'src/app/model/cdfData';

@Component({
  selector: 'app-modal-duration-cdf',
  templateUrl: './modal-duration-cdf.component.html',
  styleUrls: ['./modal-duration-cdf.component.css']
})
export class ModalDurationCdfComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;
  update = false;
  show = false;
  timerSubscription!: Subscription;
  chartOptions: Options = {
    title: {
      text: 'CDF of the durations',
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
            text: 'Duration (Days)',
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
            },
            format: '{value}%'
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
    this.chartService.getDurationData().subscribe(
      (data: CDFData[]) => {
        this.update = true;
        this.show = true;
        this.chartOptions.series = [
          {
            name: 'Duration (Days)',
            type: 'line',
            data: data.map(e => [e.item1, e.item2]),
            color: '#009879',
          }
        ];
      });



}
}
