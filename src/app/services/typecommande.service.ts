import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Typecommande } from "../models/typecommande";

@Injectable({
   providedIn: 'root'
})

export class TypecommandeService {

  url: string = "http://localhost:8080/api/typecommande";

constructor(private http: HttpClient ){}

getTypecommandes(): Observable<Typecommande[]>{
return this.http.get<Typecommande[]>(this.url+"/getalltypecommande")  ;
}


}
