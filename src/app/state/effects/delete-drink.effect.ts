import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CocktailService } from "src/app/services/cocktail.service";

import { deleteDrink, deleteDrinkSuccess } from "../actions/delete-drink.action";

@Injectable()
export class CreateApartmentEffects {
  constructor(
    private actions$: Actions,
    private cocktailService: CocktailService
  ) {}

  deleteDrink$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteDrink),
      mergeMap(action => this.cocktailService.deleteDrinkById(action.id)
        .pipe(
          map(result => deleteDrinkSuccess() 
          )
        ),
      )
    );
   
  });
}