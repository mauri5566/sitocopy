import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sequence } from '../model/sequence';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { PaginatedResult } from '../model/paginatedResult';
import { forkJoin } from 'rxjs';
import { Ripe } from '../model/ripe';
import { FormComponent } from '../components/sequences/form/form.component';

@Injectable({
  providedIn: 'root'
})
export class SequencesService {

  constructor(private http: HttpClient) { }

   findSequences(pageIndex: number, pageSize: number, rrc: string, datiForm: FormComponent): Observable<PaginatedResult> {
        /*if (datiForm.prefix === '2a0d:8d80::/32'){
          return this.http.get<PaginatedResult>('https://bgpie.net/api/rrc/00/sequence?limit=20&page=1&prefix=2a0d:8d80::%2F32');
        }
        else{*/
        return this.http.get<PaginatedResult>('https://bgpie.net/api/rrc/' + rrc + '/sequence', {
            params: new HttpParams()
                .set('page', pageIndex.toString())
                .set('limit', pageSize.toString())
        });
      }



  getSequence(id: string): Observable<Sequence> {
      return this.http.get<Sequence>('https://bgpie.net/api/sequence/' + id);
    }

  getRipe(prefix: string): Observable<Ripe> {
    return this.http.get<Ripe>('https://stat.ripe.net/data/prefix-overview/data.json?resource=' + prefix);
  }
}
