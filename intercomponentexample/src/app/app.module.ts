import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child.component';
import { StockComponent } from './components/stock.component';

import { ChildTemplateComponent } from './components/templatechange';
import { ParentTemplateComponent } from './components/templatechange';

import { ChildComComponent } from './components/communicatingwithchildapi';
import { ParentComComponent } from './components/communicatingwithchildapi';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StockComponent,
    ChildTemplateComponent,
    ParentTemplateComponent,
    ChildComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
