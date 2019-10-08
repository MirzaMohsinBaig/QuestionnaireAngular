import { Component, OnInit } from '@angular/core';
import { User} from '../user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User = {
    name : "Fabien DOMPEY",
    cursus : "Master 1 Ingénierie Logicielle",
    age : 22,
    mail : "dompeydnf@gmail.com"
  };
  constructor() { }

  ngOnInit() {
  }

}