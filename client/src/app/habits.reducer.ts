import { createReducer, on } from "@ngrx/store";
import * as AppActions from "./app.actions";

export interface HabitsShape {
  habits: any[];
}

export const selectHabits = (state: HabitsShape) => state.habits;

const habitsInitialState: HabitsShape = {
  habits: [],
};
export const habitsReducer = createReducer(
  habitsInitialState,
  on(
    AppActions.getHabitsSuccessAction,
    (state, action): HabitsShape => {
      return {
        ...state,
        habits: action.habits,
      };
    }
  )
);
