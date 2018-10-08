import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { catchError, take, retry, tap } from 'rxjs/operators';
import { ApiService } from './base-api.service';
import { User } from '../models/user/user.model';
import { environment } from '../../environments/environment';

/**
 * Search Service
 */
@Injectable()
export class SearchService {

  githubBaseApi: string = "github";
  
  constructor() { }
}