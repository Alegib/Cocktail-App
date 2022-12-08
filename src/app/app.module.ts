import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { RandomCocktailComponent } from './components/random-cocktail/random-cocktail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ScrollListComponent } from './components/scroll-list/scroll-list.component';
import { ROOT_REDUCERS } from './state/app.state';
import { DrinksEffects } from './state/effects/cocktail.effect';
import { CreateCocktailComponent } from './components/create-cocktail/create-cocktail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CocktailItemComponent } from './components/cocktail-item/cocktail-item.component';
import { DrinkItemEffects } from './state/effects/drink-item.effect';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateDrinkEffects } from './state/effects/create-drink.effect';
import { DeleteDrinkEffects } from './state/effects/delete-drink.effect';
import { EditDrinkEffects } from './state/effects/edit-drink.effect';

import {MatNativeDateModule} from '@angular/material/core';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RandomCocktailComponent,
    NavBarComponent,
    UserPageComponent,
    ScrollListComponent,
    CreateCocktailComponent,
    HomePageComponent,
    CocktailItemComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([DrinksEffects, DrinkItemEffects, CreateDrinkEffects, DeleteDrinkEffects, EditDrinkEffects]),
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatIconModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
