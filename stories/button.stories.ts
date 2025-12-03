import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button as UIButton } from "@/components/ui/button";

const meta = {
  title: "shadcn/UI Components",
  component: UIButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["default", "icon", "icon-lg", "icon-sm", "lg", "sm"],
      control: {
        type: "select",
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: "Button",
  },
};
