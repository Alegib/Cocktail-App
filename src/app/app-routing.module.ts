import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailItemComponent } from './components/cocktail-item/cocktail-item.component';
import { CreateCocktailComponent } from './components/create-cocktail/create-cocktail.component';
import { EditComponent } from './components/edit/edit.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';

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
    path: 'cocktails/favourites',
    component: UserPageComponent
  },
  {
    path: 'cocktails/edit/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
