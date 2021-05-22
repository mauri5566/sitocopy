
import { TreeNode } from './treeNode';
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
  mostFrequentUpdateFrequencyInMin: number;
  hasAsPathsNotValid: boolean;
  asTreeWithoutAggregator: {
    head: TreeNode;
  };
  announces: number;
  withdraws: number;
  updates: number;
  duration: string;
  frequency: number;
}
