import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.components'
import { ProductComponentAlt } from './components/product.component.alt';
import { ProductComponentAlt2 } from './components/product.component.alt2'

import { ProductService } from './services/product.service'
import { MockProductService } from './services/mock.product.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductComponentAlt,
    ProductComponentAlt2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService, MockProductService, {provide: 'IS_DEV_ENV', useValue: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
