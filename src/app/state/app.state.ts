import { ActionReducerMap } from "@ngrx/store";
import { drinksReducer, DrinkState } from "./reducers/drinks.reducer";


export interface AppState {
    drinkStates: DrinkState;
    
  }

  export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    drinkStates: drinksReducer,
    
  };