import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SequencesService } from '../../services/sequences.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalChartComponent } from './modal-chart/modal-chart.component';
import { ModalAsTreeComponent } from './modal-as-tree/modal-as-tree.component';
import { SequencesDataSource } from '../../services/sequences.datasource';
import { Sequence } from '../../model/sequence';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ripe } from 'src/app/model/ripe';
import { FormComponent } from './form/form.component';
import { RipeService } from 'src/app/services/ripe.service';
import { ModalAbBaChartComponent } from './modal-ab-ba-chart/modal-ab-ba-chart.component';
import '../../../assets/beacons.js';
import { Beacons } from 'src/app/model/beacons';

declare const allBeacons: Beacons;


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
  beacon: (boolean|string) = false; 

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

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      sequenceId: new FormControl(null, [Validators.pattern('[0-9a-fA-F]{24}')]),
      prefix: new FormControl(null, [Validators.pattern('[a-z0-9.:]{,20}((::)|.)/[0-9]{2}')]),
      collectorPeerIp: new FormControl(null, [Validators.pattern('[a-z0-9]{5,}')]),
    });
  }


  ngAfterViewInit(): void {
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
  openDialog(sequence: Sequence) {
    this.dialog.open(ModalAsTreeComponent, {
      width: '90%',
      height: '580px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        sequence
      }
    });
  }

  // tslint:disable-next-line: typedef
  openDialog2(peerAS: number, peerIPAddress: string, prefix: string) {
    this.dialog.open(ModalChartComponent, {
      width: '90%',
      height: '580px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        peerAS,
        peerIPAddress,
        prefix
      }
    });
  }

  openDialog3(sequenceId: string){
    this.dialog.open(ModalAbBaChartComponent, {
      width: '90%',
      height: '580px',
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        sequenceId
      }
    });
  }


  /*// tslint:disable-next-line: typedef
  applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }*/

  checkBeacon(element: Sequence): void{
    if ( allBeacons.RIPE.includes(element.prefix)){
      this.beacon = 'RIPE';
    }
    if ( allBeacons['rfd.rg.net'].includes(element.prefix)){
      this.beacon = 'rfd.rg.net';
    }
  }

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
      this.checkBeacon(element);
      this.expandedElement.push(element);
    } else {
      this.expandedElement.splice(index, 1);
    }
  }

  prefixRef(prefix: string): void {
    window.open(`https://stat.ripe.net/${prefix}#tabId=at-a-glance`, '_blank');
  }

  openAsRank(element: Sequence): void{
    window.open(`https://asrank.caida.org/asns?asn=${element.asOrigins}`, '_blank');
  }

  ripestatBgpUpdate(startTime: string, endTime: string, prefix: string): void{
    window.open(`https://stat.ripe.net/widget/bgp-update-activity#w.starttime=${startTime}&w.endtime=${endTime}&w.resource=${prefix}`);
  }

  show(element: Sequence){
    if (element.containsLoops === true){
      return true;
    }
    else{
      return false;
    }
  }
}


