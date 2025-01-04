import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterListPageComponent } from './pages/character-list-page/character-list-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CalendarioPageComponent } from './pages/calendario-page/calendario-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personajes', component: CharacterListPageComponent },
  { path: 'personajes/:id', component: CharacterDetailPageComponent }, // Asegúrate de que esta ruta esté configurada correctamente
  { path: 'calendario', component: CalendarioPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent } // Ruta comodín para manejar rutas no encontradas
];