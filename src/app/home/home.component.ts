import { Component } from '@angular/core';

@Component({
  selector: 'bot-home',
  template: `
    <p class="red">
      Inline home works!
    </p>`,
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class HomeComponent {

}
