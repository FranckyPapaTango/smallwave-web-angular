/*import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commandes.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-commande-page',
  templateUrl: './commande-page.component.html',
  styleUrls: ['./commande-page.component.scss']
})
export class CommandePageComponent implements OnInit {

    public types = [ 'Email', 'Nom'];//Les types de recherche "par"
    public displayType: string = 'Email'//choix par defaut
    public civilite!: string;
    public nom!: string;
    public prenom!: string;
    public phone!: string;
    public pays!: string;
    public email!: string;
    public instant_messenger!: string;
    public path_dle!: string;
    public nom_produit!: string;
    public budget!: string;
    public deadline!: string;
    public description_produit!: string;



    public headsTab = ['CIVILITE', 'NOM', 'PRENOM', 'TEL', 'PAYS','EMAIL','INST MESS','PATH_DLE','NOM PRODUIT','BUDGET','DEADLINE','DESCRIPTION PRODUIT'];
    public isNoResult: boolean = true;
    public isFormSubmitted: boolean = false;
    public actionButton: string = 'Save';
    public titleSaveOrUpdate: string = 'Add New Commande Form';
    public messageModal!: string;
    public displayMessageModal: boolean = false;
    
    public commande = new Commande();
    public searchCommandesResult: Commande[] = [];
    
  constructor(private commandeService: CommandesService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }*/
 /**
  * Method that save in the Backend server,
  *  a new commande data retreived from the form
  * @param addCommandeForm
  */
/* saveOrUpdateCommande(addCommandeForm: NgForm){
      this.displayMessageModal = false;
      if(!addCommandeForm.valid){
        this.buildMessageModal('Error in the form');
      }
      if(this.actionButton && this.actionButton === 'Save'){
          this.saveNewCommande(this.commande);
      }else if(this.actionButton && this.actionButton === 'Update'){
          this.updateCommande(this.commande);
      }
      this.titleSaveOrUpdate = 'Add New Commande Form';
      this.actionButton = 'Save';
  }*/
  
 /**
  * Save new commande
  * @param commande
  */
/*  saveNewCommande(commande: Commande){
      this.spinner.show();
      this.commandeService.saveCommande(commande).subscribe(
              (result: Commande) => {
                 if(result.id_commande){
                     this.spinner.hide();
                     this.buildMessageModal('Save operation correctly done');
                 }
              },
              error => {
                  this.spinner.hide();
                  this.buildMessageModal('An error occurs when saving the commande data');
              }
      );
  }*/
  
  /**
   * Update an existing commande
   * @param commande
   */
 /*  updateCommande(commande: Commande){
       this.spinner.show();
       this.commandeService.updateCommande(commande).subscribe(
               (result: Commande) => {
                  if(result.id_commande){
                      this.updateResearchCommandeTab(commande);
                      this.spinner.hide();
                      this.buildMessageModal('Update operation correctly done');
                  }
               },
               error => {
                this.spinner.hide();
                this.buildMessageModal('An error occurs when updating the commande data');
               }
       );
   }*/

   /**
    * Update in the list tab, the commande that has been updated
    * @param commande 
    */
 /*  updateResearchCommandeTab(commande: Commande){
        let index : number = 0; 
        if(this.searchCommandesResult && this.searchCommandesResult.length > 0){
            this.searchCommandesResult.forEach(element => {
                if(element.id_commande == commande.id_commande){
                    this.searchCommandesResult.splice(index, 1, commande);
            
                }
                index++;
            });
        }
   }*/
   
   /**
    * Delete an existing commande
    * @param commande
    */
 /*   deleteCommande(commande: Commande){
        this.spinner.show();
        this.displayMessageModal = false;
        this.commandeService.deleteCommande(commande).subscribe(
                result => {
                    for( var i = 0; i < this.searchCommandesResult.length; i++){ 
                        if ( this.searchCommandesResult[i].id_commande === commande.id_commande) {
                            this.searchCommandesResult.splice(i, 1); 
                        }
                    }
                    this.spinner.hide();
                    this.buildMessageModal('End of delete operation');
                    if(this.searchCommandesResult.length == 0){
                        this.isNoResult = true;
                    }
                });
    }*/
  
  /**
   * Set the selected commande as the commande to be updated
   * @param commande
   */
 /*  setUpdateCommande(commande: Commande){
       this.titleSaveOrUpdate = 'Update Commande Form';
       this.actionButton = 'Update';
       this.commande = Object.assign({}, commande);
   }*/
   
 /**
  * Erase all data from this NgForm.
  * @param addCommandeForm
  */
/*  clearForm(addCommandeForm: NgForm){
      addCommandeForm.form.reset(); 
      this.displayMessageModal = false;
  }*/
  
 /**
  * Search commandes by title or by isbn
  * @param searchCommandeForm
  */
 /* searchCommandesByType(searchCommandeForm){
      this.spinner.show();
      this.displayMessageModal = false;
      if(!searchCommandeForm.valid){
        this.buildMessageModal('Error in the form');
      }
      if(this.displayType === 'Email'){
          this.searchCommandesResult = [];
          this.commandeService.searchCommandeByEmail(this.email).subscribe(
                  result => {
                      if(result && result != null){
                          this.searchCommandesResult.push(result);
                          this.isNoResult = false;
                          this.spinner.hide();
                          return;
                       }
                       this.isNoResult = true;
                       this.spinner.hide();
                  },
                  error => {
                      this.spinner.hide();
                      this.buildMessageModal('An error occurs when searching the commande data');
                  }
          );
      } else if(this.displayType === 'Nom'){
          this.searchCommandesResult = [];
          this.commandeService.searchCommandeByNom(this.nom).subscribe(
                  result => {
                      if(result && result != null){
                          this.searchCommandesResult = result;
                          this.isNoResult = false;
                          this.spinner.hide();
                          return;
                      }
                      this.isNoResult = true;
                      this.spinner.hide();
                  },
                  error => {
                      this.spinner.hide();
                      this.buildMessageModal('An error occurs when searching the commande data');
                  }
          );
      }
      this.isFormSubmitted = searchCommandeForm.submitted;
  }*/

    /**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
 /* buildMessageModal(msg: string){
    this.messageModal = msg;
    this.displayMessageModal = true;
  }

}*/
