import { createReducer, on } from "@ngrx/store";
import { Drink } from "src/app/models/drink";
import { loadDrink } from "../actions/drink-item.action";


export interface DrinkItemState {
  drink: Drink,
}

export const initialState: DrinkItemState = {
  drink: {} as Drink,
};

export const drinkItemReducer = createReducer(
  initialState,
  on(loadDrink, (state, { drink }) => {
    return {
      ...state,
      drink: drink,
    };
  })
);
