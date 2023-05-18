import type { Meta, StoryObj } from "@storybook/react";
import Label, { LabelProps } from "./Label";

const meta: Meta<LabelProps> = {
  title: "Components/atoms/Label",
  component: Label,
  tags: ["autodocs"]
};

export default meta;
type LabelStory = StoryObj<LabelProps>;

export const Default: LabelStory = {
  args: {
    labelText: "Label"
  }
};

export const Uppercase: LabelStory = {
  args: {
    labelText: "Uppercase",    
    variant: "uppercase",
  }
};