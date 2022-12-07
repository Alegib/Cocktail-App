import { createReducer, on } from "@ngrx/store";
import { Drink } from "src/app/models/drink";
import { deleteDrink } from "../actions/delete-drink.action";
import { loadDrink } from "../actions/drink-item.action";


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
