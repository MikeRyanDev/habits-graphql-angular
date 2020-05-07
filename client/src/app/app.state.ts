import * as HabitsState from "./habits.reducer";
import { ActionReducerMap, createSelector } from "@ngrx/store";

export interface AppState {
  habits: HabitsState.HabitsShape;
}
export const reducers: ActionReducerMap<AppState> = {
  habits: HabitsState.habitsReducer,
};

/**
 * Global Selectors
 */
export const selectHabitsState = (state: AppState) => state.habits;
export const selectHabits = createSelector(
  selectHabitsState,
  HabitsState.selectHabits
);
