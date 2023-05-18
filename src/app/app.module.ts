import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateComponent } from './candidate/candidate.component';
import { JobComponent } from './job/job.component';
import { InformationComponent } from './information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatTableModule} from '@angular/material/table';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    CandidateComponent,
    JobComponent,
    InformationComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    DragDropModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
