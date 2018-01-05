import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule, MatChipsModule, MatIconModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { DialogHeaderComponent } from './components/dialog-header/dialog-header.component';
import { HeroChipListComponent } from './components/hero-chip-list/hero-chip-list.component';

const components = [
  LayoutComponent,
  DialogHeaderComponent,
  HeroChipListComponent,
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
