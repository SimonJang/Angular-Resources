import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LuxuryComponent } from './luxury.component';

import { routes } from './routes/luxury.routes';

@NgModule({
  declarations: [
    LuxuryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class LuxuryModule { }
