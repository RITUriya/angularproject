import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { username } from 'src/app/interface/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.css'],
  providers: [UsersService],
})
export class MainbarComponent implements OnInit {
  userdata: username[] = [];
  usernameToDisplay: any;
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): any {
    this.userService.getUserData().subscribe((data: username[]) => {
      console.log(data);
      this.userdata = data;
    });
  }
  userClick(e: any): void {
    this.usernameToDisplay = e.target.innerText;
    let url: string = '/user/' + this.usernameToDisplay;
    this.router.navigate(['/user', this.usernameToDisplay]);
  }
}
