import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeData } from '../model/homeData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


getData(): Observable<HomeData>{
  return this.http.get<HomeData>('https://bgpie.net/api/rrc/00');
}
}