import type { Meta, StoryObj } from '@storybook/angular';
import { InputConfigComponent } from '../app/input-config/input-config.component';

const meta: Meta<InputConfigComponent> = {
  title: 'BNOTK related/Configurable @Input()',
  component: InputConfigComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<InputConfigComponent>;

export const InputConfigStory: Story = {
  name: 'Input - Configurable @Input()',
};
