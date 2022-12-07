import { createReducer, on } from "@ngrx/store";
import { deleteDrink } from "../actions/delete-drink.action";



export interface DeleteDrinkState {
  deleted: boolean,
}

export const initialState: DeleteDrinkState = {
  deleted: false,
};

export const deleteDrinkReducer = createReducer(
  initialState,
  on(deleteDrink, (state) => {
    return {
      ...state,
      deleted: true,
    };
  })
);
