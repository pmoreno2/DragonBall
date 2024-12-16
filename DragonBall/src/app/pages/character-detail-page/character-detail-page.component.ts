import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CharacterDetailPageComponent implements OnInit {
  character: any;

  constructor(
    private dragonballService: DragonballService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dragonballService.getCharacterById(+id).subscribe(
        (data: any) => {
          this.character = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}