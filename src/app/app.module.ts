import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodecahedronComponent } from './dodecahedron/dodecahedron.component';
import { MainComponent } from './main/main.component';
import { PentagonalTrapezohedronComponent } from './pentagonal-trapezohedron/pentagonal-trapezohedron.component';
import { HeaderComponent } from './header/header.component';
import { DicePanelComponent } from './dice-panel/dice-panel.component';
import { SimplyGeneratorComponent } from './main/simply-generator/simply-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    DodecahedronComponent,
    MainComponent,
    PentagonalTrapezohedronComponent,
    HeaderComponent,
    DicePanelComponent,
    SimplyGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
