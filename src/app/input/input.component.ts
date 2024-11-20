import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: '../styles.scss',
})
export class InputComponent {
  @Input() size?: 'large' | 'small';
  @Input() type?: 'checkbox' | 'radio' | 'text' | 'date';
  @Input() label?: string;
}
