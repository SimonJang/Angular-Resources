import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
import { ProductItemComponent } from './components/product-item/product-item';
import { SearchComponent } from './components/search/search';
import { StarsComponent } from './components/stars/stars';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';

import { ProductService } from './services/product-service';

import { FilterPipe } from './shared/filter-pipe';

import { routes } from './routes/app.routes';

@NgModule({
    imports:      [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ AppComponent,
                    HomeComponent,
                    CarouselComponent,
                    FooterComponent,
                    NavbarComponent,
                    ProductItemComponent,
                    ProductDetailComponent,
                    SearchComponent,
                    StarsComponent,
                    FilterPipe
                    ],
    providers:    [ ProductService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
