import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav' ;
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list' ;
import { FlexLayoutModule } from '@angular/flex-layout';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navb',
  templateUrl: './navb.component.html',
  styleUrls: ['./navb.component.scss']
})
export class NavbComponent implements OnInit {

 @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }


  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
