import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { first, map, share, switchMap, tap } from 'rxjs/operators';

import { Hero } from '../../../core/models/hero.model';
import { Power } from '../../../core/models/power.model';
import { HeroesService } from '../../../core/services/heroes.service';
import { LoadPower, SelectPower } from '../../../state/powers/actions/powers';
import { getSelectedPower, PowersState } from '../../../state/powers/reducers';

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
    private store: Store<PowersState>,
  ) { }

  ngOnInit() {
    this.power = this.activatedRoute.paramMap
      .pipe(
        tap((paramMap) => {
          this.store.dispatch(new SelectPower({id: Number(paramMap.get('id'))}));
          this.hasPowerInStore()
            .subscribe(
              hasInStore => {
                if (!hasInStore) {
                  this.store.dispatch(new LoadPower({id: parseInt(paramMap.get('id'))}))
                }
              }
            )
        }),
        switchMap(() => this.store.select((getSelectedPower))),
        tap(power => {
            this.heroes = this.heroesService.getHeroes()
              .pipe(
                map(heroes => heroes.filter(hero => hero.powers.indexOf(power.id) > -1)))
          }
        )
      );
  }

  hasPowerInStore(): Observable<boolean> {
    return this.store.select(getSelectedPower)
      .pipe(
        first(),
        map(power => !!power)
      );
  }

}
