import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { KnowComponent } from './pages/know/know.component';
import { ContacsComponent } from './pages/contacs/contacs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'reservas',
    component: KnowComponent,
  },
  {
    path: 'contacto',
    component: ContacsComponent,
  },
  { path: '**', redirectTo: '' },
];
