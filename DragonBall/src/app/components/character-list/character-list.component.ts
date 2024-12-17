import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service';
//import {routerModule} from '@angular/router';

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
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private dragonballService: DragonballService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentPage = +params['page'] || 1;
      this.loadCharacters();
    });
  }

  loadCharacters(): void {
    this.dragonballService.getCharacters(this.currentPage).subscribe(
      (data: any) => {
        this.characters = data.items;
        this.totalPages = data.meta.totalPages;
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }

  goToPage(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge'
    });
  }

  goToCharacterDetail(id: number): void {
    this.router.navigate(['/personajes', id]);
  }
}