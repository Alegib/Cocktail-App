import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CocktailService } from "src/app/services/cocktail.service";

import { createDrink, createDrinkSuccess } from "../actions/create-drink.action";

@Injectable()
export class CreateDrinkEffects {
  constructor(
    private actions$: Actions,
    private cocktailService: CocktailService
  ) {}

  createDrink$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createDrink),
      mergeMap(action => this.cocktailService.createDrink(action.drink)
        .pipe(
          map(result => createDrinkSuccess() 
          )
        ),
      )
    );
   
  });
}
