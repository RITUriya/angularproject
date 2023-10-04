import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { username } from 'src/app/interface/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  usernameData: username[] = [];
  usernamedisplayOnHeader: string;
  @Input() usernamedisplay: any;

  constructor(private userservice: UsersService) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    this.usernamedisplayOnHeader = this.usernamedisplay;
  }
  ngOnInit(): void {
    this.userservice
      .getUserData()
      .subscribe((data) => (this.usernameData = data));
  }
}
