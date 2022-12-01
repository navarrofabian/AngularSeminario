import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitrexContactComponent } from './bitrex-contact.component';

describe('BitrexContactComponent', () => {
  let component: BitrexContactComponent;
  let fixture: ComponentFixture<BitrexContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitrexContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitrexContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
