import { Component, Input } from '@angular/core';

export type Type = 'checkbox' | 'radio' | 'text' | 'date';
export type Size = 'large' | 'small';

export type config = {
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
  /**
   * @ignore
   */
  @Input() configType: Type = 'checkbox';

  /**
   * @ignore
   */
  @Input() configLabel: string = '';

  /**
   * @ignore
   */
  @Input() configSize: Size = 'large';

  @Input() config: config = {
    type: this.configType,
    label: this.configLabel,
    size: this.configSize,
  };

  /**
   * @ignore
   */
  construtor() {
    this.configType = 'radio';
  }
}
