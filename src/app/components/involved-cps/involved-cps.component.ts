import { Component, OnInit } from '@angular/core';
import { InvolvedCP } from 'src/app/model/involvedCP';
import { InvolvedCpsService } from 'src/app/services/involved-cps.service';
import { InvolvedCpsDataSource } from 'src/app/services/involved-cps.datasource';
import {MatButtonModule} from '@angular/material/button';
import { ModalSegmentChartComponent } from './modal-segment-chart/modal-segment-chart.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-involved-cps',
  templateUrl: './involved-cps.component.html',
  styleUrls: ['./involved-cps.component.css']
})
export class InvolvedCpsComponent implements OnInit {

  constructor(private involvedCPsService: InvolvedCpsService,
              public dialog: MatDialog) { }

  dataSource = new InvolvedCpsDataSource(this.involvedCPsService);
  columnsToDisplay: string[] = ['Collector Peer IP', 'Collector Peer ASn', 'Location', 'Chart'];

  ngOnInit(): void {
    /*this.involvedCPsService.getData().subscribe((involvedCPs: InvolvedCP[]) => {
      this.element = involvedCPs;
    }
    );*/
    this.loadInvolvedCps();
  }

  loadInvolvedCps(): void{
    this.dataSource.loadInvolvedCps();
  }

  openDialog(peerAS: number, peerIPAddress: string): void{
    this.dialog.open(ModalSegmentChartComponent, {
     width: '90%',
      height: '580px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        peerAS,
        peerIPAddress
      }
    });
  }

}
