import { Injectable } from '@angular/core';
import { ChartData } from '../model/chartData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ChartData[]>{
    return this.http.get<ChartData[]>('https://bgpie.net/api/rrc/00/mostfrequentstatefrequencycdf');
  }
}
