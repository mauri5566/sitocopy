import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SequencesComponent } from './components/sequences/sequences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalChartComponent } from './components/sequences/modal-chart/modal-chart.component';
import { ModalAsTreeComponent } from './components/sequences/modal-as-tree/modal-as-tree.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import {MatListModule} from '@angular/material/list';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormComponent } from './components/sequences/form/form.component';
import { ModalDurationCdfComponent } from './components/home/modal-duration-cdf/modal-duration-cdf.component';
import { ModalAsPathNumberCdfComponent } from './components/home/modal-as-path-number-cdf/modal-as-path-number-cdf.component';
import { ModalPrefixDistributionCdfComponent } from './components/home/modal-prefix-distribution-cdf/modal-prefix-distribution-cdf.component';
import { ModalUpdatesPerSequenceCdfComponent } from './components/home/modal-updates-per-sequence-cdf/modal-updates-per-sequence-cdf.component';
import { ModalNumberUpdatesCpComponent } from './components/home/modal-number-updates-cp/modal-number-updates-cp.component';
import { ModalNumberSequencesCpComponent } from './components/home/modal-number-sequences-cp/modal-number-sequences-cp.component';
import { ModalMostFrequentUpdateComponent } from './components/home/modal-most-frequent-update/modal-most-frequent-update.component';
import { ModalLongestSuffixComponent } from './components/home/modal-longest-suffix/modal-longest-suffix.component';
import { ModalFrequencyUpdateComponent } from './components/home/modal-frequency-update/modal-frequency-update.component';
import { ModalPercentageUnstablePrefixesComponent } from './components/home/modal-percentage-unstable-prefixes/modal-percentage-unstable-prefixes.component';
import { HighchartsChartModule } from "highcharts-angular";
import {OverlayModule} from '@angular/cdk/overlay';
import { InvolvedCpsComponent } from './components/involved-cps/involved-cps.component';
import { ModalSegmentChartComponent } from './components/involved-cps/modal-segment-chart/modal-segment-chart.component';
import { ModalAbBaChartComponent } from './components/sequences/modal-ab-ba-chart/modal-ab-ba-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SequencesComponent,
    ModalChartComponent,
    ModalAsTreeComponent,
    ModalDurationCdfComponent,
    HomeComponent,
    FormComponent,
    ModalDurationCdfComponent,
    ModalAsPathNumberCdfComponent,
    ModalPrefixDistributionCdfComponent,
    ModalUpdatesPerSequenceCdfComponent,
    ModalNumberUpdatesCpComponent,
    ModalNumberSequencesCpComponent,
    ModalMostFrequentUpdateComponent,
    ModalLongestSuffixComponent,
    ModalFrequencyUpdateComponent,
    ModalPercentageUnstablePrefixesComponent,
    InvolvedCpsComponent,
    ModalSegmentChartComponent,
    ModalAbBaChartComponent,
  ],
  entryComponents: [
    ModalChartComponent,
    ModalAsTreeComponent,
    ModalDurationCdfComponent,
    ModalAsPathNumberCdfComponent,
    ModalPrefixDistributionCdfComponent,
    ModalUpdatesPerSequenceCdfComponent,
    ModalNumberUpdatesCpComponent,
    ModalNumberSequencesCpComponent,
    ModalMostFrequentUpdateComponent,
    ModalLongestSuffixComponent,
    ModalFrequencyUpdateComponent,
    ModalPercentageUnstablePrefixesComponent,
    ModalSegmentChartComponent,
    ModalAbBaChartComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatListModule,
    ListViewModule,
    HighchartsChartModule,
    OverlayModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'sequences', component: SequencesComponent},
      { path: 'involvedCps', component: InvolvedCpsComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

