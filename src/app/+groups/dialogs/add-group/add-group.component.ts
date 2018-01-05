import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { HeroesService } from '../../../core/services/heroes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../../core/models/hero.model';
import { Observable } from 'rxjs/Observable';
import { Group } from '../../../core/models/group.model';
import { GroupsService } from '../../../core/services/groups.service';

@Component({
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  form: FormGroup;

  selectedHeroes: Hero[] = [];

  heroes: Observable<Array<Hero>>;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AddGroupComponent>,
    private matSnackBar: MatSnackBar,
    private groupsService: GroupsService,
    private heroesService: HeroesService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
    this.heroes = this.heroesService.getHeroes();
  }

  onAdd() {
    if (!this.form.valid) {
      return;
    }

    this.groupsService.addGroup({
      name: this.form.get('name').value,
      heroes: this.selectedHeroes.map(hero => hero.id),
    })
      .subscribe(() => {
        this.matSnackBar.open(
          'Group Added',
          'Success',
          {
            duration: 2000,
          },
        );
        this.close();
      });
  }

  onHeroChange(heroes: Hero[]) {
    this.selectedHeroes = heroes;
  }

  close() {
    this.matDialogRef.close();
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close();
  }
}
