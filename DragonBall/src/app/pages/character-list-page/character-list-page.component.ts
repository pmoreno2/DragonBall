import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../../components/character-list/character-list.component';

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.scss'],
  standalone: true,
  imports: [CommonModule, CharacterListComponent]
})
export class CharacterListPageComponent {}