import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() size?: 'large' | 'small';
  @Input() type?: 'text' | 'date';
  @Input() label?: string;
}
