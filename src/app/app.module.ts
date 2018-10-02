import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'flatpickr/dist/flatpickr.css';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import {MatButtonToggleModule,
   MatButtonModule,MatDividerModule,
    MatExpansionModule,MatTabsModule,
  MatDialogModule, MatFormFieldModule,MatSelectModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule,
  MatCheckboxModule, MatCardModule, MatMenuModule, MatIconModule
} from '@angular/material'


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DialogboxComponent } from './dialogbox/dialogbox.component';
import {DialogformService} from './dialogform.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalViewerComponent } from './cal-viewer/cal-viewer.component';
import { BuySellDialogComponent } from './buy-sell-dialog/buy-sell-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    DialogboxComponent,
    DashboardComponent,
    CalViewerComponent,
    BuySellDialogComponent
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
    MatIconModule

  ],
  entryComponents: [
    DialogboxComponent,
    BuySellDialogComponent
],

  providers: [DialogformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
