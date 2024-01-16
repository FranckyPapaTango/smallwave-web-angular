import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Commande } from "../models/commande";
import { Typecommande } from 'src/app/models/typecommande';

@Injectable({
   providedIn: 'root'
})

export class CommandeService {

 // url: string = "http://localhost:8082/api/commande";
  url: string = "https://rafaros-it.fr/backend-smallwave/api/commande";

constructor(private http: HttpClient ){}

getCommandes(): Observable<Commande[]>{
return this.http.get<Commande[]>(this.url+"/getallcommande")  ;
}


  getTypecommandes(): Observable<Typecommande[]>{
    return this.http.get<Typecommande[]>(this.url+'/getalltypecommande');
  }


    obtenerCommande(id: number): Observable<Commande>{
      return this.http.get<Commande>(this.url+'/'+id);
    }

  crearCommande(commande: Commande): Observable<Commande>{
    return this.http.post<Commande>(this.url+'/createcommande', commande);
  }

  actualizarCommande(commande: Commande): Observable<Commande>{
    return this.http.put<Commande>(this.url+'/updatecommande/'+ commande.id, commande);
  }

    eliminarCommande(id: number): Observable<any>{
      return this.http.delete<any>(this.url+'/deletecommande/'+id)
    }
}
