
import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { ClientListComponent } from './components/client-list/client-list.component';

import { ContratListComponent } from './components/contrat-list/contrat-list.component';

import { PaiementListComponent } from './components/paiement-list/paiement-list.component';

export const routes: Routes = [

  { path: '', component: LoginComponent },

  { path: 'clients', component: ClientListComponent },

  { path: 'contrats', component: ContratListComponent },

  { path: 'paiements', component: PaiementListComponent }
];