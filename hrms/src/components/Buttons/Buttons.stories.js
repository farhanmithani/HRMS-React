import React from 'react';

import Buttons from './Buttons';

export default {
    component: Buttons,
    title: 'Buttons',
  };
  const Template = args => <Buttons {...args} />;

  export const Default = Template.bind({});
  Default.args = {
    lable:"Button",
    colors:"success",
    type:"contained",
    plus:false,

};