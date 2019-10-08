import { Component, OnInit } from '@angular/core';
import { USERS} from '../list-users';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser : User;
  constructor() { }

  ngOnInit() {
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}