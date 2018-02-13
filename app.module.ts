import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GrawtysiacaComponent } from './grawtysiaca/grawtysiaca.component';


@NgModule({
  declarations: [
    AppComponent,
    GrawtysiacaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
