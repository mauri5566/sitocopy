import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SequencesService} from '../sequences.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

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
  columnsToDisplay: string[] = ['Sequence ID', 'Prefix', 'Collector Peer', 'RRC', 'Start Time', 'End Time'];
  dataSource = new MatTableDataSource<Sequences>(ELEMENT_DATA);

  expandedElement: Sequences [] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 8,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 1267285,
      mostFrequentUpdateFrequencyInMin: 2.4111213121541035,
      hasAsPathsNotValid: false,
      announces: 3069391,
      withdraws: 0,
      updates: 3069391,
      duration: '364.23:59:51',
      frequency: 0.09732977790360227
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 4,
      asPathNumber: 126,
      asOrigins: [9890],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 12869,
      mostFrequentUpdateFrequencyInMin: 0.08553118974024501,
      hasAsPathsNotValid: false,
      announces: 67209,
      withdraws: 14351, updates: 81560,
      duration: '104.11:39:44',
      frequency: 0.009034532384301271
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
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
      runID: 'RRC00-v6',
      longestCommonAsPathSuffix: 1,
      asPathNumber: 12,
      asOrigins: [31424],
      hasAggregator: false,
      containsLoops: false,
      containsAsPathLoops: true,
      mostFrequentUpdateFrequency: 176682,
      mostFrequentUpdateFrequencyInMin: 1.4442607334681918,
      hasAsPathsNotValid: false,
      announces: 732493,
      withdraws: 0,
      updates: 732493,
      duration: '84.22:53:52',
      frequency: 0.09979425157819476
    },
];

export interface Sequences{
	id: string,
  prefix: string,
  rRC: 0,
  collectorPeer: {
    peerBGPId: number,
    peerIPAddress: string,
    peerAS: number,
  }
  start: string,
  end: string,
  runID: string,
  longestCommonAsPathSuffix: number,
  asPathNumber: number,
  asOrigins: [
    number
  ],
  hasAggregator: boolean,
  containsLoops: boolean,
  containsAsPathLoops: boolean,
  mostFrequentUpdateFrequency: number,
  mostFrequentUpdateFrequencyInMin: number,
  hasAsPathsNotValid: boolean,
  announces: number,
  withdraws: number,
  updates: number,
  duration: string,
  frequency: number
}





