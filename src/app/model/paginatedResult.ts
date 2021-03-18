import {Sequences} from './sequences';
export interface PaginatedResult{
	readonly items : Sequences[];
	readonly total : number;
}