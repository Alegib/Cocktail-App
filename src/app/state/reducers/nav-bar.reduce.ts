import { createReducer, on } from "@ngrx/store";
import { switchDarkMode } from "../actions/nav-bar.action";


export const initialState: boolean = false;

export const navBarReducer = createReducer(
  initialState,
  on(switchDarkMode, (state) => {
    return !state;
  }),
);
