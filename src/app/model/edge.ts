import { TreeNodeWithChildren, TreeNodeWithValue } from './treeNode';

export interface Edge {
    from: (TreeNodeWithValue | TreeNodeWithChildren);
    to: (TreeNodeWithValue | TreeNodeWithChildren);
    weight: number;
}
