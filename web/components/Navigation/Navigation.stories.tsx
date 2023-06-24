import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Navigation } from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Navigation>;

const Template: StoryFn<typeof Navigation> = () => <Navigation />;

export const Default = Template.bind({});
