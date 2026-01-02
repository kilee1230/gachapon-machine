import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { Capsule } from "./Capsule";

const meta = {
  title: "Components/Capsule",
  component: Capsule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color",
      description: "The color of the capsule top half",
    },
    isOpen: {
      control: "boolean",
      description: "Whether the capsule is open or closed",
    },
  },
} satisfies Meta<typeof Capsule>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default closed capsule - Red
export const Closed: Story = {
  args: {
    color: "#ef4444",
    isOpen: false,
  },
};

// Open capsule showing paper scroll
export const Open: Story = {
  args: {
    color: "#ef4444",
    isOpen: true,
  },
};

// Different colors
export const YellowCapsule: Story = {
  args: {
    color: "#eab308",
    isOpen: false,
  },
};

export const BlueCapsule: Story = {
  args: {
    color: "#3b82f6",
    isOpen: false,
  },
};

export const GreenCapsule: Story = {
  args: {
    color: "#22c55e",
    isOpen: false,
  },
};

export const PurpleCapsule: Story = {
  args: {
    color: "#a855f7",
    isOpen: false,
  },
};

export const PinkCapsule: Story = {
  args: {
    color: "#ec4899",
    isOpen: false,
  },
};

export const OrangeCapsule: Story = {
  args: {
    color: "#f97316",
    isOpen: false,
  },
};

// All capsule colors showcase
export const AllColors: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      {[
        "#ef4444",
        "#eab308",
        "#3b82f6",
        "#22c55e",
        "#a855f7",
        "#ec4899",
        "#f97316",
      ].map((color) => (
        <Capsule key={color} color={color} isOpen={false} />
      ))}
    </div>
  ),
};

// Interactive test - verify capsule renders correctly
export const InteractionTestClosed: Story = {
  args: {
    color: "#ef4444",
    isOpen: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify the capsule container exists
    const capsuleContainer = canvasElement.querySelector(".relative.w-20.h-20");
    await expect(capsuleContainer).toBeInTheDocument();

    // Verify there's no open state (paper scroll should not be visible with opacity 1)
    const paperScroll = canvasElement.querySelector(
      '[class*="bg-\\[\\#fff1f1\\]"]'
    );
    if (paperScroll) {
      const style = window.getComputedStyle(paperScroll);
      await expect(style.opacity).toBe("0");
    }
  },
};

// Interactive test - verify open capsule shows paper
export const InteractionTestOpen: Story = {
  args: {
    color: "#3b82f6",
    isOpen: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify the capsule container exists
    const capsuleContainer = canvasElement.querySelector(".relative.w-20.h-20");
    await expect(capsuleContainer).toBeInTheDocument();

    // Verify paper scroll is visible when open
    const paperScroll = canvasElement.querySelector(
      '[class*="bg-\\[\\#fff1f1\\]"]'
    );
    if (paperScroll) {
      const style = window.getComputedStyle(paperScroll);
      await expect(style.opacity).toBe("1");
    }
  },
};
