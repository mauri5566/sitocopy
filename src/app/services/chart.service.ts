import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartData } from '../model/chartData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getMostFrequentUpdateData(): Observable<ChartData[]>{
    return this.http.get<ChartData[]>('https://bgpie.net/api/rrc/00/mostfrequentstatefrequencycdf');
  }
}
