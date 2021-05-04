import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CDFData } from '../model/cdfData';
import { Observable } from 'rxjs';
import { CPData } from '../model/cpData';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getMostFrequentUpdateData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/mostfrequentstatefrequencycdf');
  }

  getNumberOfSequencesData(): Observable<CPData[]>{
    return this.http.get<CPData[]>('https://bgpie.net/api/rrc/00/sequencecountpercp');
  }
}
