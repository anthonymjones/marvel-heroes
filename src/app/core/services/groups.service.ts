import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';
import { Group } from '../models/group.model';

@Injectable()
export class GroupsService extends BaseService {

  constructor(
    private httpClient: HttpClient,
  ) {
    super();
  }

  addGroup(group: Group): Observable<Group> {
    return this.httpClient.post<Group>(`${this.BASE_URL}/groups`, group);
  }

  getGroups(): Observable<Array<Group>> {
    return this.httpClient.get<Array<Group>>(`${this.BASE_URL}/groups`);
  }

  deleteGroup(group: Group): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/groups/${group.id}`);
  }

  editGroup(group: Group): Observable<Group> {
    return this.httpClient.put<Group>(`${this.BASE_URL}/groups/${group.id}`, group);
  }

}
