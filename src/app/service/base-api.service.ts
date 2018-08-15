import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, take, retry, tap } from 'rxjs/operators';
import { HttpHeaderOptionsJson } from '../models/http/http-options.model';
import { HTTP_HEADER_GET } from './service.utils';

/**
 * Base API Service
 */
@Injectable()
export class ApiService {

  restApiBaseUrl: string = "assets/api";

  /**
   * Constructor
   * @param http injected httpclient
   */
  constructor(private http: HttpClient) { 
  }

  /**
   * Generic GET request
   * @param restUrl rest url
   */
  public get<T>(restUrl: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(this.restApiBaseUrl + restUrl, HTTP_HEADER_GET)
      .pipe(
        catchError(err => {
          console.log("Error occured, retrying..");
          throw 'Error Occured ' + err;
        }),
        retry(1)
      ); 
  }
  

}