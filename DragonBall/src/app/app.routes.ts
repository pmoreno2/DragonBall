import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personajes', component: CharacterListPageComponent },
  { path: '**', component: NotFoundComponent } // Ruta comodín para manejar rutas no encontradas
];