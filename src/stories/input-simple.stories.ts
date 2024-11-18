import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../app/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'BNOTK related/Simple @Inputs()',
  component: InputComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Input: Story = {};
