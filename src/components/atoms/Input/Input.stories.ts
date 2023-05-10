import React, { useRef } from "react";
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

// export const EmptyInput = {};

export const Default: InputStory = {
  args: {
    type: "text",
    name: "input-name",
    id: "input-id",
    placeholder: "Enter some text"
  }
};
export const WithPlaceholder: InputStory = {
  args: {
    ...Default.args,
    placeholder: "This is a custom placeholder"
  }
};
export const WithValue: InputStory = {
  args: {
    ...Default.args,
    value: "Initial value"
  }
};

export const WithCustomClass: InputStory = {
  args: {
    ...Default.args,
    className: "custom-class"
  }
};
export const WithOnChange: InputStory = {
  args: {
    ...Default.args,
    onChange: () => {
      console.log("Input value has changed");
    }
  }
};


// // Story to test forwardRef functionality
// export const WithForwardRef: InputStory = (args) => {
//   const inputRef = useRef(initialValue)<HTMLInputElement>(null);

//   return (
//     <div>
//       <button onClick={() => inputRef.current?.focus()}>Focus input</button>
//       <Input ref={inputRef} {...args} />
//     </div>
//   );
// };
// WithForwardRef.args = {
//   type: "text",
//   name: "input-name",
//   id: "input-id",
// };