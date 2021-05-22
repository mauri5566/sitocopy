import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CDFData } from '../model/cdfData';
import { Observable } from 'rxjs';
import { CPData } from '../model/cpData';
import { SequenceChartData } from '../model/sequenceChartData';
import { ABBAData } from '../model/ABBAData';
import { sequence } from '@angular/animations';
import { numberFormat } from 'highcharts';
import { CPDataUpdates } from '../model/cpdataupdates';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getMostFrequentUpdateData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/mostfrequentstatefrequencycdf');
  }

  getNumberOfSequencesData(): Observable<CPData[]>{
    return this.http.get<CPData[]>('https://bgpie.net/api/rrc/00/sequencecountpercp');
  }

  getNumberOfUpdatesData(): Observable<CPDataUpdates[]>{
    return this.http.get<CPDataUpdates[]>('https://bgpie.net/api/rrc/00/sequenceupdatestpercp');
  }

  getAsPathData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/aspathnumbercdf');
  }

  getDurationData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/durationcdf');
  }

  getFrequencyData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/frequencycdf');
  }

  getLongestSuffixData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/longestcommonassuffixcdf');
  }

  getPercentageData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/unstablepercentagecdf');
  }

  getPrefixDistributionData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/prefixdistributioncdf');
  }

  getUpdatesPerSequenceData(): Observable<CDFData[]>{
    return this.http.get<CDFData[]>('https://bgpie.net/api/rrc/00/updatesnumbercdf');
  }


  getSequenceChartData(peerAS: number, peerIPAddress: string, prefix: string): Observable<SequenceChartData[]>{
    let params = new HttpParams();
    params = params.append('peerAS', peerAS.toString());
    params = params.append('peerIPAddress', peerIPAddress.toString());
    params = params.append('prefix', prefix.toString());
    return this.http.get<SequenceChartData[]>('https://bgpie.net/api/bgphistory/', {params});
  }

  getABBAChartData(sequenceId: string): Observable<ABBAData[]>{
    return this.http.get<ABBAData[]>('https://bgpie.net/api/aspathloop/sequence/' + sequenceId);
  }

  getSegmentChartData(peerAS: number, peerIPAddress: string): Observable<Array<Array<[number, number]>>> {
    let params = new HttpParams();
    params = params.append('peerAS', peerAS.toString());
    params = params.append('peerIPAddress', peerIPAddress.toString());
    return this.http.get<Array<Array<[number, number]>>>('https://bgpie.net/api/rrc/00/draw?', {params});
  }

}
