import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const meta: Meta<typeof Button> = {
//   title: 'Example/Button',
//   component: Button,
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   // argTypes: {
//   //   backgroundColor: { control: 'color' },
//   // },
// };

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;
type ButtonStory = StoryObj<ButtonProps>;

export const Primary: ButtonStory = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: ButtonStory = {
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
};

export const Link: ButtonStory = {
  args: {
    variant: "link",
    children: "Link Button"
  }
};
