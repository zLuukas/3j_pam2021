import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoFaturaComponent } from './resumo-fatura.component';

describe('ResumoFaturaComponent', () => {
  let component: ResumoFaturaComponent;
  let fixture: ComponentFixture<ResumoFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoFaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
