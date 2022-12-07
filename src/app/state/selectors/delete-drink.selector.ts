import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DeleteDrinkState } from '../reducers/delete-drink.reducer';
 

export const selectDeleteDrinkState = (state: AppState) => state.deleteDrinkState;

export const selectDeleteDrinkSuccess = createSelector(
  selectDeleteDrinkState,
  (state: DeleteDrinkState) => {
    return state.deleted;
  }
);