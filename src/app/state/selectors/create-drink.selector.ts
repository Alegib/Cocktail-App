import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateDrinkState } from '../reducers/create-drink.reducer';
 

export const selectCreateDrinkState = (state: AppState) => state.createDrinkState;

export const selectCreateDrinkSuccess = createSelector(
  selectCreateDrinkState,
  (state: CreateDrinkState) => {
    return state.created;
  }
);