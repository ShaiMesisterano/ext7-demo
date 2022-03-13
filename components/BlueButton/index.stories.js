import React from 'react';

import BlueButton from '../BlueButton';

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

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_PINNED',
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: 'TASK_ARCHIVED',
//   },
// };