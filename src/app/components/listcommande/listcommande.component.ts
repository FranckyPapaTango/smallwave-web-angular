import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { Commande} from 'src/app/models/commande';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.scss']
})
export class ListcommandeComponent implements OnInit {

commandes: Commande[] = [];


  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getCommandes().subscribe(response => this.commandes = response);

  }

  eliminarCommande(id: number) {
    this.commandeService.eliminarCommande(id).subscribe(response => {
      this.commandes = this.commandes.filter(commande => commande.id != id);
    })
  }


}
