import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from '../app/app.component';

const meta: Meta<AppComponent> = {
  title: 'Angular/Welcome Screen',
  component: AppComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    title: 'Compodoc',
  },
};

export default meta;
type Story = StoryObj<AppComponent>;

export const WelcomePage: Story = {
  args: {
    title: '',
  },
};
