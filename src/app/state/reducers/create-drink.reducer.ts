import { createReducer, on } from "@ngrx/store";
import { initCreateDrink, createDrinkSuccess } from "../actions/create-drink.action";

export interface CreateDrinkState {
  created: boolean,
}

export const initialState: CreateDrinkState = {
  created: false,
};

export const createDrinkReducer = createReducer(
  initialState,
  on(initCreateDrink, (state) => {
    return {
      ...state,
      created: false,
    };
  }),
  on(createDrinkSuccess, (state) => {
    return {
      ...state,
      created: true,
    };
  })
);