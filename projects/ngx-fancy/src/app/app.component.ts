import { Component } from '@angular/core';
import { NgxFancierComponent } from 'ngx-fancier';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxFancierComponent],
  styleUrl: './app.component.scss',
  template: `
    <section class="first">
      <h1>Default wave</h1>
      <p>No inputs — uses <code>currentColor</code> and 120px height.</p>
    </section>

    <ngx-fancier color="mediumpurple" />

    <section class="second">
      <h1>Flipped wave</h1>
      <p>The same separator with <code>flip</code> input set to true.</p>
    </section>

    <ngx-fancier color="steelblue" [flip]="true" />

    <section class="third">
      <h1>Custom height</h1>
      <p>Using <code>height="200px"</code> for a taller wave.</p>
    </section>

    <ngx-fancier color="steelblue" height="200px" />

    <section class="fourth">
      <h1>End</h1>
    </section>
  `
})
export class AppComponent {}
