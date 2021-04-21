import { Component, OnInit } from '@angular/core';
import { HomeData } from '../../model/homeData';
import { HttpClient } from '@angular/common/http';
import { HomeService } from 'src/app/services/home.service';
import { ModalDurationCdfComponent } from './modal-duration-cdf/modal-duration-cdf.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalAsPathNumberCdfComponent } from './modal-as-path-number-cdf/modal-as-path-number-cdf.component';
import { ModalPrefixDistributionCdfComponent } from './modal-prefix-distribution-cdf/modal-prefix-distribution-cdf.component';
import { ModalUpdatesPerSequenceCdfComponent } from './modal-updates-per-sequence-cdf/modal-updates-per-sequence-cdf.component';
import { ModalNumberUpdatesCpComponent } from './modal-number-updates-cp/modal-number-updates-cp.component';
import { ModalNumberSequencesCpComponent } from './modal-number-sequences-cp/modal-number-sequences-cp.component';
import { ModalMostFrequentUpdateComponent } from './modal-most-frequent-update/modal-most-frequent-update.component';
import { ModalLongestSuffixComponent } from './modal-longest-suffix/modal-longest-suffix.component';
import { ModalFrequencyUpdateComponent } from './modal-frequency-update/modal-frequency-update.component';
import { ModalPercentageUnstablePrefixesComponent } from './modal-percentage-unstable-prefixes/modal-percentage-unstable-prefixes.component';
import { HomeData2 } from 'src/app/model/homedata2';
import { RouteConfigLoadEnd } from '@angular/router';
import {Overlay} from '@angular/cdk/overlay';

/*const  elements: HomeData[] = [{
    aSes: 25494,
    aggregatorChanges: 23739,
    announces: 7946086559,
    beaconAnnouncements: 42897163,
    beaconSequences: 7125,
    beaconWithdrawals: 7529847,
    cPs: 172,
    containingLoops: 31602,
    containsAggregator: 44302,
    moreThanOneAsOrigin: 7135,
    prefixes: 222285,
    prefixv4: 260268,
    prefixv6: 174522,
    sequences: 434790,
    withdraws: 368546514,
  }]
;*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  element!: HomeData;
  element2!: HomeData2;
  /*elements = elements;*/
  constructor(private homeService: HomeService,
              public dialog: MatDialog,
              ) {
   }

  ngOnInit(): void {
    this.homeService.getData().subscribe((data: HomeData) => {this.element = data; });
    this.homeService.getData2().subscribe((data2: HomeData2) => {this.element2 = data2; });
  }

  sum(n1: number, n2: number): number{
    return n1 + n2;
  }

  percentage(total: number, element: number){
    let result = (element/total)*100;
    return result.toFixed(2);
  }

  openDialog(){
    this.dialog.open(ModalDurationCdfComponent, {
      width: '100%',
      height: '640px'
    });
  }

  openDialog2(){
    this.dialog.open(ModalAsPathNumberCdfComponent, {
      width: '100%',
      height: '640px'
    });
  }

  openDialog3(){
    this.dialog.open(ModalPrefixDistributionCdfComponent, {
      width: '100%',
      height: '640px'
    });
  }

  openDialog4(){
    this.dialog.open(ModalUpdatesPerSequenceCdfComponent, {
      width: '100%',
      height: '640px'
    });
  }

  openDialog5(){
    this.dialog.open(ModalNumberUpdatesCpComponent, {
      width: '100%',
      height: '640px'
    });
  }

  openDialog6(){
    this.dialog.open(ModalNumberSequencesCpComponent, {
      width: '100%',
      height: '640px'
    });
  }

  openDialog7(){
    this.dialog.open(ModalMostFrequentUpdateComponent, {
      width: '90%',
      height: '580px',
      maxHeight: '100vh',
      maxWidth: '100vw',
    });
  }

  openDialog8(){
    this.dialog.open(ModalLongestSuffixComponent, {
      width: '100%',
      height: '640px'
    });
  }

  openDialog9(){
    this.dialog.open(ModalFrequencyUpdateComponent, {
      width: '90%',
      height: '580px',
      maxHeight: '100vh',
      maxWidth: '100vw',
    });
  }

  openDialog10(){
    this.dialog.open(ModalPercentageUnstablePrefixesComponent, {
      width: '100%',
      height: '640px'
    });
  }
}
