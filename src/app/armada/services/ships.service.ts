import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../models/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private readonly apiUrl = 'https://armadabackend-prod.us-west-2.elasticbeanstalk.com/Ship/';

  constructor(private http: HttpClient) { }

  getShipsByFaction(faction): Observable<any[]> {
    const googleIdToken = localStorage.getItem('googleId');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${googleIdToken}`);
    
    return this.http.get<any[]>(this.apiUrl + 'faction/'+ faction, { headers });
  }
  createShip(ship:Ship): Observable<any[]> {
    const googleIdToken = localStorage.getItem('googleId');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${googleIdToken}`);
    
    return this.http.post<any[]>(this.apiUrl, ship, { headers });
  }
}
