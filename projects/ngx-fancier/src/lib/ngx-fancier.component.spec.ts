import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxFancierComponent} from './ngx-fancier.component';

describe('NgxFancierComponent', () => {
  let component: NgxFancierComponent;
  let fixture: ComponentFixture<NgxFancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxFancierComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
