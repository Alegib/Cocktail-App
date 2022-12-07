import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CocktailService } from "src/app/services/cocktail.service";

import { editDrink, editDrinkSuccess } from "../actions/edit-drink.action";

@Injectable()
export class EditDrinkEffects {
  constructor(
    private actions$: Actions,
    private cocktailService: CocktailService
  ) {}

  editDrink$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editDrink),
      mergeMap(action => this.cocktailService.editDrink(action.id, action.drink)
        .pipe(
          map(result => editDrinkSuccess() 
          )
        ),
      )
    );
   
  });
}
