import { createSelector } from "@ngrx/store";
import { DrinkState } from "../reducers/drinks.reducer";
import { AppState } from '../app.state';


export const selectDrinkState = (state: AppState) => state.drinkStates;

export const selectDrinks = createSelector(
  selectDrinkState,
  (state: DrinkState) => {
    return state.drinks;
  }
);

export const selectLoading = createSelector(
  selectDrinkState,
  (state: DrinkState) => {
    return state.loading;
  }
);