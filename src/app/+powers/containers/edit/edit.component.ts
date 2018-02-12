import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { first, map, switchMap, tap } from 'rxjs/operators';

import { Power } from '../../../core/models/power.model';
import { LoadPower, SelectPower, UpdatePower } from '../../../state/powers/actions/powers';
import { getSelectedPower, PowersState } from '../../../state/powers/reducers';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  power: Observable<Power>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<PowersState>,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.power = this.activatedRoute.paramMap
      .pipe(
        tap((paramMap) => this.store.dispatch(new SelectPower({id: Number(paramMap.get('id'))}))),
        tap((paramMap) => {
          this.hasPowerInStore()
            .subscribe(
              inStore => {
                if (!inStore) {
                  this.store.dispatch(new LoadPower({id: parseInt(paramMap.get('id'))}))
                }
              }
            )
        }),
        switchMap(() => this.store.select(getSelectedPower),
        )
      );

  }

  hasPowerInStore(): Observable<boolean> {
    return this.store.select(getSelectedPower)
      .pipe(
        first(),
        map(power => !!power)
      );
  }

  onPowerChange(power: Power) {
    this.store.dispatch(new UpdatePower(power));
  }

}
