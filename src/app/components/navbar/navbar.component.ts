import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
 import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

authStatus: boolean =false;
menuBooleanVariable : boolean =false;
menu_icon_class_BooleanVariable: boolean =false;

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService) { }


 ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }


    search(event:any){
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.cartService.search.next(this.searchTerm);
    }



openMenu(){
/* this.menuBooleanVariable=true;  to toggle : */
this.menuBooleanVariable= ! this.menuBooleanVariable;
/* toggled too */
this.menu_icon_class_BooleanVariable= ! this.menu_icon_class_BooleanVariable;
}


/* collapse menu after a link is clicked */
  public onSidenavClose = () => {
    this.menuBooleanVariable= false;
    this.menu_icon_class_BooleanVariable=false;
  }


}

