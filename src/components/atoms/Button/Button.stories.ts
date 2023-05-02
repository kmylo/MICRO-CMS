import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

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
    children: "Primary Button"
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
