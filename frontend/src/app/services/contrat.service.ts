import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private apiUrl = 'http://localhost:8085/api/contrats';

  constructor(private http: HttpClient) {}

  getContrats() {

    return this.http.get(this.apiUrl);
  }
}