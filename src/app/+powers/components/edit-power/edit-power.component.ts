import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { debounceTime } from 'rxjs/operators';

import { Power } from '../../../core/models/power.model';

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
  ) {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.power) {
      this.populateForm();
    }
  }

  ngOnInit() {
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

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
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
