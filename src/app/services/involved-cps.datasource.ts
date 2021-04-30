


import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of, from} from 'rxjs';
import { InvolvedCP } from '../model/involvedCP';
import { InvolvedCpsService } from './involved-cps.service';

export class InvolvedCpsDataSource implements DataSource<InvolvedCP> {

    private involvedCpsSubject = new BehaviorSubject<InvolvedCP[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private involvedCpsService: InvolvedCpsService) {

    }

    loadInvolvedCps(): void {

        this.loadingSubject.next(true);

        this.involvedCpsService.getData()
        .subscribe((involvedCps: InvolvedCP[]) => {
            this.involvedCpsSubject.next(involvedCps);
        });
    }

    connect(collectionViewer: CollectionViewer): Observable<InvolvedCP[]> {
        console.log('Connecting data source');
        return this.involvedCpsSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
        this.involvedCpsSubject.complete();
        this.loadingSubject.complete();
    }

}

