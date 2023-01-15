import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodecahedronComponent } from './dodecahedron/dodecahedron.component';
import { MainComponent } from './main/main.component';
import { PentagonalTrapezohedronComponent } from './pentagonal-trapezohedron/pentagonal-trapezohedron.component';

@NgModule({
  declarations: [
    AppComponent,
    DodecahedronComponent,
    MainComponent,
    PentagonalTrapezohedronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
