import React from "react";
import Input, { IInputProps } from "./Input";
import {
  Meta,
  StoryObj
  // Story
} from "@storybook/react";

export default {
  title: "Components/atoms/Input",
  component: Input,
  tags: ["autodocs"]
} as Meta;

type InputStory = StoryObj<IInputProps>;

export const EmptyInput = {};

export const Default: InputStory = {
  args: {
    type: "text",
    name: "input-name",
    id: "input-id"
  }
};

// const Template: Story<IInputProps> = (args) => <Input {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   type: "text",
//   name: "input-name",
//   id: "input-id"
// };

// export const WithPlaceholder = Template.bind({});
// WithPlaceholder.args = {
//   ...Default.args,
//   placeholder: "Enter your input here"
// };

// export const WithValue = Template.bind({});
// WithValue.args = {
//   ...Default.args,
//   value: "Initial value"
// };

// export const WithCustomClass = Template.bind({});
// WithCustomClass.args = {
//   ...Default.args,
//   className: "custom-class"
// };

// export const WithOnChange = Template.bind({});
// WithOnChange.args = {
//   ...Default.args,
//   onChange: () => {
//     console.log("Input value has changed");
//   }
// };
