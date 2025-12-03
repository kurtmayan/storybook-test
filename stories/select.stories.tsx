import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Select as UISelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const meta = {
  title: "shadcn/UI Components",
  component: UISelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      options: [false, true],
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof UISelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {
  render: (args) => {
    return (
      <UISelect {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </UISelect>
    );
  },
};
