import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dialog } from '../components/dialog';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    option: 'Example/Dialog',
  component: Dialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;


export const BasicDialog = Template.bind({});

BasicDialog.args = {
 
  title: 'Práctica Final de Modulo 7',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  buttonText: 'Abrir Dialog',
  buttonModal:'Ver mas',
  buttonLink:"https://www.opinion.com.bo/"
  
};