


import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of, from} from 'rxjs';
import {Sequence} from '../model/sequence';
import {SequencesService} from './sequences.service';
import {finalize} from 'rxjs/operators';
import {PaginatedResult} from '../model/paginatedResult';
import {tap} from 'rxjs/operators';
import {RipeService} from './ripe.service';
import { Ripe } from '../model/ripe';
import { sequence } from '@angular/animations';
import { FormComponent } from '../components/sequences/form/form.component';
import { map } from 'rxjs/operators';

export class SequencesDataSource implements DataSource<Sequence> {

    private sequencesSubject = new BehaviorSubject<Sequence[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    public length = new BehaviorSubject<number>(0);

    constructor(private sequencesService: SequencesService/*,
                private ripeService: RipeService*/) {

    }

    loadSequences(pageIndex: number,
                  pageSize: number,
                  rrc: string,
                  datiForm: FormComponent) {

        this.loadingSubject.next(true);

        if (datiForm.sequenceId != null && datiForm.sequenceId !== ''){
            this.sequencesService.getSequence(datiForm.sequenceId).pipe(
                finalize(() => this.loadingSubject.next(false)),
            finalize(() => this.length.next(1)),
            map(sequence => [sequence]),
            tap(sequence => this.sequencesSubject.next(sequence))
        )
        .subscribe()
        }
        else{
        this.sequencesService.findSequences(pageIndex, pageSize, rrc, datiForm).pipe(
                finalize(() => this.loadingSubject.next(false)),
                tap(x => this.length.next(x.total))
            )
            .subscribe((sequences: PaginatedResult) => {
            this.sequencesSubject.next(sequences.items);
        });}
    }

    /*loadSequence(datiForm: FormComponent){
        this.loadingSubject.next(true);

        this.sequencesService.getSequence(datiForm.sequenceId).pipe(
            finalize(() => this.loadingSubject.next(false)),
            finalize(() => this.length.next(1)),
            map(sequence => [sequence]),
            tap(sequence => this.sequencesSubject.next(sequence))
        )
        .subscribe()
    }*/

    loadSequencesById(oldSequence: Sequence){
        this.loadingSubject.next(true);

        this.sequencesService.getSequence(oldSequence.id).pipe(
            finalize(() => this.loadingSubject.next(false)),
        )
        .subscribe((newSequence: Sequence) => {
            oldSequence.updates = newSequence.updates;
            oldSequence.announces = newSequence.announces;
            oldSequence.withdraws = newSequence.withdraws;
            oldSequence.asOrigins = newSequence.asOrigins;
            oldSequence.asPathNumber = newSequence.asPathNumber;
            oldSequence.longestCommonAsPathSuffix = newSequence.longestCommonAsPathSuffix;
            oldSequence.hasAggregator = newSequence.hasAggregator;
            oldSequence.mostFrequentUpdateFrequency = newSequence.mostFrequentUpdateFrequency;
            oldSequence.mostFrequentUpdateFrequencyInMin = newSequence.mostFrequentUpdateFrequencyInMin;
            oldSequence.duration = newSequence.duration;
            oldSequence.frequency = newSequence.frequency;
            oldSequence.runID = newSequence.runID;
            oldSequence.containsLoops = newSequence.containsLoops;
            oldSequence.containsAsPathLoops = newSequence.containsAsPathLoops;
    });
        /*this.sequencesService.getRipe(oldSequence.prefix).subscribe((newSequence: Sequence) => {
        oldSequence.ripe.data.announced = newSequence.ripe.data.announced;
    });*/
}

 /*   loadRipe(resour){
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

