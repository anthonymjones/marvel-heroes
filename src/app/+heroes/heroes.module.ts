import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSnackBarModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { EditHeroComponent } from './components/edit-hero/edit-hero.component';
import { HeroActionsComponent } from './components/hero-actions/hero-actions.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EditComponent } from './containers/edit/edit.component';
import { HeroComponent } from './containers/hero/hero.component';
import { IndexComponent } from './containers/index/index.component';
import { AddHeroComponent } from './dialogs/add-hero/add-hero.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    IndexComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroActionsComponent,
    EditComponent,
    EditHeroComponent,
    AddHeroComponent
  ],
  entryComponents: [AddHeroComponent]
})
export class HeroesModule {}
