import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Subscription } from 'rxjs';
import { Options } from 'highcharts';
import { ChartService } from 'src/app/services/chart.service';
import { CDFData } from 'src/app/model/cdfData';

@Component({
  selector: 'app-modal-updates-per-sequence-cdf',
  templateUrl: './modal-updates-per-sequence-cdf.component.html',
  styleUrls: ['./modal-updates-per-sequence-cdf.component.css']
})
export class ModalUpdatesPerSequenceCdfComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;
  update = false;
  show = false;
  timerSubscription!: Subscription;
  chartOptions: Options = {
    title: {
      text: 'Number of updates CDF',
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
            text: 'Number of updates per sequence',
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
            text: '',
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
    this.chartService.getUpdatesPerSequenceData().subscribe(
      (data: CDFData[]) => {
        this.update = true;
        this.show = true;
        this.chartOptions.series = [
          {
            name: 'Number of updates per sequence',
            type: 'line',
            data: data.map(e => [e.item1, e.item2]),
            color: '#009879',
          }
        ];
      });



  }


}
