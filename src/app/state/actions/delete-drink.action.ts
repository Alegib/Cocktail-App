import { createAction, props } from "@ngrx/store";

export const deleteDrink = createAction(
    '[Delete Drink] Delete Drink',
    props<{ id: number }>()
);
export const deleteDrinkSuccess = createAction(
    '[Delete Drink] Delete Drink Success',
);



  
//   export const createDrinkFailure = createAction(
//     '[Create Drink] Create Drink Failure',
//   );