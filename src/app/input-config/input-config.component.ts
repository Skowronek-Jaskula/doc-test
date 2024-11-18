import { Component, Input } from '@angular/core';

export type config = {
  type?: 'checkbox' | 'radio' | 'text' | 'date';
  label: string;
};
@Component({
  selector: 'app-input-config',
  standalone: true,
  imports: [],
  templateUrl: './input-config.component.html',
  styleUrl: './input-config.component.scss',
})
export class InputConfigComponent {
  /**
   * @ignore
   */
  @Input() configType: 'checkbox' | 'radio' = 'checkbox';

  /**
   * @ignore
   */
  @Input() configLabel: string = '';

  @Input() config: config = {
    type: this.configType,
    label: this.configLabel,
  };

  /**
   * @ignore
   */
  construtor() {
    this.configType = 'radio';
  }
}
