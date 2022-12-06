import { ActionReducerMap } from "@ngrx/store";
import { drinkItemReducer, DrinkItemState } from "./reducers/drink-item.reducer";
import { drinksReducer, DrinkState } from "./reducers/drinks.reducer";


export interface AppState {
    drinkStates: DrinkState;
    drinkItemState: DrinkItemState,
    
  }

  export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    drinkStates: drinksReducer,
    drinkItemState: drinkItemReducer,
    
  };