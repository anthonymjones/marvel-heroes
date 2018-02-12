import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { Power } from '../../../core/models/power.model';
import { DeletePower, LoadPowers } from '../../../state/powers/actions/powers';
import { getAllPowers, PowersState } from '../../../state/powers/reducers';
import { AddPowerComponent } from '../../dialogs/add-power/add-power.component';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  powers: Observable<Power[]>;

  constructor(
    private store: Store<PowersState>,
    private matDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.powers = this.store.select(getAllPowers);
    this.store.dispatch(new LoadPowers());
  }

  onAdd() {
    this.matDialog.open(AddPowerComponent);
  }

  onDelete(power: Power) {
    this.store.dispatch(new DeletePower(power));
  }

}
