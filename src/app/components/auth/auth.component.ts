import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  authStatus!: boolean;

 // public model: loginModel;
   public model: Utilisateur;
      showLoginWarningMessage: boolean = false;
      returnUrl: string = '';


  constructor(private authService : AuthService, private router : Router, private route: ActivatedRoute) {
   this.model = new Utilisateur();
   }





  ngOnInit(): void {
  /* utilisée dans ancienne version pour alternativer l'affichage des 2 boutons login/logout: */
    this.authStatus = this.authService.isAuth;

   if (this.authService.validateUserTocken()) {
                //update your logic accordingly
                //this will trigger while user clicks on back button,
                //before naviagting to login page
                alert('You will be logged out');
            }
            this.authService.logout();
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }



/*
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('connexion réussie !'); this.authStatus = this.authService.isAuth;
        //Navigation vers la page post connexion :
        this.router.navigate(['/listcommande']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut(); this.authStatus = this.authService.isAuth;
    console.log('user déconnecté !');
  }
*/


login() {
        this.showLoginWarningMessage = false;
        if (this.authService.validateUserDetails(this.model)) {

          this.authService.isAuth=false;

            this.authService.setTocken();
            this.router.navigate([this.returnUrl]);
        } else {
            console.log('Invalid credentials');
            this.showLoginWarningMessage = true;
        }

    }

}
