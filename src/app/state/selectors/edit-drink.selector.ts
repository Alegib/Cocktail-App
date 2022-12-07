import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { EditDrinkState } from '../reducers/edit-drink.reducer';

 

export const selectEditDrinkState = (state: AppState) => state.editDrinkState;

export const selectEditDrinkSuccess = createSelector(
  selectEditDrinkState,
  (state: EditDrinkState) => {
    return state.edited;
  }
);