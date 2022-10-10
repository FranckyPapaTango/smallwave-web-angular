import { Injectable } from '@angular/core';
import { Observable, EMPTY,isEmpty } from "rxjs";
import { Router } from '@angular/router'
import { UtilisateurService } from 'src/app/services/utilisateur.service'
import { Utilisateur } from 'src/app/models/utilisateur'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//constructor(private utilisateurService: UtilisateurService, private router: Router) { }

 isAuth = false;

      //ancienne logique si login et password sont définis en dur:
      userData: Array<{}>;
      public userDb: Utilisateur[] = [];
      public isNoResult: boolean = true;
     tocken: Number = 0;
     tockenDetails: String;


     constructor(private utilisateurService: UtilisateurService, private router: Router) {
      //ancienne logique si login et password sont définis en dur:
        this.userData = [{
             login: 'k@admin', password: 'k@admin'
         }]


     }
     setTocken() {
         this.tocken = new Date().getTime();
         localStorage.setItem('tocken', JSON.stringify(this.tocken));
     }
     validateUserTocken() {
         this.tockenDetails = localStorage.getItem('tocken');
         //let _tocken = JSON.parse
         if (this.tockenDetails != null) {
             return true;
         } else {
             return false;
         }

     }
     //it should be from backend
     //user is from frontend
     validateUserDetails(user) {
     //ancienne logique si login et password sont définis en dur:
         let _userList = this.userData;
         for (var i = 0; i < _userList.length; i++) {
             if (user.login.toLowerCase() == _userList[i]['login'].toLowerCase() && user.password == _userList[i]['password']) {
                 return true;
             }

         }
          return false;


/*this.utilisateurService.getuserwithloginandpassword(user.login,user.password).subscribe((result: any) => {
                      if(result && result != null){
                          this.userDb = result;
                          this.isNoResult = false;
                         // this.spinner.hide();
                         // return;
                      }
                      this.isNoResult = true;
                     // this.spinner.hide();
                  },
                                    error => {
                                    //  this.spinner.hide();
                                   //   this.buildMessageModal('An error occurs when searching the book data');
                                    }
                            );
    return this.isNoResult;*/
     }



     logout() {
         localStorage.clear();
     }

}
