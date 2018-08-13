import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take, retry, tap } from 'rxjs/operators';


@Injectable()
export class ApiService {

  restApiBaseUrl: string = "assets/api";

  /**
   * Constructor
   * @param http 
   */
  constructor(private http: HttpClient) { 
  }

  /**
   * Generic GET request
   * @param restUrl 
   */
  public get<T>(restUrl: string): Observable<T> {
    return this.http.get<T>(this.restApiBaseUrl + restUrl)
      .pipe(
        catchError(err => {
          console.log("Error occured, retrying..");
          throw 'Error Occured ' + err;
        }),
        retry(1)
      ); 
  }
  

}