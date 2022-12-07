import { createReducer, on } from "@ngrx/store";
import { initEditDrink, editDrinkSuccess } from "../actions/edit-drink.action";

export interface EditDrinkState {
  edited: boolean,
}

export const initialState: EditDrinkState = {
  edited: false,
};

export const editDrinkReducer = createReducer(
  initialState,
  on(initEditDrink, (state) => {
    return {
      ...state,
      edited: false,
    };
  }),
  on(editDrinkSuccess, (state) => {
    return {
      ...state,
      edited: true,
    };
  })
);