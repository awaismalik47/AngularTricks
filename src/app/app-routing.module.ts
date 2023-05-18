import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';

import { JobComponent } from './job/job.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {
    path:'candidate',
    component:CandidateComponent
  },
  {
    path:'job',
    component:JobComponent
  },
  {
    path:'slider',
    component:SliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
