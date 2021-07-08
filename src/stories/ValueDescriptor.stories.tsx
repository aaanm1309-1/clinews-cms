import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ValueDescriptor from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;


export const Default = Template.bind({});
Default.args = {
  description: 'Ganhos na Semana',
  value: 560322.02,
  isCurrency: false,
  color: 'default'

}

export const Primary = Template.bind({});
Primary.args = {
  description: 'Ganhos na Semana',
  value: 560322.02,
  isCurrency: false,
  color: 'primary'

}

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
  description: 'Ganhos na Semana',
  value: 560322.02,
  isCurrency: true,
  color: 'default'


}

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  description: 'Ganhos na Semana',
  value: 560322.02,
  isCurrency: true,
  color: 'primary'


}
