  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Typecommande } from 'src/app/models/typecommande';
  import { Commande } from 'src/app/models/commande';
  import { CommandeService } from 'src/app/services/commande.service';

  @Component({
    selector: 'app-commande-form',
    templateUrl: './commande-form.component.html',
    styleUrls: ['./commande-form.component.css']
  })
  export class CommandeFormComponent implements OnInit {

    commande: Commande = new Commande();

    typecommandes: Typecommande[] = [];

  civilites: string[] = ["Mr", "Mme", "Mlle", "Association/Organisme", "Micro-entreprise","Société"];
constructor(private commandeService: CommandeService, private activatedRoute: ActivatedRoute, private router: Router) { }
//constructor(private commandeService: CommandeService, private typecommandeService: TypecommandeService, private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    this.commandeService.getTypecommandes().subscribe(response => this.typecommandes = response);
      this.activatedRoute.params.subscribe(params => {
        let id: number = params['id'];
        if (id) {
          this.commandeService.obtenerCommande(id).subscribe(response => this.commande = response);
        }
      })
}

  crearCommande() {
    this.commandeService.crearCommande(this.commande).subscribe(response => this.router.navigate(['listcommande']));
  }

  actualizarCommande() {
    this.commandeService.actualizarCommande(this.commande).subscribe(response => this.router.navigate(['listcommande']));
  }

  compararTypecommande(o1: Typecommande, o2: Typecommande): boolean {
    if (o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }



  }
