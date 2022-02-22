import React from 'react';

import Input_Text from './input_text';
import { screen, userEvent } from '@storybook/testing-library';

export default {
  value:"lable",
  handleChange:null
};

const Template = args => <>
<p>{args.value}</p>
<Input_Text {...args} />
</>;

export const Default = Template.bind({});
Default.play= async ()=>{
    const emailInput = screen.getByTestId("rawText",{
        selector: 'input',
    })
    await userEvent.type(emailInput, 'testvalue', {
        delay: 100,
      });
}
Default.args = {
    value:"Display",

};
