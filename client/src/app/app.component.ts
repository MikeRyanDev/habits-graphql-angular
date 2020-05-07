import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as AppState from "./app.state";
import * as AppActions from "./app.actions";

@Component({
  selector: "app-root",
  template: `
    <h1>Habits+NgRx+GraphQL!</h1>
    <pre>{{ habits$ | async | json }}</pre>
  `,
  styles: [],
})
export class AppComponent {
  habits$: Observable<any[]>;

  constructor(store: Store<AppState.AppShape>) {
    this.habits$ = store.select(AppState.selectHabits);

    store.dispatch(AppActions.enterHomePageAction());
  }
}
