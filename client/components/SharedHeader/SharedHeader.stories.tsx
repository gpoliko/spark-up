import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SharedHeader } from './SharedHeader';

export default {
  title: 'SharedHeader',
  component: SharedHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof SharedHeader>;

const Template: StoryFn<typeof SharedHeader> = () => <SharedHeader />;

export const Default = Template.bind({});
