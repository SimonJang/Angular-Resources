import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { routing } from './heroes.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing
    ],
    declarations: [HeroesComponent],
    exports: [HeroesComponent]
})
export class HeroesModule { }
