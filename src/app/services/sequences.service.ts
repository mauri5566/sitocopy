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

   findSequences(pageIndex: number, pageSize: number, rrc: string, datiForm: FormComponent): Observable<PaginatedResult>{
      let params = new HttpParams();
      params = params.append('page', pageIndex.toString());
      params = params.append('limit', pageSize.toString());
      if (datiForm.prefix != null){
        params = params.append('prefix', datiForm.prefix);
      }
      if (datiForm.collectorIp != null){
        params = params.append('collectorPeerIp', datiForm.collectorIp);
      }
      if (datiForm.collectorAsn != null){
        params = params.append('collectorPeerASn', datiForm.collectorAsn);
      }
      if (datiForm.asOrigin != null){
        params = params.append('asOrigin', datiForm.asOrigin.toString());
      }
      if (datiForm.suffix != null){
        params = params.append('minSuffixCommon', datiForm.suffix.toString());
      }
      if (datiForm.durationGreater != null){
        params = params.append('minDurationDays', datiForm.durationGreater.toString());
      }
      if (datiForm.durationSmaller != null){
        params = params.append('maxDurationDays', datiForm.durationSmaller.toString());
      }
      if (datiForm.updates != null){
        params = params.append('minNumUpdates', datiForm.updates.toString());
      }
      if (datiForm.withdraws != null){
        params = params.append('minNumWithdraws', datiForm.withdraws.toString());
      }
      if (datiForm.announces != null){
        params = params.append('minNumAnnounces', datiForm.announces.toString());
      }
      if (datiForm.startDate != null){
        params = params.append('minStartDate', datiForm.startDate.toString());
      }
      if (datiForm.endDate != null){
        params = params.append('minStartDate', datiForm.endDate.toString());
      }
      if (datiForm.hasAggregator != null){
        params = params.append('hasAggregator', datiForm.hasAggregator.toString());
      }
      if (datiForm.containsASPaths != null){
        params = params.append('containsLoops', datiForm.containsASPaths.toString());
      }
      if (datiForm.sequenceId != null && datiForm.sequenceId !== ''){
        return this.http.get<PaginatedResult>('https://bgpie.net/api/sequence/' + datiForm.sequenceId);
      }
      return this.http.get<PaginatedResult>('https://bgpie.net/api/rrc/' + rrc + '/sequence', { params});
    }



  getSequence(id: string): Observable<Sequence> {
      return this.http.get<Sequence>('https://bgpie.net/api/sequence/' + id);
    }

  getRipe(prefix: string): Observable<Ripe> {
    return this.http.get<Ripe>('https://stat.ripe.net/data/prefix-overview/data.json?resource=' + prefix);
  }
}
