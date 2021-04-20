import { inject, AfterViewInit, Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { fromEvent, Subscription, timer } from 'rxjs';
import { SequencesComponent } from '../sequences.component';
import { debounceTime, distinctUntilChanged, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../sequences.component.css']
})
export class FormComponent implements /*AfterViewInit,*/ OnInit {

  constructor(@Inject(SequencesComponent) private sequencesComponent: SequencesComponent) { }

  panelOpenState = false;
  formGroup!: FormGroup;

  sequenceId!: string;
  asOrigin!: number;
  prefix!: string;
  suffix!: number;
  collectorIp!: string;
  collectorAsn!: string;
  durationGreater!: number;
  durationSmaller!: number;
  startDate!: Date;
  endDate!: Date;
  updates!: number;
  withdraws!: number;
  announces!: number;
  hasAggregator!: boolean;
  containsASPaths!: boolean;

  show = true;
  timerSubscription!: Subscription;

  @ViewChild('input') input!: ElementRef;
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      sequenceId: new FormControl(null, [Validators.pattern('[0-9a-fA-F]{24}')]),
      prefix: new FormControl(null/*, [Validators.pattern('[a-z0-9.:]{,20}((::)|.)/[0-9]{2}')]*/),
      collectorPeerIp: new FormControl(null, [Validators.pattern('[a-z0-9]{5,}')]),
      asOrigin: new FormControl(null),
      suffix: new FormControl(null),
      collectorAsn: new FormControl(null),
      durationGreater: new FormControl(null),
      durationSmaller: new FormControl(null),
      updates: new FormControl(null),
      withdraws: new FormControl(null),
      announces: new FormControl(null),
    });
  }

  ngAfterViewInit(): void {
    /*this.timerSubscription = timer(0, 5000).pipe(
      map(() => {
        this.sequencesComponent.paginator.pageIndex = 0; // load data contains the http request
      })
    ).subscribe();*/
    /*fromEvent(this.input.nativeElement, 'keyup')
    .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
            this.sequencesComponent.paginator.pageIndex = 0;
            this.sequencesComponent.loadSequences();
        })
    )
    .subscribe();*/
  }

  loadSequences(): void {
    this.sequencesComponent.loadSequences();
    if (this.sequenceId == null || this.sequenceId === ''){
      this.show = true;
    }
    else{
      this.show = false;
    }
  }

  /*hideOrShow(): void{
    if (this.sequenceId == null || this.sequenceId === ''){
      this.show = true;
    }
    else{
      this.show = false;
    }

  }*/


    // tslint:disable-next-line: typedef
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
}
}
