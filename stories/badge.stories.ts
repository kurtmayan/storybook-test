import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Badge as UIBadge } from "@/components/ui/badge";

const meta = {
  title: "shadcn/UI Components",
  component: UIBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "destructive", "outline", "secondary"],
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof UIBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  args: {
    children: "Badge",
  },
};
