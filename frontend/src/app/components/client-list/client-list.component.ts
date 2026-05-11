import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ClientService } from '../../services/client.service';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clients: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {

    this.getClients();
  }

  getClients() {

    this.clientService.getClients()
      .subscribe((data: any) => {

        this.clients = data;
      });
  }

  deleteClient(id: number) {

    this.clientService.deleteClient(id)
      .subscribe(() => {

        this.getClients();
      });
  }
}