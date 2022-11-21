import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vakcina, VakcinaZoznam} from "./app/models/vakcina.model";

@Injectable({
  providedIn: 'root'
})
export class VakcinaService {

  private apiUrl = 'http://backend:8080/api/vakcina'

  constructor(private http: HttpClient) { }

  getVakciny(): Observable<VakcinaZoznam[]>{
    return this.http.get<VakcinaZoznam[]>(`${this.apiUrl}`);
  }

  getVakcina(vakcinaId: number): Observable<Vakcina>{
    return this.http.get<Vakcina>(`${this.apiUrl}/${vakcinaId}`);
  }

  createVakcina(vakcina: Vakcina): Observable<Vakcina>{
    return this.http.post<Vakcina>(`${this.apiUrl}`, vakcina);
  }

  deleteVakcina(vakcinaId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${vakcinaId}`);
  }

  updateVakcina(vakcinaId: number, vakcina: Vakcina): Observable<Vakcina>{
    return this.http.put<Vakcina>(`${this.apiUrl}/${vakcinaId}`, vakcina);
  }
}
