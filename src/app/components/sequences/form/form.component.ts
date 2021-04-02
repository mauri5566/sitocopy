import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../sequences.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

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

  @ViewChild('input') input!: ElementRef;
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      sequenceId: new FormControl(null, [Validators.pattern('[0-9a-fA-F]{24}')]),
      prefix: new FormControl(null, [Validators.pattern('[a-z0-9.:]{,20}((::)|.)/[0-9]{2}')]),
      collectorPeerIp: new FormControl(null, [Validators.pattern('[a-z0-9]{5,}')]),
      asOrigin: new FormControl(null),
      suffix: new FormControl(null),
      collectorAsn: new FormControl(null),
      durationGreater: new FormControl(null),
      durationSmaller: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      updates: new FormControl(null),
      withdraws: new FormControl(null),
      announces: new FormControl(null),
    });
  }


    // tslint:disable-next-line: typedef
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
}
}
