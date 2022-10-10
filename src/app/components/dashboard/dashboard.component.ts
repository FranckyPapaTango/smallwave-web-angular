import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

constructor(private authservice: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

    logOut() {
        this.authservice.logout();
        this.route.navigate(['auth']);
    }
}
