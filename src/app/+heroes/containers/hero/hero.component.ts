import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { catchError, map, share, switchMap } from 'rxjs/operators';

import { Hero } from '../../../core/models/hero.model';
import { Power } from '../../../core/models/power.model';
import { HeroesService } from '../../../core/services/heroes.service';
import { PowersService } from '../../../core/services/powers.service';

@Component({
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero: Observable<Hero>;
  powers: Observable<Array<Power>>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private powersService: PowersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.hero = this.activatedRoute.paramMap
      .pipe(
        switchMap(paramMap => this.heroesService.getHero(paramMap.get('id'))),
        share()
      );
    this.powers = this.hero
      .pipe(
        switchMap(hero => forkJoin(
          hero.powers.map(power => {
            return this.powersService.getPower(power.toString())
              .pipe(
                catchError(error => {
                  console.error(error);
                  return Observable.of(undefined);
                })
              );
          })
        )),
        map(powers => powers.filter(power => !!power))
      );
  }

  onDelete(hero: Hero) {
    this.heroesService.deleteHero(hero)
      .subscribe(() => this.router.navigate(['/heroes']));
  }

}
