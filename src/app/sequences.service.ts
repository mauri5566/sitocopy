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
