import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Input from '../components/Input/Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {

  placeholder: 'e.g.: Seu Nome'

}

export const WithLabelAndPlaceholder = Template.bind({});

WithLabelAndPlaceholder.args = {
  label: 'Name',
  placeholder: 'e.g.: Seu Nome'

}

export const WithLabelAndContent = Template.bind({});

WithLabelAndContent.args = {
  label: 'Name',
  value: 'Seu Nome'

}

export const WithContent = Template.bind({});

WithContent.args = {

  value: 'Seu Nome'

}