import { Component, Input } from '@angular/core';

export type Type = 'checkbox' | 'radio' | 'text' | 'date';
export type Size = 'large' | 'small';

export type Config = {
  type: Type;
  label: string;
  size: Size;
};
@Component({
  selector: 'app-input-config',
  standalone: true,
  imports: [],
  templateUrl: './input-config.component.html',
  styleUrl: '../styles.scss',
})
export class InputConfigComponent {
  @Input() config!: Config;
}
