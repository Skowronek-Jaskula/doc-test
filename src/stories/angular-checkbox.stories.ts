import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from '../app/checkbox/checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Angular/Checkbox',
  component: CheckboxComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Checkbox: Story = {};
