import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Select as UISelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

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
    return React.createElement(
      UISelect,
      { ...args },
      React.createElement(
        SelectTrigger,
        { className: "w-[180px]" },
        React.createElement(SelectValue, { placeholder: "Theme" })
      ),
      React.createElement(
        SelectContent,
        null,
        React.createElement(SelectItem, { value: "light" }, "Light"),
        React.createElement(SelectItem, { value: "dark" }, "Dark"),
        React.createElement(SelectItem, { value: "system" }, "System")
      )
    );
  },
};
