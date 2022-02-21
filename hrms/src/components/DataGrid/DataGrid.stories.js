import React from 'react';

import DataGrid from './DataGrid';

export default {
  component:DataGrid,
  title: 'DataGrid',
};

const Template = args => <DataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows:[
        {
            "id":1,
           "name":'Frozen yoghurt',
           "wight": 159,
            "height":6.0, 
        },
        {
            "id":1,
           "name":'Frozen yoghurt',
           "wight": 159,
            "height":6.0, 
        },{
            "id":1,
           "name":'Frozen yoghurt',
           "wight": 159,
            "height":6.0, 
        }
    ],
    column:["ID","Name","Weight","Height"]

};
