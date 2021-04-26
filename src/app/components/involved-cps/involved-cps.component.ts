import { Component, OnInit } from '@angular/core';
import { InvolvedCP } from 'src/app/model/involvedCP';
import { InvolvedCpsService } from 'src/app/services/involved-cps.service';
import { InvolvedCpsDataSource } from 'src/app/services/involved-cps.datasource';

@Component({
  selector: 'app-involved-cps',
  templateUrl: './involved-cps.component.html',
  styleUrls: ['./involved-cps.component.css']
})
export class InvolvedCpsComponent implements OnInit {

  constructor(private involvedCPsService: InvolvedCpsService) { }
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

}
