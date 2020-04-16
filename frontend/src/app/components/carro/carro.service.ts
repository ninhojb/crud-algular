import { map, catchError } from 'rxjs/operators';
import { Observable , EMPTY} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Carros } from './carro.model';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  baseUrl = "http://localhost:3001/carros"

  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient){ }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  
  create(carro: Carros): Observable<Carros> {
    return this.http.post<Carros>(this.baseUrl, carro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Carros[]> {
    return this.http.get<Carros[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  readById(id:number): Observable<Carros> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Carros>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(carro: Carros): Observable<Carros> {
    const url = `${this.baseUrl}/${carro.id}`;
    return this.http.put<Carros>(url, carro).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Carros> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Carros>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
