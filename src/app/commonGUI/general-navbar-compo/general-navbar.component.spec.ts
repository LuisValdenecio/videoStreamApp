import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralNavbarComponent } from './general-navbar.component';

describe('GeneralNavbarComponent', () => {
  let component: GeneralNavbarComponent;
  let fixture: ComponentFixture<GeneralNavbarComponent>;
  let bannerElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bannerElement = fixture.nativeElement;
  });

  it('professor and videos should be the only core navelements', () => {
    const navElemnts = bannerElement.querySelectorAll('.navbar-start .navbar-item');

    // navelement one
    expect(navElemnts[0].textContent).toEqual('Professores');
    // navelement two
    expect(navElemnts[1].querySelector('.navbar-link').textContent).toEqual('Vídeos');
  });

  it('Aulas and Curso de férias should be the two subelemnts of videos', () => {
    const subNavElemnts = bannerElement.querySelectorAll('.navbar-dropdown .navbar-item');

    // subnavelement one
    expect(subNavElemnts[0].textContent).toEqual('Aulas');
    // subnavelemnt two
    expect(subNavElemnts[1].textContent).toEqual('Curso de férias');

  });

  it('criar conta and entrar should be the only 2 bttons', () => {
    const buttons = bannerElement.querySelectorAll('.button');

    // button one
    expect(buttons[0].textContent).toEqual('Criar conta');
    // button two
    expect(buttons[1].textContent).toEqual('Entrar');

  });

});
