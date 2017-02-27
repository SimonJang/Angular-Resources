import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    { path: ':id', component: HeroDetailComponent },
];

export const routing = RouterModule.forChild(routes);
