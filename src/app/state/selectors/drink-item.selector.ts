import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DrinkItemState } from '../reducers/drink-item.reducer';

 

export const selectDrinkItemState = (state: AppState) => state.drinkItemState;

export const selectDrink = createSelector(
  selectDrinkItemState,
  (state: DrinkItemState) => {
    return state.drink;
  }
);