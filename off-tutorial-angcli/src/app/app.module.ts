import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
