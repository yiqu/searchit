import { HttpHeaderOptionsJson } from '../models/http/http-options.model';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';

// Http Options for GET
export const HTTP_HEADER_GET: HttpHeaderOptionsJson = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'token'
  }),
  observe: "response",
  reportProgress: false,
  responseType: "json"
};

// Http Optipns for POST
export const HTTP_HEADER_POST = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'token'
  })
};