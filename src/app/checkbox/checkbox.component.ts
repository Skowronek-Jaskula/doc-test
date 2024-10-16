import { Component, Input } from '@angular/core';

export type config = {
  size?: string;
  type?: 'checkbox' | 'radio';
  label: string;
};
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() config: config = {
    size: 'large',
    type: 'checkbox',
    label: 'insert label',
  };
}
