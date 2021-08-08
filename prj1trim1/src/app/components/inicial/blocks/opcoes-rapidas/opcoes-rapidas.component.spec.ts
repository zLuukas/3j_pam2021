import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesRapidasComponent } from './opcoes-rapidas.component';

describe('OpcoesRapidasComponent', () => {
  let component: OpcoesRapidasComponent;
  let fixture: ComponentFixture<OpcoesRapidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesRapidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoesRapidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
