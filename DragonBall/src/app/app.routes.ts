import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personajes', component: CharacterListPageComponent },
  { path: 'personajes/:id', component: CharacterDetailPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' } // Ruta comodín para manejar rutas no encontradas
];