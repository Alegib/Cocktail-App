import { createAction, props } from "@ngrx/store";
import { Drink } from "src/app/models/drink";

export const initEditDrink = createAction(
  '[Edit Drink] Init Edit Drink',
);

export const editDrink = createAction(
  '[Edit Drink] Edit Drink',
    props<{ id:number, drink: Drink }>()
);

export const editDrinkSuccess = createAction(
  '[Edit Drink] Edit Drink Success',
);

export const editDrinkFailure = createAction(
  '[Edit Drink] Edit Drink Failure',
);