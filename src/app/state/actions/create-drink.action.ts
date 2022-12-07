import { createAction, props } from "@ngrx/store";
import { Drink } from "src/app/models/drink";

export const initCreateDrink = createAction(
  '[Create Drink] Init Create Drink',
);

export const createDrink = createAction(
  '[Create Drink] Create Drink',
    props<{ drink: Drink }>()
);

export const createDrinkSuccess = createAction(
  '[Create Drink] Create Drink Success',
);

export const createDrinkFailure = createAction(
  '[Create Drink] Create Drink Failure',
);