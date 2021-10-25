import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Commande } from '../models/commande.model';
import { CommandesService } from '../services/commandes.service';

@Component({
  selector: 'app-commandes-liste',
  templateUrl: './commandes-liste.component.html',
  styleUrls: ['./commandes-liste.component.scss']
})
export class CommandesListeComponent implements OnInit {

  commandes!: Commande[];
  commandeSubscription!: Subscription;

  constructor(private commandeService:CommandesService) { }

  ngOnInit(): void {

    this.commandeSubscription = this.commandeService.commandeSubject.subscribe(
      (commandes: Commande[]) => { this.commandes = commandes;}
    );
    this.commandeService.emitCommandes();
  }

  ngOnDestroy(): void {
   this.commandeService.commandeSubject.unsubscribe();
 }

}
