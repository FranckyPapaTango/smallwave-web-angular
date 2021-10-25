import { Subject } from "rxjs";
import { Commande } from "../models/commande.model";

export class CommandesService {

  private commandes: Commande[] = [
    {
      firstName: 'James',
      lastName:'BOND',
      email: 'jbjbond@gmail.com',
      drinkPreference: 'Wisky',
      hobbies : ['Natation','Byciclette','Lecture']

    }
  ];
  commandeSubject = new Subject<Commande[]>();


  emitCommandes() {
    this.commandeSubject.next(this.commandes.slice());
  }

  addCommande(commande: Commande) {
    this.commandes.push(commande);
    this.emitCommandes();
  }

}

