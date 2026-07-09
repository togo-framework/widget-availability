import type { Meta, StoryObj } from "@storybook/react";
import { Availability } from "./index";

const meta = { title: "Widgets/Availability", component: Availability } satisfies Meta<typeof Availability>;
export default meta;

export const Default: StoryObj<typeof Availability> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Availability> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
