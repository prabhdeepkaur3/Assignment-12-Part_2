import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} as Meta;

const Template: StoryFn = (args) => <Dropdown options={[]} onChange={function (value: string): void {
  throw new Error('Function not implemented.');
} } {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  onChange: (value: string) => console.log('Selected value:', value),
  backgroundColor: '#ffffff', 
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  onChange: (value: string) => console.log('Selected value:', value),
  disabled: true,
  backgroundColor: '#f0f0f0', 
};
