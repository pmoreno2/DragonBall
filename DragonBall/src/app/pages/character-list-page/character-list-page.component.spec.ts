import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterListPageComponent } from './character-list-page.component';
import { DragonballService } from '../../services/dragonball.service';

describe('CharacterListPageComponent', () => {
  let component: CharacterListPageComponent;
  let fixture: ComponentFixture<CharacterListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, CharacterListPageComponent],
      providers: [DragonballService]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});