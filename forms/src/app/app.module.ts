import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './templateforms';

import { FormArrayComponentExample } from './reactiveforms/formarrayexample/fa-example.component';

import { RefactoredReactiveComponent } from './reactiveforms/refactoredtemplate/refactored-template.component';

import { SsnValidatorDirective } from './shared/custom-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    FormArrayComponentExample,
    RefactoredReactiveComponent,
    SsnValidatorDirective
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
