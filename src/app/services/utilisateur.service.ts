import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Utilisateur } from "../models/utilisateur";
/*HttpResponse class(in @angular/common/http) is a replace of class Response of @angular/http(which is deprecated).*/
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  //url: string = "http://localhost:8082/api/utilisateur";
  url: string = "https://rafaros-it.fr/backend-smallwave/api/utilisateur";
constructor(private http: HttpClient ){}

getUtilisateurs(): Observable<Utilisateur[]>{
return this.http.get<Utilisateur[]>(this.url+"/getallutilisateur")  ;
}




    obtenerUtilisateur(id: number): Observable<Utilisateur>{
      return this.http.get<Utilisateur>(this.url+'/'+id);
    }

  crearUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.url+'/createutilisateur', utilisateur);
  }

  actualizarUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.put<Utilisateur>(this.url+'/updateutilisateur/'+ utilisateur.id, utilisateur);
  }

    eliminarUtilisateur(id: number): Observable<any>{
      return this.http.delete<any>(this.url+'/deleteutilisateur/'+id)
    }

   getuserwithloginandpassword(login: string, password: string) : Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.url+'/getuserwithloginandpassword'+ login+','+ password);
    }


}
