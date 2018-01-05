import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from '../../../core/models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  @Input() groups: Group[];

  @Output() deleteChange = new EventEmitter<Group>();
  @Output() editChange = new EventEmitter<Group>();

  constructor() { }

  ngOnInit() {
  }


}
