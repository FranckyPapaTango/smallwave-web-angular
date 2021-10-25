import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus!: boolean;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }


  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('connexion réussie !'); this.authStatus = this.authService.isAuth;
        //Navigation vers la page post connexion :
        this.router.navigate(['crud']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut(); this.authStatus = this.authService.isAuth;
    console.log('user déconnecté !');
  }


}
