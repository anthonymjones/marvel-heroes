import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Power } from '../../../core/models/power.model';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-edit-power',
  templateUrl: './edit-power.component.html',
  styleUrls: ['./edit-power.component.scss']
})
export class EditPowerComponent implements OnInit, OnChanges {
  @Input() power: Power;
  @Output() powerChange = new EventEmitter<Power>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.power) {
      this.populateForm();
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
    this.form.valueChanges
      .pipe(
        debounceTime(500),
      )
      .subscribe(value => {
        this.powerChange.emit({
          ...this.power,
          ...value
        });
      });
  }

  populateForm() {
    this.form.patchValue({
      name: this.power.name,
    }, {
      emitEvent: false,
    });
  }
}
