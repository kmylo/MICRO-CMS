import type { Meta, StoryObj } from "@storybook/react";
import TextArea, { TextAreaProps } from "./TextArea";

const meta: Meta<TextAreaProps> = {
  title: "Components/atoms/TextArea",
  component: TextArea,
  tags: ["autodocs"]
};

export default meta;
type TextAreaStory = StoryObj<TextAreaProps>;

export const Default: TextAreaStory = {
  args: {
    defaultStyle: false,
    name: "default,",
    id: "default"
  }
};

export const WithClassName = {
  args: {
    ...Default.args,
    className: "bg-red-200"
  }
};
export const WithDefaultStyle = {
  args: {
    ...Default.args,
    defaultStyle: true
  }
};
export const WithPlaceholder = {
  args: {
    ...Default.args,
    placeholder: "placeholder text"
  }
};
export const WithValue = {
  args: {
    ...Default.args,
    value: "Initial value"
  }
};
export const WithOnChange = {
  args: {
    ...Default.args,
    onChange: (event) => {
      console.log("Input value has changed", event.target.value);
    }
  }
};
