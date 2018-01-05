import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatChipsModule, MatIconModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { HeroChipListComponent } from './components/hero-chip-list/hero-chip-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PowerChipListComponent } from './components/power-chip-list/power-chip-list.component';

const components = [
  LayoutComponent,
  DialogHeaderComponent,
  HeroChipListComponent,
  PowerChipListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class SharedModule {}
