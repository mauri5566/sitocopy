


import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of, from} from 'rxjs';
import {Sequence} from '../model/sequence';
import {SequencesService} from './sequences.service';
import {finalize} from 'rxjs/operators';
import {PaginatedResult} from '../model/paginatedResult';
import {tap} from 'rxjs/operators';
import {RipeService} from './ripe.service';
import { Ripe } from '../model/ripe';

export class SequencesDataSource implements DataSource<Sequence> {

    private sequencesSubject = new BehaviorSubject<Sequence[]>([]);

    private ripeSubject = new BehaviorSubject<Ripe[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    public length = new BehaviorSubject<number>(0);

    constructor(private sequencesService: SequencesService/*,
                private ripeService: RipeService*/) {

    }

    loadSequences(pageIndex: number,
                  pageSize: number,
                  rrc: string) {

        this.loadingSubject.next(true);

        this.sequencesService.findSequences(pageIndex, pageSize, rrc).pipe(
                /*catchError(() => of([]))*/
                finalize(() => this.loadingSubject.next(false)),
                tap(x => this.length.next(x.total))
            )
            .subscribe((sequences: PaginatedResult) => this.sequencesSubject.next(sequences.items));
    }

   loadSequencesById(id: string){
        this.loadingSubject.next(true);

        this.sequencesService.getSequence(id).pipe(
            finalize(() => this.loadingSubject.next(false)),
        )
        .subscribe((sequences: PaginatedResult) => this.sequencesSubject.next(sequences.items));
    }

 /*   loadRipe(resource: string){
        this.loadingSubject.next(true);

        this.ripeService.getRipe(resource).pipe(
            finalize(() => this.loadingSubject.next(false)),
        )
        .subscribe((sequence: PaginatedResult) => this.ripeSubject.next(sequence.ripe));
    }*/

    connect(collectionViewer: CollectionViewer): Observable<Sequence[]> {
        console.log('Connecting data source');
        return this.sequencesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.sequencesSubject.complete();
        this.loadingSubject.complete();
    }

}

