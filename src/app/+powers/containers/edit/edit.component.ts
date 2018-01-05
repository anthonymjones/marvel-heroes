import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { Power } from '../../../core/models/power.model';
import { PowersService } from '../../../core/services/powers.service';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  power: Observable<Power>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private powersService: PowersService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.power = this.activatedRoute.paramMap
      .pipe(
        switchMap(paramMap => this.powersService.getPower(paramMap.get('id')))
      );
  }

  onPowerChange(power: Power) {
    this.powersService.editPower(power)
      .subscribe(() => this.matSnackBar.open(
        'Power Saved',
        'Success',
        {
          duration: 2000,
        }
      ));
  }

}
