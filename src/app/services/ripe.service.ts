import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Ripe} from '../model/ripe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RipeService {

   constructor(private http: HttpClient) { }


   getRipe(resource: string): Observable<Ripe> {
      return this.http.get<Ripe>('https://stat.ripe.net/data/prefix-overview/data.json?resource=' + resource);
    }
}
