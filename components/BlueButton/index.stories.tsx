import React from 'react';

import BlueButton from '.';

export default {
  component: BlueButton,
  title: 'BlueButton',
};

const Template = args => <BlueButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor: 'lightGreen',
  suffix: '!!!',
};