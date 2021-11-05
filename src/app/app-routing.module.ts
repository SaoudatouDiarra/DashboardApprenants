import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListesComponent } from './listes/listes.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ModifSupprComponent } from './modif-suppr/modif-suppr.component';
const routes: Routes = [
  {
    path: "listes", component : ListesComponent,
  },
  {
    path: "ajouter", component : AjouterComponent,
  },
  {
    path: "modif-suppr", component : ModifSupprComponent,

  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
