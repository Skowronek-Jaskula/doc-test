import { Component, Input } from '@angular/core';

export type config = {
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
  /**
   * @ignore
   */
  @Input() configType: 'checkbox' | 'radio' = 'checkbox';

  /**
   * @ignore
   */
  @Input() configLabel: string = 'Label';

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
