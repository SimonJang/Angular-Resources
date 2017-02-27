import { SharedModule } from '../shared/shared.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.routing';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        routing
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule { }
