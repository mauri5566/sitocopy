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


@NgModule({
  declarations: [
    AppComponent,
    SequencesComponent,
    ModalChartComponent,
    ModalAsTreeComponent,
    HomeComponent,
    FormComponent,
  ],
  entryComponents: [
    ModalChartComponent,
    ModalAsTreeComponent,
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'sequences', component: SequencesComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

