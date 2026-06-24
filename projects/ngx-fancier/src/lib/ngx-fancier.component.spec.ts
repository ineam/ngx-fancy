import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFancierComponent } from './ngx-fancier.component';

describe('NgxFancierComponent', () => {
  let component: NgxFancierComponent;
  let fixture: ComponentFixture<NgxFancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFancierComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxFancierComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an SVG element', () => {
    const svg: HTMLElement = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('should render 3 path elements', () => {
    const paths = fixture.nativeElement.querySelectorAll('path');
    expect(paths.length).toBe(3);
  });

  it('should apply default color (currentColor) to paths', () => {
    const paths: NodeListOf<SVGPathElement> = fixture.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      expect(path.style.fill.toLowerCase()).toBe('currentcolor');
    });
  });

  it('should apply custom color input to all paths', async () => {
    fixture.componentRef.setInput('color', 'mediumpurple');
    await fixture.whenStable();
    const paths: NodeListOf<SVGPathElement> = fixture.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      expect(path.style.fill).toBe('mediumpurple');
    });
  });

  it('should apply default height of 120px to SVG', () => {
    const svg: SVGElement = fixture.nativeElement.querySelector('svg');
    expect(svg.style.height).toBe('120px');
  });

  it('should apply custom height input to SVG', async () => {
    fixture.componentRef.setInput('height', '200px');
    await fixture.whenStable();
    const svg: SVGElement = fixture.nativeElement.querySelector('svg');
    expect(svg.style.height).toBe('200px');
  });

  it('should not have flipped class by default', () => {
    const svg: SVGElement = fixture.nativeElement.querySelector('svg');
    expect(svg.classList.contains('flipped')).toBe(false);
  });

  it('should add flipped class when flip input is true', async () => {
    fixture.componentRef.setInput('flip', true);
    await fixture.whenStable();
    const svg: SVGElement = fixture.nativeElement.querySelector('svg');
    expect(svg.classList.contains('flipped')).toBe(true);
  });
});
