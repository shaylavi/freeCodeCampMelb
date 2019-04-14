import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  totalUsers = 0;

  onTotalUsers(users: number) {
    this.totalUsers = users;
  }
}
