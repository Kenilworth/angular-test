import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  /** GET peoples from the server */
  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('http://dev.api.fooddocs.ee/testtask')
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(operation, error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
