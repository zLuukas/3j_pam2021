import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubraMaisComponent } from './descubra-mais.component';

describe('DescubraMaisComponent', () => {
  let component: DescubraMaisComponent;
  let fixture: ComponentFixture<DescubraMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescubraMaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubraMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
