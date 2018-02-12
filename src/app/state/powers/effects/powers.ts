import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

import { Power } from '../../../core/models/power.model';
import { PowersService } from '../../../core/services/powers.service';
import { SnackbarOpen } from '../../shared/actions/snackbar';
import {
  ADD_POWER, AddPower, AddPowerSuccess, DELETE_POWER, DeletePower, DeletePowerSuccess, LOAD_POWER, LOAD_POWERS,
  LoadPower, LoadPowersSuccess, LoadPowerSuccess, UPDATE_POWER, UPDATE_POWER_SUCCESS, UpdatePower, UpdatePowerSuccess
} from '../actions/powers';

@Injectable()
export class PowersEffects {

  @Effect()
  addPower: Observable<Action> = this.actions.ofType(ADD_POWER)
    .pipe(
      map((action: AddPower) => action.payload),
      switchMap((power: Power) => this.powersService.createPower(power)),
      map((power) => new AddPowerSuccess(power))
    );

  @Effect()
  deletePower: Observable<Action> = this.actions.ofType(DELETE_POWER)
    .pipe(
      map((action: DeletePower) => action.payload),
      switchMap((power: Power) => this.powersService.deletePower(power)),
      map((power) => new DeletePowerSuccess(power))
    );

  @Effect()
  loadPower: Observable<Action> = this.actions.ofType(LOAD_POWER)
    .pipe(
      map((action: LoadPower) => action.payload),
      switchMap((payload) => this.powersService.getPower(payload.id)),
      map(power => new LoadPowerSuccess(power)),
      // catchError(error => Observable.of(error))
    );

  @Effect()
  loadPowers: Observable<Action> = this.actions.ofType(LOAD_POWERS)
    .pipe(
      switchMap(() => this.powersService.getPowers()),
      map(powers => new LoadPowersSuccess(powers)),
      // catchError(error => Observable.of(error))
    );

  @Effect()
  updatePower: Observable<Action> = this.actions.ofType(UPDATE_POWER)
    .pipe(
      map((action: UpdatePower) => action.payload),
      switchMap((power: Power) => this.powersService.editPower(power)),
      map((power) => new UpdatePowerSuccess(power))
    );

  @Effect()
  updatePowerSuccess: Observable<Action> = this.actions.ofType<UpdatePowerSuccess>(UPDATE_POWER_SUCCESS)
    .pipe(
      map(() => new SnackbarOpen({
        message: 'Power Updated',
        action: 'Success',
        config: {
          duration: 2000,
        }
      })),
    );

  constructor(
    private actions: Actions,
    private powersService: PowersService,
  ) {}
}
