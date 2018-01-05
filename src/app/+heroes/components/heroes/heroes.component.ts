import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  @Input() heroes: Hero[];

  @Output() deleteChange = new EventEmitter<Hero>();
  @Output() editChange = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  getHeroImage(hero: Hero): string {
    const thumb = hero.character.thumbnail;
    return `${thumb.path}/standard_large.${thumb.extension}`;
  }

}
