import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';

import { Power } from "../../../core/models/power.model";
import { PowersService } from '../../../core/services/powers.service';
import { AddPower } from '../../../state/powers/actions/powers';
import { PowersState } from '../../../state/powers/reducers';

@Component({
  templateUrl: './add-power.component.html',
  styleUrls: ['./add-power.component.scss']
})
export class AddPowerComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AddPowerComponent>,
    private matSnackBar: MatSnackBar,
    private powersService: PowersService,
    private store: Store<PowersState>,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onAdd() {
    const power = <Power>this.form.value;
    this.store.dispatch(new AddPower(power));
    // this.powersService.createPower(power)
    //   .subscribe(() => {
    //     this.matSnackBar.open(
    //       'Power Created',
    //       'Success',
    //       {
    //         duration: 2000,
    //       },
    //     );
    //     this.close();
    //   });
  }

  close() {
    this.matDialogRef.close();
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close();
  }
}
