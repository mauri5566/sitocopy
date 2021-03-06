import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SequencesService {

  constructor(private http: HttpClient) { }

  public getData(){
    return this.http.get("https://bgpie.net/api/rrc/00/sequence?limit=20&page=1");
  }
}
