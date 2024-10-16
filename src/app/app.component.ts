import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const components = [InputComponent, CheckboxComponent];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'doc-test';
}
