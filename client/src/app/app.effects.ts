import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { GraphQLService, gql } from "./graphql.service";
import * as AppActions from "./app.actions";
import { interval } from "rxjs";

const getHabitsQuery = gql`
  query getHabits {
    habits {
      id
      description
      points
      entries {
        id
        date
        notes
        completed
      }
    }
  }
`;

@Injectable()
export class AppEffects {
  constructor(readonly graphql: GraphQLService, readonly actions$: Actions) {}

  getHabits$ = createEffect(() => {
    // Listen for the "enter home page action"
    // then issue my graphql request
    return this.actions$.pipe(
      ofType(AppActions.enterHomePageAction),
      exhaustMap(() => {
        return this.graphql
          .fetch(getHabitsQuery)
          .pipe(
            map((response: any) =>
              AppActions.getHabitsSuccessAction(response.data.habits)
            )
          );
      })
    );
  });

  pollForHabits$ = createEffect(() => {
    return interval(2_500).pipe(
      exhaustMap(() => {
        return this.graphql
          .fetch(getHabitsQuery)
          .pipe(
            map((response: any) =>
              AppActions.getHabitsSuccessAction(response.data.habits)
            )
          );
      })
    );
  });
}
