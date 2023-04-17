import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DodecahedronComponent } from './dices/dodecahedron/dodecahedron.component';
import { DicesComponent } from './dices/dices.component';
import { DeltohedronComponent } from './dices/deltohedron/deltohedron.component';
import { HeaderComponent } from './header/header.component';
import { DicePanelComponent } from './dices/dice-panel/dice-panel.component';
import { SimplyGeneratorComponent } from './dices/simply-generator/simply-generator.component';
import { CreatorComponent } from './dices/creator/creator.component';
import { DicesService } from './dices.service';

@NgModule({
  declarations: [
    AppComponent,
    DodecahedronComponent,
    DicesComponent,
    DeltohedronComponent,
    HeaderComponent,
    DicePanelComponent,
    SimplyGeneratorComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
