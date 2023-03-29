import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DodecahedronComponent } from './dices/dodecahedron/dodecahedron.component';
import { DicesComponent } from './dices/dices.component';
import { PentagonalTrapezohedronComponent } from './dices/pentagonal-trapezohedron/pentagonal-trapezohedron.component';
import { HeaderComponent } from './header/header.component';
import { DicePanelComponent } from './dices/dice-panel/dice-panel.component';
import { SimplyGeneratorComponent } from './dices/simply-generator/simply-generator.component';
import { CreatorComponent } from './dices/creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    DodecahedronComponent,
    DicesComponent,
    PentagonalTrapezohedronComponent,
    HeaderComponent,
    DicePanelComponent,
    SimplyGeneratorComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
