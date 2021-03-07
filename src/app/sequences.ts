import { NumberValueAccessor } from '@angular/forms';

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
  "announces": 732493,
  "withdraws": 0,
  "updates": 732493,
  "duration": "84.22:53:52",
  "frequency": 0.09979425157819476
}
