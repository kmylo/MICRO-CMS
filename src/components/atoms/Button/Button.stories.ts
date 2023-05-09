import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/atoms/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;
type ButtonStory = StoryObj<ButtonProps>;

export const Default: ButtonStory = {
  args: {
    children: "Button"
  }
};

export const Primary: ButtonStory = {
  args: {
    variant: "primary",
    // children: "Primary Button"
    children: `Primary ${Default?.args?.children}`
  }
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
