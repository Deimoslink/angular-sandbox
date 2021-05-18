import {Component, OnInit} from '@angular/core';
import {USER_ROLES} from '../../user-roles';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  public userRoles: string[] = [USER_ROLES.EMPLOYEE, USER_ROLES.MANAGER, USER_ROLES.ADMIN];
  public currentRole: string;

  constructor() { }

  ngOnInit(): void {
  }

}
