import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  errorMessage: string | null = null;

  constructor(private dragonballService: DragonballService) { }

  ngOnInit(): void {
    this.dragonballService.getCharacters().subscribe(
      (data: any) => {
        this.characters = data;
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}