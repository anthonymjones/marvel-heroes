import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatDialogRef, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';

import { Character } from '../../../core/models/character.model';
import { Power } from '../../../core/models/power.model';
import { CharactersService } from '../../../core/services/characters.service';
import { HeroesService } from '../../../core/services/heroes.service';
import { PowersService } from '../../../core/services/powers.service';

@Component({
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  private selectedPowers: Array<Power> = [];
  character: Character;
  characters: Observable<Array<Character>>;
  form: FormGroup;
  powers: Observable<Array<Power>>;

  constructor(
    private charactersService: CharactersService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AddHeroComponent>,
    private matSnackBar: MatSnackBar,
    private heroesService: HeroesService,
    private powersService: PowersService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
    this.powers = this.powersService.getPowers();

    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        if (value.name.length) {
          this.characters = this.charactersService.getCharacters(value.name);
        }
      });
  }

  displayCharacterAutocomplete(character: Character): string {
    if (character) {
      return character.name;
    }
    return '';
  }

  onAdd() {
    if (!this.form.valid) {
      return;
    }

    this.heroesService.addHero({
      character: this.character,
      powers: this.selectedPowers.map(power => power.id)
    })
      .subscribe(() => {
        this.matSnackBar.open(
          'Hero Added',
          'Success',
          {
            duration: 2000,
          },
        );
        this.close();
      });
  }

  onPowerChange(powers: Power[]) {
    this.selectedPowers = powers;
  }

  selectHero(event: MatAutocompleteSelectedEvent) {
    return this.character = event['option'].value;
  }

  close() {
    this.matDialogRef.close();
  }

  @HostListener('keydown.esc')
  onEsc() {
    this.close();
  }

  getHeroImage(character: Character): string {
    const thumb = character.thumbnail;
    return `${thumb.path}/standard_large.${thumb.extension}`;
  }
}
