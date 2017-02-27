import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

const routes: Routes = [
    { path: '', component: HeroesComponent },
];

export const routing = RouterModule.forChild(routes);
