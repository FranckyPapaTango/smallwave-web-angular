import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
//@Injectable()
export class FourOhFourComponent implements OnInit {

  authStatus!: boolean;

  constructor(
    //private authService: AuthService
  ) { }

  ngOnInit(): void {
   // this.authStatus = this.authService.isAuth;
  }

}
