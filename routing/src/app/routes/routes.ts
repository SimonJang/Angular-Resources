import { Routes } from '@angular/router';

import { ProductDetailComponent } from '../components/product-detail/product-detail';
import { HomeComponent } from '../components/home/home-component';
import { DescriptionComponent } from '../components/product-detail/description/description.component';
import { ProductSeller } from '../components/product-detail/seller/seller.component';
import { ChatComponent } from '../components/chat/chat.component';

import { LoginGuard } from './login.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'chat', component: ChatComponent, outlet: 'aux'},
    {path: 'home', component: HomeComponent},
    {path: 'luxury', loadChildren: '../components/luxury/luxury.module#LuxuryModule'},
    {path: 'product/:id', component: ProductDetailComponent, canActivate: [LoginGuard] ,
        children: [
            {path: '', component: DescriptionComponent},
            {path: 'description', component: DescriptionComponent},
            {path: 'seller', component: ProductSeller}
        ]}
]