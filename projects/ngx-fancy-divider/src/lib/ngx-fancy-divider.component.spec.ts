import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxFancyDividerComponent} from './ngx-fancy-divider.component';

describe('NgxFancyDividerComponent', () => {
  let component: NgxFancyDividerComponent;
  let fixture: ComponentFixture<NgxFancyDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFancyDividerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFancyDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
