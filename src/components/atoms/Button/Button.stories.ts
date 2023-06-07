import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/atoms/Button",
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample" //this is a sample
    }
  },
  component: Button,
  tags: ["autodocs"]
};

export default meta;
type ButtonStory = StoryObj<ButtonProps>;

export const Default: ButtonStory = {
  args: {
    children: "Button",
    onClick: () => {
      console.log("Button clicked");
    }
  }
};
export const Disabled: ButtonStory = {
  args: {
    // variant: "primary",
    children: "Disabled Button",
    disabled: true
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
