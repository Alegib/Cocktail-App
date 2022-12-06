import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CocktailService } from "src/app/services/cocktail.service";
import { loadDrink, loadingDrink } from "../actions/drink-item.action";

@Injectable()
export class DrinkItemEffects {
  constructor(
    private actions$: Actions,
    private cocktailService: CocktailService
  ) {}

  loadingDrink$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingDrink),
      mergeMap(action => this.cocktailService.getDrinkById(action.id) // return the data from the API
        .pipe( // success case
          map(drink => loadDrink({ drink }) // dispatch the loadAparment action
          )
        ),
      )
    );
  });
}
