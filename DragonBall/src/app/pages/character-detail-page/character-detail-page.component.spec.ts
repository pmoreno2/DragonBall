import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterDetailPageComponent } from './character-detail-page.component';
import { DragonballService } from '../../services/dragonball.service';

describe('CharacterDetailPageComponent', () => {
  let component: CharacterDetailPageComponent;
  let fixture: ComponentFixture<CharacterDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, CharacterDetailPageComponent],
      providers: [DragonballService]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});