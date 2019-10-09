import { Component, OnInit ,Input} from '@angular/core';
import { User } from '../user'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user : User;
  constructor(private route: ActivatedRoute,
  private userService: UserService,
  private location: Location) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
  const age = +this.route.snapshot.paramMap.get('age');
  this.userService.getUser(age)
    .subscribe(user => this.user = user);
}
goBack(): void {
  this.location.back();
}
}