import {Sequence} from './sequence';
import {Ripe} from './ripe';
export interface PaginatedResult{
  readonly items: Sequence[];
  readonly total: number;
}
