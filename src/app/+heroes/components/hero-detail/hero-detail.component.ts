import { Component, Input } from '@angular/core';

import { CharacterUrl } from '../../../core/models/character-url.model';
import { Hero } from '../../../core/models/hero.model';
import { Power } from '../../../core/models/power.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Input() powers: Power[];

  getCharacterUrlByType(type: 'detail' | 'wiki' | 'comiclink'): CharacterUrl {
    return this.hero.character.urls.find(url => url.type === type);
  }

  getHeroImage(): string {
    const thumb = this.hero.character.thumbnail;
    return `${thumb.path}/detail.${thumb.extension}`;
  }

  hasCharacterUrlByType(type: 'detail' | 'wiki' | 'comiclink'): boolean {
    return this.hero.character.urls.map(url => url.type).indexOf(type) > -1;
  }
}
