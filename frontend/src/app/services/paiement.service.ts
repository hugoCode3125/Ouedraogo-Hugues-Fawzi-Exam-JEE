import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private apiUrl = 'http://localhost:8085/api/paiements';

  constructor(private http: HttpClient) {}

  getPaiements() {

    return this.http.get(this.apiUrl);
  }
}