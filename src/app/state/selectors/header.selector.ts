import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
 

export const selectDrinkState = (state: AppState) => state.navBarState;

export const selectDarkMode = createSelector(
  selectDrinkState,
  (state: boolean) => {
    return state;
  }
);
