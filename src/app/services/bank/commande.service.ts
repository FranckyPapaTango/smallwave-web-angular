/*import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Typecommande } from "src/app/models/typecommande";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Commande } from "src/app/models/commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

    constructor(private http: HttpClient) { } */
    
    /**
     * Get all commande's categories as reference data from Backend server.
     */
/*    loadCategories(): Observable<Typecommande[]>{
         let headers = new HttpHeaders();
         headers.append('content-type', 'application/json');
         headers.append('accept', 'application/json');
         return this.http.get<Typecommande[]>('/library/rest/typecommande/api/allCategories', {headers: headers});
     }*/
     
    /**
     * Save a new Commande object in the Backend server data base.
     * @param commande
     */
 /*    saveCommande(commande: Commande): Observable<Commande>{
         return this.http.post<Commande>('/library/rest/commande/api/addCommande', commande);
     }*/
     
     /**
      * Update an existing Commande object in the Backend server data base.
      * @param commande
      */
  /*    updateCommande(commande: Commande): Observable<Commande>{
          return this.http.put<Commande>('/library/rest/commande/api/updateCommande', commande);
      }*/
      
      /**
       * Delete an existing Commande object in the Backend server data base.
       * @param commande
       */
  /*     deleteCommande(commande: Commande): Observable<string>{
           return this.http.delete<string>('/library/rest/commande/api/deleteCommande/'+commande.id_commande);
       }*/
     
     /**
      * Search commandes by email
      * @param email
      */
 /*    searchCommandeByEmail(email: string): Observable<Commande>{
         return  this.http.get<Commande>('/library/rest/commande/api/searchByEmail?email='+email);
     }*/
     
    /**
     * Search commandes by nom
     * @param nom
     */
   /*  searchCommandeByNom(nom: string): Observable<Commande[]>{
             return this.http.get<Commande[]>('/library/rest/commande/api/searchByNom?nom='+nom);
     }
}*/