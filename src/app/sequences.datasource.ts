


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of, from} from "rxjs";
import {Sequences} from './model/sequences';
import {SequencesService} from "./sequences.service";
import {catchError, finalize} from "rxjs/operators";
import {PaginatedResult} from './model/paginatedResult';
import {tap} from 'rxjs/operators';


export class SequencesDataSource implements DataSource<Sequences> {

    private sequencesSubject = new BehaviorSubject<Sequences[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    public length = new BehaviorSubject<number>(0);

    constructor(private sequencesService: SequencesService) {

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
            .subscribe((sequences : PaginatedResult) => this.sequencesSubject.next(sequences.items));

    }

    connect(collectionViewer: CollectionViewer): Observable<Sequences[]> {
        console.log("Connecting data source");
        return this.sequencesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.sequencesSubject.complete();
        this.loadingSubject.complete();
    }

}

