import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <section class="first">
      <h1>Small test title</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad commodi debitis delectus eius, fugiat
        impedit iure laboriosam laborum magnam neque nobis obcaecati quasi qui rerum sed tempore veritatis
        voluptatibus!</p>
      <p>Culpa explicabo hic, maxime nemo non officia provident quam unde. Architecto consequatur cupiditate ducimus et,
        inventore iusto natus nemo officiis quod repellendus reprehenderit sequi similique sunt ut vero, voluptatibus
        voluptatum!</p>
    </section>

    <ngx-fancier [color]="'mediumpurple'"></ngx-fancier>

    <section class="second">
      <h1>Very very big title that goes very very large</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus iste natus sapiente voluptatum. Amet
        aspernatur deserunt, ea eius enim id, ipsam iure nesciunt nulla, quae quam reprehenderit repudiandae vitae?</p>
      <p>Ab ad asperiores aspernatur atque autem deserunt dolore earum eum excepturi, libero maiores nemo non odit
        perferendis, perspiciatis quibusdam rem repellat, repudiandae sint sunt. Corporis explicabo fugiat natus sint
        vel.</p>
    </section>
  `
})
export class AppComponent {
}
