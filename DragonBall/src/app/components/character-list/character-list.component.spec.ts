import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CharacterListComponent } from './character-list.component';
import { DragonballService } from '../../services/dragonball.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let httpTestingController: HttpTestingController;
  let dragonballService: DragonballService;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CharacterListComponent, RouterTestingModule],
      providers: [
        DragonballService,
        { provide: ActivatedRoute, useValue: { queryParams: of({ page: '1' }) } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
      //schemas: [NO_ERRORS_SCHEMA]//PEDRO
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    dragonballService = TestBed.inject(DragonballService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    const req = httpTestingController.expectOne('https://dragonball-api.com/api/characters?page=1');
    req.flush({ items: [], meta: { totalPages: 0 } }); // Respuesta vacía simulada
    expect(component).toBeTruthy();
  });

  it('should load characters on init', () => {
    const mockResponse = {
      items: [
        { id: 1, name: 'Goku', ki: '60.000.000', maxKi: '90 Septillion', race: 'Saiyan', gender: 'Male', description: 'El protagonista de la serie', image: 'https://dragonball-api.com/characters/goku_normal.webp' }
      ],
      meta: { totalPages: 6 }
    };

    const req = httpTestingController.expectOne('https://dragonball-api.com/api/characters?page=1');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);

    expect(component.characters.length).toBe(1);
    expect(component.totalPages).toBe(6);
  });

  // Add other tests here...
});