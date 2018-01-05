import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GroupsService } from '../../../core/services/groups.service';
import { Group } from '../../../core/models/group.model';
import { AddPowerComponent } from '../../../+powers/dialogs/add-power/add-power.component';
import { MatDialog } from '@angular/material';
import { AddGroupComponent } from '../../dialogs/add-group/add-group.component';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  groups: Observable<Array<Group>>;

  constructor(
    private groupsService: GroupsService,
    private matDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.groups = this.groupsService.getGroups();
  }

  onAdd() {
    this.matDialog.open(AddGroupComponent);
  }
  onDelete(group: Group) {
    this.groupsService.deleteGroup(group)
      .subscribe(() => this.groups = this.groupsService.getGroups());
  }

  onEdit(group: Group) {
    this.groupsService.editGroup(group)
      .subscribe(() => this.groups = this.groupsService.getGroups());
  }

}
