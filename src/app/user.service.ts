import { Injectable } from '@angular/core';
import {USERS} from './list-users';
import {User} from './user';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private messageService : MessageService) { }

  getUsers(): Observable<User[]> {
  this.messageService.add('UserService: fetched users');
  return of(USERS);
}
}