import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailItemComponent } from './components/cocktail-item/cocktail-item.component';
import { CreateCocktailComponent } from './components/create-cocktail/create-cocktail.component';
import { EditComponent } from './components/edit/edit.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'cocktails/create',
    component: CreateCocktailComponent
  },
  {
    path: 'cocktails/:id',
    component: CocktailItemComponent
  },
  {
    path: 'cocktails/edit/:id',
    component: EditComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
