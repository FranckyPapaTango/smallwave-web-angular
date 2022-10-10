import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.validateUserTocken()) {
            return true;
        } else {
            this.router.navigate(['/auth'], {
                queryParams: {
                    returnUrl: state.url
                }
            });
            return false;
        }
    }
}
