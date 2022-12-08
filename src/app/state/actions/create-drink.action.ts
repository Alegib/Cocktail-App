import { createAction, props } from "@ngrx/store";
import { Cocktail } from "src/app/models/cocktail";


export const initCreateDrink = createAction(
  '[Create Drink] Init Create Drink',
);

export const createDrink = createAction(
  '[Create Drink] Create Drink',
    props<{ drink: Cocktail }>()
);

export const createDrinkSuccess = createAction(
  '[Create Drink] Create Drink Success',
);

export const createDrinkFailure = createAction(
  '[Create Drink] Create Drink Failure',
);