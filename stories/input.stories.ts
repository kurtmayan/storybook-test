import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input as UIInput } from "@/components/ui/input";

const meta = {
  title: "shadcn/UI Components",
  component: UIInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      options: [false, true],
      type: "boolean",
    },
  },
} satisfies Meta<typeof UIInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    placeholder: "Email address",
  },
};
