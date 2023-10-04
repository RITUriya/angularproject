import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { username } from 'src/app/interface/user';
import { UsersService } from 'src/app/services/users.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-insidebar',
  templateUrl: './insidebar.component.html',
  styleUrls: ['./insidebar.component.css'],
})
export class InsidebarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userSerice: UsersService
  ) {}
  usernameToDisplay: Params;
  userdetails: any;
  enterUsername: string;
  styleOne: { color: 'red' };
  styleTwo: { color: 'white' };
  ngOnInit(): void {
    this.usernameToDisplay = Object.values(this.route.snapshot.params);
    this.userSerice
      .getUserData()
      .pipe(
        map((data: any) =>
          data.find((dat: any) => {
            console.log(dat.name === this.usernameToDisplay);
            console.log(dat);
          })
        )
      )
      .subscribe((data: any) => {
        this.userdetails = data;
      });
  }
}
