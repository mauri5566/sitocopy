import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvolvedCP } from '../model/involvedCP';

@Injectable({
  providedIn: 'root'
})
export class InvolvedCpsService {

  constructor(private http: HttpClient) {}

  getData(): Observable<InvolvedCP[]>{
    return this.http.get<InvolvedCP[]>('https://bgpie.net/api/rrc/00/allcps');
  }
}
