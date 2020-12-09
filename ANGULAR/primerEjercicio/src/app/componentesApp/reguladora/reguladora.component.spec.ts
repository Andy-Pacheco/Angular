import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguladoraComponent } from './reguladora.component';

describe('ReguladoraComponent', () => {
  let component: ReguladoraComponent;
  let fixture: ComponentFixture<ReguladoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReguladoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReguladoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
