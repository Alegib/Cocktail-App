import { createAction, props } from "@ngrx/store";
import { Drink } from "src/app/models/drink";

export const loadingDrinks = createAction(
  '[Drinks] Loading Drinks',
);

export const loadDrinks = createAction(
  '[Drinks] Load Drinks',
  props<{ drinks: Drink[] }>()
);
 