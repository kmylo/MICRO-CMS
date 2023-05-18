import type { Meta, StoryObj } from "@storybook/react";
import HtmlRender, { HtmlRenderProps } from "./HtmlRender";

const meta: Meta<HtmlRenderProps> = {
  title: "Components/atoms/HtmlRender",
  component: HtmlRender,
  tags: ["autodocs"]
};

export default meta;
type HtmlRenderStory = StoryObj<HtmlRenderProps>;

export const Default: HtmlRenderStory = {
  args: {
    editableHtml: `<h3 style="margin-bottom: 10px" onclick="javascript:window.alert('hello')">HTML rich text post!</h3>
    <img loading="lazy"  alt="that" class="img-gallery" src="https://i.ibb.co/BPnb6c2/episode-06.jpg">
    <p style="font-size: 25px; color: red">Type HTML in the textarea below, and it will magically appear in the frame below.</p>
    <div>
    The standard Lorem Ipsum passage, used since the 1500s
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </div>
    `
  }
};