import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Actions, Effect } from '@ngrx/effects';

import { map, tap } from 'rxjs/operators';

import { SNACKBAR_CLOSE, SNACKBAR_OPEN, SnackbarClose, SnackbarOpen } from '../actions/snackbar';

@Injectable()
export class SnackbarEffects {

  @Effect({
    dispatch: false
  })
  closeSnackbar = this.actions.ofType<SnackbarClose>(SNACKBAR_CLOSE)
    .pipe(
      tap(() => this.matSnackBar.dismiss())
    );

  @Effect({
    dispatch: false
  })
  showSnackbar = this.actions.ofType<SnackbarOpen>(SNACKBAR_OPEN)
    .pipe(
      map((action: SnackbarOpen) => action.payload),
      tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config))
    );

  constructor(
    private actions: Actions,
    private matSnackBar: MatSnackBar,
  ) {}
}
