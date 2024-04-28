import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefenseTokenService {

  private readonly apiUrl = 'https://armada.kevindornellas.me/DefenseToken';

  constructor(private http: HttpClient) { }

  getDefenseTokens(): Observable<any[]> {
    const googleIdToken = localStorage.getItem('googleId');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${googleIdToken}`);
    
    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
