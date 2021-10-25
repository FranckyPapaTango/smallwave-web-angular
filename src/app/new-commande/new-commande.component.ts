import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commande } from '../models/commande.model';
import { CommandesService } from '../services/commandes.service';

@Component({
  selector: 'app-new-commande',
  templateUrl: './new-commande.component.html',
  styleUrls: ['./new-commande.component.scss']
})
export class NewCommandeComponent implements OnInit {


  //objet de type Formulaire
  commandeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private commandeService: CommandesService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  //méthode créant le formulaire :
  initForm() {
    this.commandeForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.email, Validators.required]],
        drinkPreference: ["", Validators.required],
        hobbies: this.formBuilder.array([])
      }
    );
  }

  onSubmitForm() {
    const formValue = this.commandeForm.value;
    const newCommande = new Commande(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.commandeService.addCommande(newCommande);
    this.router.navigate(['/crud']);
  }



}


