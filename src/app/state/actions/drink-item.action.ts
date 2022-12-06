import { createAction, props } from "@ngrx/store";
import { Drink } from "src/app/models/drink";

export const loadingDrink = createAction(
    '[Drink Details] Loading Drink',
    props<{ id: number}>()
  );
export const loadDrink = createAction(
  '[Drink Details] Load Drink',
  props<{ drink: Drink }>()
);
 