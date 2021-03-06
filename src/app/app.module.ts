import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'flatpickr/dist/flatpickr.css';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AgmCoreModule } from '@agm/core';

import {MatButtonToggleModule,
   MatButtonModule,MatDividerModule,
    MatExpansionModule,MatTabsModule,
  MatDialogModule, MatFormFieldModule,MatSelectModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
  MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule,
   MatTableModule, MatSortModule, MatPaginatorModule,
} from '@angular/material'


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {DialogformService} from './dialogform.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuySellDialogComponent } from './buy-sell-dialog/buy-sell-dialog.component';
import { ProjectsComponent } from './projects/projects.component'

import { NgSelectModule } from '@ng-select/ng-select';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ProjectdboxComponent } from './projectdbox/projectdbox.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    DialogboxComponent,
    DashboardComponent,
    BuySellDialogComponent,
    ProjectsComponent,
    ProjectdboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    OwlDateTimeModule,
    MatPaginatorModule,
    NgSelectModule,

    AgmCoreModule.forRoot({
  apiKey: 'AIzaSyAWFiH_HPWDYF7d1Fqm6zGSHwmb35vcY_g'
}),


    //AngularMaterials
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,


  ],
  entryComponents: [
    DialogboxComponent,
    BuySellDialogComponent,
    ProjectdboxComponent
],

  providers: [DialogformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
