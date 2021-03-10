import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sequences } from './sequences/sequences.component';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SequencesService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  public getData(){
    return this.http.get<Sequences>('https://bgpie.net/api/sequence/5ee56984a62b68061ce5b638');
  }

  /*getSequence(id: number) : Observable<ISequence[]> {
      return this.http.get<ISequence[]>("https://bgpie.net/api/sequence/[id]")
        .pipe(
          map(orders => {
            let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }*/
}
