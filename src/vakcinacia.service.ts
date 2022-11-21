import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vakcinacia, VakcinaciaZoznam} from "./app/models/vakcinacia.model";

@Injectable({
  providedIn: 'root'
})
export class VakcinaciaService {
  private apiUrl = 'http://backend:8080/api/vakcinacie';

  constructor(private http: HttpClient) { }

  createVakcinacia(vakcinacia: Vakcinacia): Observable<Vakcinacia> {
    return this.http.post<Vakcinacia>(`${this.apiUrl}`, vakcinacia);
  }

  getVakcinacie(): Observable<VakcinaciaZoznam[]> {
    return this.http.get<VakcinaciaZoznam[]>(`${this.apiUrl}`);
  }

  deleteVakcinacia(vakcinaciaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${vakcinaciaId}`);
  }


}
