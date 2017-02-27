import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroService } from './services/hero.service';

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, FormsModule],
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                HeroService
            ]
        };
    }
}
