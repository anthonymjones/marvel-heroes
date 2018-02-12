import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Power } from '../../../core/models/power.model';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class PowersComponent implements OnChanges {
  @Input() powers: Power[];
  @Output() deleteChange = new EventEmitter<Power>();

  ngOnChanges() {
    if (this.powers) {
      this.powers.sort((a, b) => {
        let aName = a.name.toUpperCase();
        let bName = b.name.toUpperCase();
        return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
      })
    }
  }

}
