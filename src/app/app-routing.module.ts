import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailItemComponent } from './components/cocktail-item/cocktail-item.component';
import { CreateCocktailComponent } from './components/create-cocktail/create-cocktail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'cocktail/create',
    component: CreateCocktailComponent
  },
  {
    path: 'cocktail/:id',
    component: CocktailItemComponent
  },
  {
    path: 'cocktail/favourites',
    component: UserPageComponent
  },
  // {
  //   path: 'cocktail/favourites',
  //   component: UserPageComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
