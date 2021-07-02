import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseSectionLayoutComponent } from './response-section-layout.component';

describe('ResponseSectionLayoutComponent', () => {
  let component: ResponseSectionLayoutComponent;
  let fixture: ComponentFixture<ResponseSectionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseSectionLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseSectionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
