import type { Meta, StoryObj } from '@storybook/angular';

import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import PureInboxScreenComponent from './pure-inbox-screen.component';

import { TaskModule } from './task.module';
import { NgxsModule, Store } from '@ngxs/store';
import { importProvidersFrom } from '@angular/core';
import { TasksState } from '../states/task.state';

import { fireEvent, within } from '@storybook/testing-library';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),

    applicationConfig({
      providers: [Store, importProvidersFrom(NgxsModule.forRoot([TasksState]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};
export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    await fireEvent.click(canvas.getByLabelText('archiveTask-1').getElementsByTagName('span')[0]);
  },
};
