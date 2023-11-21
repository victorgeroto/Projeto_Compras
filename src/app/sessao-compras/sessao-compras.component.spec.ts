import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoComprasComponent } from './sessao-compras.component';

describe('SessaoComprasComponent', () => {
  let component: SessaoComprasComponent;
  let fixture: ComponentFixture<SessaoComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessaoComprasComponent]
    });
    fixture = TestBed.createComponent(SessaoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
