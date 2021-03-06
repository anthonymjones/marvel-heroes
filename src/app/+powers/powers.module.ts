import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { PowersRoutingModule } from './powers-routing.module';
import { IndexComponent } from './containers/index/index.component';
import { PowersComponent } from './components/powers/powers.component';
import { EditComponent } from './containers/edit/edit.component';
import { EditPowerComponent } from './components/edit-power/edit-power.component';
import { AddPowerComponent } from './dialogs/add-power/add-power.component';
import { SharedModule } from "../shared/shared.module";
import { PowerComponent } from './containers/power/power.component';
import { PowerDetailComponent } from './components/power-detail/power-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    PowersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [IndexComponent, PowersComponent, EditComponent, EditPowerComponent, AddPowerComponent, PowerComponent, PowerDetailComponent],
  entryComponents: [AddPowerComponent]
})
export class PowersModule {}
