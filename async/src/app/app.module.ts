import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WeatherComponent } from './components/weather.component';
import { BirthdayComponent } from './components/birthday.component';
import { AppComponent } from './app.component';

import { customUppercasePipe } from './pipes/custom.uppercase.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BirthdayComponent,
    customUppercasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
