import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AppComponent } from './app.component';
import { NgWeightInputComponent } from './ng-weight-input/ng-weight-input.component';
import { NgWeightSelectionComponent } from './ng-weight-selection/ng-weight-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    NgWeightInputComponent,
    NgWeightSelectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
