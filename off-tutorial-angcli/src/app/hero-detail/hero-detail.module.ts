import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { routing } from './hero-detail.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing
    ],
    declarations: [HeroDetailComponent],
    exports: [HeroDetailComponent]
})
export class HeroDetailModule { }
