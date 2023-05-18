import type { Meta, StoryObj } from "@storybook/react";
import Card, { CardProps } from "./Card";

const meta: Meta<CardProps> = {
  title: "Components/atoms/Card",
  component: Card,
  tags: ["autodocs"]
};

export default meta;
type CardStory = StoryObj<CardProps>;

export const Default: CardStory = {
  args: {
    children: "Card"
  }
};
