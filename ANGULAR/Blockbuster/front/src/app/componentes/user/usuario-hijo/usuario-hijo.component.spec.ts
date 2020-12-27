import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHijoComponent } from './usuario-hijo.component';

describe('UsuarioHijoComponent', () => {
  let component: UsuarioHijoComponent;
  let fixture: ComponentFixture<UsuarioHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
