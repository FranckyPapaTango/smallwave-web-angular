import { Subject } from "rxjs";
import { Commande } from "../models/commande.model";

export class UserService {

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


  emitUsers() {
    this.commandeSubject.next(this.commandes.slice());
  }

  addUser(commande: Commande) {
    this.commandes.push(commande);
    this.emitUsers();
  }

}
