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
      if (datiForm.prefix != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('prefix', datiForm.prefix);
      }
      if (datiForm.collectorIp != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('collectorPeerIp', datiForm.collectorIp);
      }
      if (datiForm.collectorAsn != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('collectorPeerASn', datiForm.collectorAsn);
      }
      if (datiForm.asOrigin != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('asOrigin', datiForm.asOrigin.toString());
      }
      if (datiForm.suffix != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('minSuffixCommon', datiForm.suffix.toString());
      }
      if (datiForm.durationGreater != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('minDurationDays', datiForm.durationGreater.toString());
      }
      if (datiForm.durationSmaller != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('maxDurationDays', datiForm.durationSmaller.toString());
      }
      if (datiForm.updates != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('minNumUpdates', datiForm.updates.toString());
      }
      if (datiForm.withdraws != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('minNumWithdraws', datiForm.withdraws.toString());
      }
      if (datiForm.announces != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('minNumAnnounces', datiForm.announces.toString());
      }
      if (datiForm.startDate != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('minStartDate', datiForm.startDate.toISOString());
      }
      if (datiForm.endDate != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('minStartDate', datiForm.endDate.toISOString());
      }
      if (datiForm.hasAggregator != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('hasAggregator', datiForm.hasAggregator.toString());
      }
      if (datiForm.containsASPaths != null && (datiForm.sequenceId == null || datiForm.sequenceId === '')){
        params = params.append('containsLoops', datiForm.containsASPaths.toString());
      }
      if (datiForm.sequenceId != null && datiForm.sequenceId !== ''){
        return this.http.get<PaginatedResult>('https://bgpie.net/api/sequence/' + datiForm.sequenceId);
      }
      return this.http.get<PaginatedResult>('https://bgpie.net/api/rrc/' + rrc + '/sequence', { params});
    }
<<<<<<< HEAD

    /*findSequence(pageIndex: number, pageSize: number, rrc: string, datiForm: FormComponent): Observable<Sequence>{
      let params = new HttpParams();
      params = params.append('page', pageIndex.toString());
      params = params.append('limit', pageSize.toString());*/
      

  getSequence(id: string): Observable<Sequence> {
      return this.http.get<Sequence>('https://bgpie.net/api/sequence/' + id);
    }
=======
    getSequenceFilter(id: string): Observable<Sequence[]> {
        return this.http.get<Sequence[]>('https://bgpie.net/api/sequence/' + id);
    }

    getSequence(id: string): Observable<Sequence> {
        return this.http.get<Sequence>('https://bgpie.net/api/sequence/' + id);
    }
>>>>>>> f5ad799b708b6c24ebe56523f385a266edb970d6
}
