import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Typecommande } from "../models/typecommande";

@Injectable({
   providedIn: 'root'
})

export class TypecommandeService {

//  url: string = "http://localhost:8082/api/typecommande";
  url: string = "https://rafaros-it.fr/backend-smallwave/api/typecommande";
constructor(private http: HttpClient ){}

getTypecommandes(): Observable<Typecommande[]>{
return this.http.get<Typecommande[]>(this.url+"/getalltypecommande")  ;
}


}
