import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navb',
  templateUrl: './navb.component.html',
  styleUrls: ['./navb.component.scss']
})
export class NavbComponent implements OnInit {

  authStatus: boolean = false;
  menuBooleanVariable: boolean = false;
  menu_icon_class_BooleanVariable: boolean = false;
  isBoutiqueSelected: boolean = false; // Nouvelle propriété

  public totalItem: number = 0;
  public searchTerm!: string;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  openMenu() {
    this.menuBooleanVariable = !this.menuBooleanVariable;
    this.menu_icon_class_BooleanVariable = !this.menu_icon_class_BooleanVariable;
  }

  onBoutiqueSelect() {
    // Logique à exécuter lors de la sélection de l'onglet "BOUTIQUE"
    this.isBoutiqueSelected = true;
  }

  /* collapse menu after a link is clicked */
  public onSidenavClose = () => {
    this.menuBooleanVariable = false;
    this.menu_icon_class_BooleanVariable = false;
    this.isBoutiqueSelected = false; // Réinitialiser la propriété lors de la fermeture du menu
  }
}
