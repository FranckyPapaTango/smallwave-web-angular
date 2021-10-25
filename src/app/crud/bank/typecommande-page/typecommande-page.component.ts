/*import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Typecommande } from 'src/app/models/bank/typecommande';
import { TypecommandeService } from 'src/app/services/bank/typecommande.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-typecommande-page',
  templateUrl: './typecommande-page.component.html',
  styleUrls: ['./typecommande-page.component.scss']
})
export class TypecommandePageComponent implements OnInit {
    
    public types = [ 'Libelletype'];//types de recherche "par"
    public displayType: string = 'Libelletype'//type de recherche par défaut
    public libelletype: string;
    public headsTab = ['LIBELLE TYPE'];
    public isNoResult: boolean = true;
    public isFormSubmitted: boolean = false;
    public actionButton: string = 'Save';
    public titleSaveOrUpdate: string = 'Add New Typecommande Form';
    public messageModal: string;
    public displayMessageModal: boolean = false;
    
    public typecommande = new Typecommande();
    public searchTypecommandesResult: Typecommande[] = [];
    
  constructor(private typecommandeService: TypecommandeService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }*/
  
 
 /**
  * Method that save in the Backend server,
  *  a new typecommande data retreived from the form
  * @param addTypecommandeForm
  */
 /*saveOrUpdateTypecommande(addTypecommandeForm: NgForm){
      this.displayMessageModal = false;
      if(!addTypecommandeForm.valid){
        this.buildMessageModal('Error in the form');
      }
      if(this.actionButton && this.actionButton === 'Save'){
          this.saveNewTypecommande(this.typecommande);
      }else if(this.actionButton && this.actionButton === 'Update'){
          this.updateTypecommande(this.typecommande);
      }
      this.titleSaveOrUpdate = 'Add New Typecommande Form';
      this.actionButton = 'Save';
  }*/
  
 /**
  * Save new typecommande
  * @param typecommande
  */
 /* saveNewTypecommande(typecommande: Typecommande){
      this.spinner.show();
      this.typecommandeService.saveTypecommande(typecommande).subscribe(
              (result: Typecommande) => {
                 if(result.id_typecommande){
                     this.spinner.hide();
                     this.buildMessageModal('Save operation correctly done');
                 }
              },
              error => {
                  this.spinner.hide();
                  this.buildMessageModal('An error occurs when saving the typecommande data');
              }
      );
  }*/
  
  /**
   * Update an existing typecommande
   * @param typecommande
   */
 /*  updateTypecommande(typecommande: Typecommande){
       this.spinner.show();
       this.typecommandeService.updateTypecommande(typecommande).subscribe(
               (result: Typecommande) => {
                  if(result.id_typecommande){
                      this.updateResearchTypecommandeTab(typecommande);
                      this.spinner.hide();
                      this.buildMessageModal('Update operation correctly done');
                  }
               },
               error => {
                this.spinner.hide();
                this.buildMessageModal('An error occurs when updating the typecommande data');
               }
       );
   }*/

   /**
    * Update in the list tab, the typecommande that has been updated
    * @param typecommande 
    */
  /* updateResearchTypecommandeTab(typecommande: Typecommande){
        let index : number = 0; 
        if(this.searchTypecommandesResult && this.searchTypecommandesResult.length > 0){
            this.searchTypecommandesResult.forEach(element => {
                if(element.id_typecommande == typecommande.id_typecommande){
                    this.searchTypecommandesResult.splice(index, 1, typecommande);
            
                }
                index++;
            });
        }
   }*/
   
   /**
    * Delete an existing typecommande
    * @param typecommande
    */
 /*   deleteTypecommande(typecommande: Typecommande){
        this.spinner.show();
        this.displayMessageModal = false;
        this.typecommandeService.deleteTypecommande(typecommande).subscribe(
                result => {
                    for( var i = 0; i < this.searchTypecommandesResult.length; i++){ 
                        if ( this.searchTypecommandesResult[i].id_typecommande === typecommande.id_typecommande) {
                            this.searchTypecommandesResult.splice(i, 1); 
                        }
                    }
                    this.spinner.hide();
                    this.buildMessageModal('End of delete operation');
                    if(this.searchTypecommandesResult.length == 0){
                        this.isNoResult = true;
                    }
                });
    }*/
  
  /**
   * Set the selected typecommande as the typecommande to be updated
   * @param typecommande
   */
/*   setUpdateTypecommande(typecommande: Typecommande){
       this.titleSaveOrUpdate = 'Update Typecommande Form';
       this.actionButton = 'Update';
       this.typecommande = Object.assign({}, typecommande);
   }*/
   
 /**
  * Erase all data from this NgForm.
  * @param addTypecommandeForm
  */
/*  clearForm(addTypecommandeForm: NgForm){
      addTypecommandeForm.form.reset(); 
      this.displayMessageModal = false;
  }*/
  
 /**
  * Search typecommandes by title or by isbn
  * @param searchTypecommandeForm
  */
 /* searchTypecommandesByType(searchTypecommandeForm){
      this.spinner.show();
      this.displayMessageModal = false;
      if(!searchTypecommandeForm.valid){
        this.buildMessageModal('Error in the form');
      }
      if(this.displayType === 'Libelletype'){
          this.searchTypecommandesResult = [];
          this.typecommandeService.searchTypecommandeByLibelletype(this.libelletype).subscribe(
                  result => {
                      if(result && result != null){
                          this.searchTypecommandesResult.push(result);
                          this.isNoResult = false;
                          this.spinner.hide();
                          return;
                       }
                       this.isNoResult = true;
                       this.spinner.hide();
                  },
                  error => {
                      this.spinner.hide();
                      this.buildMessageModal('An error occurs when searching the typecommande data');
                  }
          );
      } 
      this.isFormSubmitted = searchTypecommandeForm.submitted;
  }*/

    /**
   * Construit le message à afficher suite à une action utilisateur.
   * @param msg 
   */
/*  buildMessageModal(msg: string){
    this.messageModal = msg;
    this.displayMessageModal = true;
  }

}*/

