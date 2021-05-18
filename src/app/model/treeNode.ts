export interface TreeNode{
    name: string;
}

export interface TreeNodeWithChildren extends TreeNode {
    children: (TreeNodeWithChildren| TreeNodeWithValue)[];
}

export interface TreeNodeWithValue extends TreeNode {
    value: number;
}
