import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitrexProductsComponent } from './bitrex-products.component';

describe('BitrexProductsComponent', () => {
  let component: BitrexProductsComponent;
  let fixture: ComponentFixture<BitrexProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitrexProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitrexProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
