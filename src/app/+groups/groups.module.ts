import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatSnackBarModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { GroupsComponent } from './components/groups/groups.component';
import { IndexComponent } from './containers/index/index.component';
import { AddGroupComponent } from './dialogs/add-group/add-group.component';
import { GroupsRoutingModule } from './groups-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    GroupsRoutingModule,
    MatButtonModule,
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
  declarations: [IndexComponent, GroupsComponent, AddGroupComponent],
  entryComponents: [AddGroupComponent]
})
export class GroupsModule {}
