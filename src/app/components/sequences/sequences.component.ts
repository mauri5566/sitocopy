import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SequencesService} from '../../services/sequences.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalChartComponent } from './modal-chart/modal-chart.component';
import { ModalAsTreeComponent } from './modal-as-tree/modal-as-tree.component';
import { SequencesDataSource } from '../../services/sequences.datasource';
import { Sequence } from '../../model/sequence';

@Component({
  selector: 'app-sequences',
  templateUrl: './sequences.component.html',
  styleUrls: ['./sequences.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SequencesComponent implements AfterViewInit{


  constructor(public dialog: MatDialog,
              public sequencesService: SequencesService){}

  columnsToDisplay: string[] = ['Sequence ID', 'Prefix', 'Collector Peer', 'RRC', 'Start Time', 'End Time'];
  dataSource = new SequencesDataSource(this.sequencesService);
  expandedElement: Sequence [] = [];
  panelOpenState = false;

@ViewChild(MatPaginator) paginator!: MatPaginator;

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.paginator.page.subscribe(x => this.loadSequences());
    this.loadSequences();
    this.dataSource.length.subscribe(x => this.paginator.length = x);
  }

  loadSequences(): void{
    this.dataSource.loadSequences(this.paginator.pageIndex + 1, this.paginator.pageSize, '00');
  }

  // tslint:disable-next-line: typedef
  openDialog(){
    this.dialog.open(ModalAsTreeComponent, {
      width: '90%',
      height: '640px'
    });
  }

  // tslint:disable-next-line: typedef
  openDialog2(){
    this.dialog.open(ModalChartComponent, {
      width: '90%',
      height: '640px'
    });
  }


/*// tslint:disable-next-line: typedef
applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

  checkExpanded(element: Sequence): boolean {
    let flag = false;
    this.expandedElement.forEach(e => {
      if (e === element) {
        flag = true;

      }
    });
    return flag;
  }

  // tslint:disable-next-line: typedef
  pushPopElement(element: Sequence) {
    const index = this.expandedElement.indexOf(element);
    console.log(index);
    if (index === -1) {
        this.expandedElement.push(element);
    } else {
      this.expandedElement.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
}
}


