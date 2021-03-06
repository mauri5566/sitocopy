import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SequencesService} from '../sequences.service';
import {Sequences} from '../sequences';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sequences',
  templateUrl: './sequences.component.html',
  styleUrls: ['./sequences.component.css']
})
export class SequencesComponent implements OnInit {

  ELEMENT_DATA: Sequences[] = [];
  displayedColumns: string[] = ['Sequence ID', 'Prefix', 'RRC', 'Start Time', 'End Time'];
  dataSource = new MatTableDataSource<Sequences>(this.ELEMENT_DATA);

  constructor(private service: SequencesService) { }

  ngOnInit(): void {
    this.getAllSequences();
  }

  public getAllSequences(){
    let resp = this.service.getData();
    resp.subscribe(report => this.dataSource.data = report as Sequences[]);
  }

}
