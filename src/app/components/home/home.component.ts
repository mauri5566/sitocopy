import { Component, OnInit } from '@angular/core';
import { HomeData } from '../../model/homeData';
import { HttpClient } from '@angular/common/http';
import { HomeService } from 'src/app/services/home.service';

const  elements: HomeData[] = [{
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
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*elements!: HomeData;*/
  elements = elements;
  constructor(private homeService: HomeService) {
   }

  ngOnInit(): void {
    /*this.homeService.getData().subscribe((data: HomeData) => {this.elements = data; });*/
  }



}
