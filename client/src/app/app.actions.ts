import { createAction } from "@ngrx/store";

export const enterHomePageAction = createAction("[App] Enter Home Page Action");
export const getHabitsSuccessAction = createAction(
  "[App] Get Habits Success",
  (habits: any[]) => ({ habits })
);
