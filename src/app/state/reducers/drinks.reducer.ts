import { createReducer, on } from "@ngrx/store";
import { Drink } from "src/app/models/drink";
import { loadingDrinks, loadDrinks } from "../actions/drink.actions";

export interface DrinkState {
  loading: boolean,
  drinks: Drink[],
}

export const initialState: DrinkState = {
  drinks: [],
  loading: false,
};

export const drinksReducer = createReducer(
  initialState,
  on(loadingDrinks, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadDrinks, (state, { drinks }) => {
    return {
      ...state,
      drinks: drinks,
      loading: false,
    };
  })
);
