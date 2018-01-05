import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { PowersService } from '../../../core/services/powers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Power } from "../../../core/models/power.model";

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
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onAdd() {
    const power = <Power>this.form.value;
    this.powersService.createPower(power)
      .subscribe(() => {
        this.matSnackBar.open(
          'Power Created',
          'Success',
          {
            duration: 2000,
          },
        );
        this.close();
      });
  }

  close() {
    this.matDialogRef.close();
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close();
  }
}
