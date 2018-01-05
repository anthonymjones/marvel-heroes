import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { map, share, switchMap } from 'rxjs/operators';

import { Hero } from '../../../core/models/hero.model';
import { Power } from '../../../core/models/power.model';
import { HeroesService } from '../../../core/services/heroes.service';
import { PowersService } from '../../../core/services/powers.service';

@Component({
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

  heroes: Observable<Array<Hero>>;
  power: Observable<Power>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private powersService: PowersService,
  ) { }

  ngOnInit() {
    this.power = this.activatedRoute.paramMap
      .pipe(
        switchMap(paramMap => this.powersService.getPower(paramMap.get('id'))),
        share()
      );

    this.heroes = this.power
      .pipe(
        switchMap(power => this.heroesService.getHeroes()
          .pipe(
            map(heroes => heroes.filter(hero => hero.powers.indexOf(power.id) > -1))
          )
        )
      )
  }

}
