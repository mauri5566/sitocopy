import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataSet } from 'src/app/model/dataSet';
import { Options } from 'highcharts';
import { CPDataUpdates } from 'src/app/model/cpdataupdates';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-modal-number-updates-cp',
  templateUrl: './modal-number-updates-cp.component.html',
  styleUrls: ['./modal-number-updates-cp.component.css']
})
export class ModalNumberUpdatesCpComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;
  update = false;
  show = false;
  dataSet: DataSet[] = [];
  dataSet2: DataSet[] = [];

  chartOptions: Options = {
    title: {
      text: 'Number of updates in found sequences per CP',
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
                '</b><br>' + this.series.name + ': <b>' + this.y + '</b>'},
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
            text: 'CPs',
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
            text: 'Number of sequences',
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

  constructor(public chartService: ChartService) { }

  ngOnInit(): void {
    this.chartService.getNumberOfUpdatesData().subscribe(
      (data: CPDataUpdates[]) => {
        for (let i = 0; i < data.length; i++){
          this.dataSet.push({name: data[i]._id.peerIPAddress + ' (AS: ' + data[i]._id.peerAS + ')', y: data[i].announcements})
          this.dataSet2.push({name: data[i]._id.peerIPAddress + ' (AS: ' + data[i]._id.peerAS + ')', y: data[i].withdrawals})
        }
        this.dataSet.sort(this.compare);

        this.chartOptions.series = [
          {
            name: 'number of announcements',
            type: 'column',
            data: this.dataSet,
            color: '#009879',
          },
          {
            name: 'number of withdrawals',
            type: 'column',
            data: this.dataSet2,
            color: 'yellow',
          },
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
