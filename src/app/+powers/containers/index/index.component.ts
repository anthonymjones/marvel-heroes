import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { Power } from '../../../core/models/power.model';
import { PowersService } from '../../../core/services/powers.service';
import { AddPowerComponent } from '../../dialogs/add-power/add-power.component';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  powers: Observable<Power[]>;

  constructor(
    private powersService: PowersService,
    private matDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.powers = this.powersService.getPowers();
  }

  onAdd() {
    this.matDialog.open(AddPowerComponent);
  }

  onDelete(power: Power) {
    this.powersService.deletePower(power)
      .subscribe(() => this.powers = this.powersService.getPowers());
  }

}
