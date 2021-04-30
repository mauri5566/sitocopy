import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger, sequence } from '@angular/animations';
import { SequencesService } from '../../services/sequences.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalChartComponent } from './modal-chart/modal-chart.component';
import { ModalAsTreeComponent } from './modal-as-tree/modal-as-tree.component';
import { SequencesDataSource } from '../../services/sequences.datasource';
import { Sequence } from '../../model/sequence';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { fromEvent, Subscription, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { Ripe } from 'src/app/model/ripe';
import { FormComponent } from './form/form.component';
import { RipeService } from 'src/app/services/ripe.service';

@Component({
  selector: 'app-sequences',
  templateUrl: './sequences.component.html',
  styleUrls: ['./sequences.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SequencesComponent implements AfterViewInit, OnInit {


  constructor(public dialog: MatDialog,
<<<<<<< HEAD
              public sequencesService: SequencesService,
              private formBuilder: FormBuilder,
              public ripeService : RipeService){}
=======
    public sequencesService: SequencesService,
    private formBuilder: FormBuilder,
    public ripeService: RipeService) { }
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6

  columnsToDisplay: string[] = ['Sequence ID', 'Prefix', 'Collector Peer', 'RRC', 'Start Time', 'End Time', 'Fittizio'];
  dataSource = new SequencesDataSource(this.sequencesService);
  expandedElement: Sequence[] = [];
  panelOpenState = false;
  formGroup!: FormGroup;
  @ViewChild(FormComponent)
  datiForm!: FormComponent;

  elementRipe: Ripe[] = [{
    version: '',
    data_call_status: '',
    cached: true,
    data: {
      is_less_specific: true,
      announced: false,
      asns: [{
        asn: 1,
        holder: 'holder'
      }],
      related_prefixes: [],
      resource: '',
      type: '',
      block: {
        resource: '',
        desc: '',
        name: '',
      },
      actual_num_related: 1,
      query_time: '',
      num_filtered_out: 1,
    },
    query_id: '',
    process_time: 1,
    server_id: '',
    build_version: '',
    status: '',
    status_code: 1,
    time: '',
  }];
  timerSubscription!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.formGroup = new FormGroup({
      sequenceId: new FormControl(null, [Validators.pattern('[0-9a-fA-F]{24}')]),
      prefix: new FormControl(null, [Validators.pattern('[a-z0-9.:]{,20}((::)|.)/[0-9]{2}')]),
      collectorPeerIp: new FormControl(null, [Validators.pattern('[a-z0-9]{5,}')]),
    });
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.paginator.page.subscribe(x => this.loadSequences());
    this.loadSequences();
    this.dataSource.length.subscribe(x => this.paginator.length = x);
    /*if (this.datiForm.sequenceId != null && this.datiForm.sequenceId !== ''){
      this.paginator.page.subscribe(x => this.loadSequence());
      this.loadSequence();
      this.dataSource.length.subscribe(x => this.paginator.length = x)
    }*/
    /*
    this.timerSubscription = timer(0, 10000).pipe(
      map(() => {
        this.loadSequences(); // load data contains the http request
      })
    ).subscribe();*/
  }

  loadSequences(): void {
    this.dataSource.loadSequences(this.paginator.pageIndex + 1, this.paginator.pageSize, '00', this.datiForm);
  }

  /*loadSequence(): void {
    this.dataSource.loadSequence(this.datiForm);
  }*/

  // tslint:disable-next-line: typedef
  openDialog() {
    this.dialog.open(ModalAsTreeComponent, {
      width: '90%',
      height: '640px'
    });
  }

  // tslint:disable-next-line: typedef
  openDialog2() {
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
      this.dataSource.loadSequencesById(element);
      this.ripeService.getRipe(element.prefix).subscribe((ripe: Ripe) => this.elementRipe[element.asOrigins] = ripe);
      this.expandedElement.push(element);
      console.log(element.containsLoops)
    } else {
      this.expandedElement.splice(index, 1);
    }
  }

  prefixRef(prefix: string) {
    window.location.href = "https://stat.ripe.net/ + prefix + #tabId=at-a-glance";
  }

  show(element: Sequence){
    if(element.containsLoops === true){
      return true;
    }
    else{
      return false;
    }
  }
}


