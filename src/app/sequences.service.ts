import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sequences } from './model/sequences';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { PaginatedResult } from './model/paginatedResult';

@Injectable({
  providedIn: 'root'
})
export class SequencesService {

  constructor(private http: HttpClient) { }

   findSequences(pageIndex: number, pageSize: number, rrc: string): Observable<PaginatedResult> {

        return this.http.get<PaginatedResult>('https://bgpie.net/api/rrc/' + rrc + '/sequence', {
            params: new HttpParams()
                .set('page', pageIndex.toString())
                .set('limit', pageSize.toString())
        });
    }


  getSequence(id: string) : Observable<Sequences> {
      return this.http.get<Sequences>("https://bgpie.net/api/sequence/" + id);
    }
}
