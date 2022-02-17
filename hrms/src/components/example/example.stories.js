import React from 'react';

import Example from './example';

export default {
  component: Example,
  title: 'example',
};

const Template = args => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
    text:"hello",
};
