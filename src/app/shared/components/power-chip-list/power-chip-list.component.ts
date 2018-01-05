import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Hero } from '../../../core/models/hero.model';
import { Power } from '../../../core/models/power.model';

@Component({
  selector: 'app-power-chip-list',
  templateUrl: './power-chip-list.component.html',
  styleUrls: ['./power-chip-list.component.scss']
})
export class PowerChipListComponent implements OnChanges {

  @Input() hero: Hero;
  @Input() powers: Power[];
  @Input() selectable = true;

  @Output() powerChange = new EventEmitter<Array<Power>>();

  selectedPowers: Power[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (this.hero && this.powers) {
      this.selectedPowers = this.powers.filter(power => this.hero.powers.indexOf(power.id) > -1);
    }
  }

  isSelected(power: Power) {
    if (!this.selectedPowers) {
      return false;
    } else {
      return this.selectedPowers.indexOf(power) > -1;
    }
  }

  togglePower(power: Power) {
    if (!this.selectable) { return; }
    const powerInd = this.selectedPowers.indexOf(power);
    if (powerInd > -1) {
      this.selectedPowers.splice(powerInd, 1);
    } else {
      this.selectedPowers.push(power);
    }
    this.powerChange.emit(this.selectedPowers)
  }
}
