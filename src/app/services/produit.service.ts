import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Produit } from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url: string = "http://localhost:8080/api/produit";

constructor(private http: HttpClient ){}

getProduits(): Observable<Produit[]>{
return this.http.get<Produit[]>(this.url+"/getallproduit")  ;
   }

}
