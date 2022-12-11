import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {  map, mergeMap } from "rxjs";
import { CocktailService } from "src/app/services/cocktail.service";
import { loadDrinks, loadingDrinks } from "../actions/drink.actions";


@Injectable()
export class DrinksEffects {
  constructor(
    private actions$: Actions,
    private cocktailService: CocktailService
  ) {}

  loadingDrinks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingDrinks),
      mergeMap(() => this.cocktailService.getAllDrinks() 
        .pipe( 
          map(drinks => loadDrinks({ drinks }) 
          )
        ),
      )
    );
  });
}
