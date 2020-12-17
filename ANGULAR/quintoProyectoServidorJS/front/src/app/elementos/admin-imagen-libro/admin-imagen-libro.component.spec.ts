import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImagenLibroComponent } from './admin-imagen-libro.component';

describe('AdminImagenLibroComponent', () => {
  let component: AdminImagenLibroComponent;
  let fixture: ComponentFixture<AdminImagenLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImagenLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImagenLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
