import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

/* utilisée dans ancienne version pour alternativer l'affichage des 2 boutons login/logout:*/
 authStatus!: boolean;
 //  authStatus=  false;

  isFixedNavbar!: boolean;

  @HostBinding('class.navbar-opened') navbarOpened = false;
  static navbarOpened: boolean;



  //constructor(private authService : AuthService,private router : Router, private route: ActivatedRoute) { }

  constructor(private router : Router, private route: ActivatedRoute) { }


  ngOnInit() {
  /* utilisée dans ancienne version pour alternativer l'affichage des 2 boutons login/logout:
      this.authStatus = this.authService.isAuth;
  //* call the defined observable in  authService
      const isAuthObservable = this.authService.getIsAuth();
          //* subscribe authStatus to the observable  isAuth :
              isAuthObservable.subscribe((isAuth : any) => {
                  this.authStatus = isAuth ;
              });*/
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }


  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }



}

