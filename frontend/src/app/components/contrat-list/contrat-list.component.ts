import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ContratService } from '../../services/contrat.service';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-contrat-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './contrat-list.component.html'
})
export class ContratListComponent implements OnInit {

  contrats: any[] = [];

  constructor(private contratService: ContratService) {}

  ngOnInit(): void {

    this.contratService.getContrats()
      .subscribe((data: any) => {

        this.contrats = data;
      });
  }
}