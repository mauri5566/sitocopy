import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeData } from '../model/homeData';
import { Observable } from 'rxjs';
import { HomeData2 } from '../model/homedata2';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


getData(): Observable<HomeData>{
  return this.http.get<HomeData>('https://bgpie.net/api/rrc/00');
}

getData2(): Observable<HomeData2>{
  return this.http.get<HomeData2>('https://bgpie.net/api/bgptotal/00');
}
}