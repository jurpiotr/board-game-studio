import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplyGeneratorComponent } from './dices/simply-generator/simply-generator.component';
import { CreatorComponent } from './dices/creator/creator.component';

const routes: Routes = [
  { path: 'simply-generator', component: SimplyGeneratorComponent },
  { path: 'creator', component: CreatorComponent },
  { path: '', redirectTo: 'simply-generator', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
