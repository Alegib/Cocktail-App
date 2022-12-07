import { ActionReducerMap } from "@ngrx/store";
import { createDrinkReducer, CreateDrinkState } from "./reducers/create-drink.reducer";
import { deleteDrinkReducer, DeleteDrinkState } from "./reducers/delete-drink.reducer";
import { drinkItemReducer, DrinkItemState } from "./reducers/drink-item.reducer";
import { drinksReducer, DrinkState } from "./reducers/drinks.reducer";
import { editDrinkReducer, EditDrinkState } from "./reducers/edit-drink.reducer";


export interface AppState {
    drinkStates: DrinkState
    drinkItemState: DrinkItemState
    createDrinkState: CreateDrinkState
    deleteDrinkState: DeleteDrinkState
    editDrinkState: EditDrinkState
  }

  export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    drinkStates: drinksReducer,
    drinkItemState: drinkItemReducer,
    createDrinkState: createDrinkReducer,
    deleteDrinkState: deleteDrinkReducer,
    editDrinkState: editDrinkReducer
    
  };