import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navb',
  templateUrl: './navb.component.html',
  styleUrls: ['./navb.component.scss']
})
export class NavbComponent implements OnInit {

authStatus: boolean =false;
menuBooleanVariable : boolean =false;
menu_icon_class_BooleanVariable: boolean =false;

constructor() {}

 ngOnInit(): void {

  }




openMenu(){
/* this.menuBooleanVariable=true;  to toggle : */
this.menuBooleanVariable= ! this.menuBooleanVariable;
/* toggled too */
this.menu_icon_class_BooleanVariable= ! this.menu_icon_class_BooleanVariable;
}





}
