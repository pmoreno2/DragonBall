import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
  export class DragonballService {
    private apiUrl = 'https://dragonball-api.com/api';
  
    constructor(private http: HttpClient) {}
  
    getCharacters(): Observable<any[]> {
      return this.http.get<any>(`${this.apiUrl}/characters`).pipe(
        map(response =>response.items),
        catchError(this.handleError)
      );
    }
    private handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
  }