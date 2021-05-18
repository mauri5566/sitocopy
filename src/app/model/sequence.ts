import {Ripe} from './ripe';
import { TreeNodeWithValue, TreeNodeWithChildren } from './treeNode';
export interface Sequence{
  id: string;
  prefix: string;
  rRC: number;
  collectorPeer: {
    peerBGPId: number;
    peerIPAddress: string;
    peerAS: number;
  };
  start: string;
  end: string;
  runID: string;
  longestCommonAsPathSuffix: number;
  asPathNumber: number;
  asOrigins: number;
  hasAggregator: boolean;
  containsAsPathLoops: boolean;
  containsLoops: boolean;
  mostFrequentUpdateFrequency: number;
  hasAsPathsNotValid: boolean;
  asTreeWithoutAggregator: {
    head: {
      name: string;
      children: (TreeNodeWithChildren|TreeNodeWithValue)[];
    }
  };
  announces: number;
  withdraws: number;
  updates: number;
  duration: string;
  frequency: number;
  readonly ripe: Ripe;
}
