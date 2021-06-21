import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.mode';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public professions = ['Accountant', 'Teacher', 'Engineer', 'Lawyer'];
  public user!: User;
  public submitted = false;

  submit() {
    this.submitted = true;
  }

  constructor() {}

  ngOnInit(): void {
    this.user = new User(1, 'Peter', 35, this.professions[0]);
  }
}
