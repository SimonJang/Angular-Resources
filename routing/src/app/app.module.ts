import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './routes/routes';
import { LoginGuard } from './routes/login.guard';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { DescriptionComponent } from './components/product-detail/description/description.component';
import { ProductSeller } from './components/product-detail/seller/seller.component';
import { HomeComponent } from './components/home/home-component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    HomeComponent,
    DescriptionComponent,
    ProductSeller,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
