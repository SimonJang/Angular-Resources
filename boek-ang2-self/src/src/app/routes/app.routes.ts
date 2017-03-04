import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent}, // Wordt default in router-outlet component geladen
                                          // van app.components
    {path: 'products/:productId', component: ProductDetailComponent},
]
