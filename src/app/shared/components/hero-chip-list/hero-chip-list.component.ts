import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Hero } from '../../../core/models/hero.model';
import { Group } from '../../../core/models/group.model';

@Component({
  selector: 'app-hero-chip-list',
  templateUrl: './hero-chip-list.component.html',
  styleUrls: ['./hero-chip-list.component.scss']
})
export class HeroChipListComponent implements OnChanges {

  @Input() group: Group;
  @Input() heroes: Hero[];
  @Input() selectable = true;

  @Output() heroChange = new EventEmitter<Array<Hero>>();

  selectedHeroes: Hero[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.heroes && this.group) {
      this.selectedHeroes = this.heroes.filter(hero => this.group.heroes.indexOf(hero.id) > -1);
    }
  }

  isSelected(hero: Hero) {
    if (!this.selectedHeroes) {
      return false;
    } else {
      return this.selectedHeroes.indexOf(hero) > -1;
    }
  }

  toggleHero(hero: Hero) {
    const heroInd = this.selectedHeroes.indexOf(hero);
    if (heroInd > -1) {
      this.selectedHeroes.splice(heroInd, 1);
    } else {
      this.selectedHeroes.push(hero);
    }
    this.heroChange.emit(this.selectedHeroes)
  }
}
