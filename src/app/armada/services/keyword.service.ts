import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Keyword} from '../models/keyword'

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  private readonly apiUrl = 'https://armada.kevindornellas.me/Keyword/';

  constructor(private http: HttpClient) { }

  getKeywords(): Observable<any[]> {
    const googleIdToken = localStorage.getItem('googleId');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${googleIdToken}`);
    
    return this.http.get<any[]>(this.apiUrl, { headers });
  }
  
  createKeyword(keyword:Keyword): Observable<any[]> {
    const googleIdToken = localStorage.getItem('googleId');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${googleIdToken}`);
    
    return this.http.post<any[]>(this.apiUrl, keyword, { headers });
  }
}
