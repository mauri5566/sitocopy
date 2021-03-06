import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SequencesService} from '../sequences.service';
import {MatTableDataSource} from '@angular/material/table';

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
export class SequencesComponent {
  columnsToDisplay: string[] = ['Sequence ID', 'Prefix', 'Collector Peer', 'RRC', 'Start Time', 'End Time'];
  dataSource = ELEMENT_DATA;
  expandedElement: Sequences [] = [];
}

  
export interface Sequences{
	id: string;
	prefix: string;
  rRC : number;
  collectorPeer: {peerBGPId: number, peerIPAddress: string, peerAS: number}
	start: string;
  end: string;
  longestCommonAsPathSuffix: number,
  asPathNumber: number,
  mostFrequentUpdateFrequency: number,
  mostFrequentUpdateFrequencyInMin: number,
  hasAsPathsNotValid: boolean,
  announces: number,
  withdraws: number,
  updates: number,
  duration: string,
  frequency: number
}

const ELEMENT_DATA: Sequences[] = [
  {
      id: '5ee56984a62b68061ce5b638',
      prefix: '2a0d:8d80::/32',
      rRC: 0,
      collectorPeer: {
        peerBGPId: 0,
        peerIPAddress: '2a07:a40::',
        peerAS: 48821
      },
      start: '2019-01-01T00:00:00Z',
      end: '2019-03-26T22:53:52Z',
      longestCommonAsPathSuffix: -1,
      asPathNumber: -1,
      mostFrequentUpdateFrequency: -1,
      mostFrequentUpdateFrequencyInMin: 0,
      hasAsPathsNotValid: false,
      announces: 0,
      withdraws: 0,
      updates: 0,
      duration: '84.22:53:52',
      frequency: 0
    },
    {
      id: '5ee56984a62b68061ce5b675',
      prefix: '2a0d:8d80::/32',
      rRC: 0,
      collectorPeer: {
        peerBGPId: 0,
        peerIPAddress: '2001:8e0:0:ffff::9',
        peerAS: 8758
      },
      start: '2019-01-01T00:00:00Z',
      end: '2019-12-31T23:59:51Z',
      longestCommonAsPathSuffix: -1,
      asPathNumber: -1,
      mostFrequentUpdateFrequency: -1,
      mostFrequentUpdateFrequencyInMin: 0,
      hasAsPathsNotValid: false,
      announces: 0,
      withdraws: 0,
      updates: 0,
      duration: '364.23:59:51',
      frequency: 0
    },
    {
      id: '5ee56984a62b68061ce68a7f',
      prefix: '2a00:ad87:4600::/48',
      rRC: 0,
      collectorPeer: {
        peerBGPId: 0,
        peerIPAddress: '2001:728:1808::2',
        peerAS: 15562
      },
      start: '2019-01-01T00:00:00Z',
      end: '2019-04-15T11:39:44Z',
      longestCommonAsPathSuffix: -1,
      asPathNumber: -1,
      mostFrequentUpdateFrequency: -1,
      mostFrequentUpdateFrequencyInMin: 0,
      hasAsPathsNotValid: false,
      announces: 0,
      withdraws: 0,
      updates: 0,
      duration: '104.11:39:44',
      frequency: 0
    },
];




