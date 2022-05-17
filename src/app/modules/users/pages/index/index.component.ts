import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  constructor(
    private _userService: UserService
  ) {
  }

  ngOnInit(): void {
    // this._userService.getUsers()
  }
  ngOnDestroy(): void {

  }

}
