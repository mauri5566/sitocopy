import {Sequence} from './sequence';
export interface PaginatedResult{
  readonly items: Sequence[];
  readonly total: number;
}
