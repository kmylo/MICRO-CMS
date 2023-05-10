import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import Logo, { LogoProps } from "./Logo";

const meta: Meta<LogoProps> = {
  title: "Components/atoms/Logo",
  component: Logo,
  decorators: [withRouter],
  tags: ["autodocs"]
};

export default meta;
type LogoStory = StoryObj<LogoProps>;

export const Default: LogoStory = {
  args: {
    logoTxt: "LOGO"
  }
};
