import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartService } from 'src/app/services/chart.service';
import { RouteSegment } from 'src/app/model/routeSegment';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-modal-segment-chart',
  templateUrl: './modal-segment-chart.component.html',
  styleUrls: ['./modal-segment-chart.component.css']
})
export class ModalSegmentChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;
  update = false;
  show = false;
  dataset: any[] = [];

  chartOptions: Options = {
    chart: {
				type: 'line',
				//zoomType: 'x',
				animation: false
			},
			plotOptions: {
				series: {
					turboThreshold: 5000000,
					enableMouseTracking: false,
					animation: {
						duration: 0
					},
					states: {
						hover: {
							enabled: false
						}
					},
					marker: {
						enabled: false
					}
				}
			},
			drilldown: {
				animation: {
					duration: 0
				}
			},
			title: {
				text: ''
			},
			tooltip: {
				enabled: false
			},
			legend: {
				enabled: false
			},
			xAxis: {
				visible: true,
				type: 'datetime',
				labels: {
					style: {
						fontSize: '20px',
					}
				},
				showFirstLabel: true
			},
			yAxis: {
				title: {
					text: ''
				},
				labels: {
					enabled: false
				},
				showLastLabel: false,
				visible: false
			},
			series: [{
        type: 'line',
        data: []
      }],
  };


  constructor(public chartService: ChartService,
              @Inject(MAT_DIALOG_DATA) public data: RouteSegment) { }

  ngOnInit(): void {
    this.chartService.getSegmentChartData(this.data.peerAS, this.data.peerIPAddress).subscribe((data: Array<Array<[number, number]>>) => {
      this.update = true;
      this.show = true;
      data.forEach(line => {

			line[0][0] *= 1000;
      line[1][0] *= 1000;
      this.dataset.push({data: line});
      });
      this.chartOptions.series = this.dataset
    });
  }

}
