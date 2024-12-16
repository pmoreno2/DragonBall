import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.scss'],
  standalone: true,
  imports: [CommonModule, CharacterListComponent]
})
export class CharacterListPageComponent implements OnInit {
  totalPages: number = 1;

  constructor(
    private dragonballService: DragonballService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dragonballService.getCharacters().subscribe(
      (data: any) => {
        this.totalPages = data.meta.totalPages;
        this.route.queryParams.subscribe(params => {
          const page = +params['page'] || 1;
          if (page > this.totalPages || page < 1) {
            this.router.navigate(['/404']);
          }
        });
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}