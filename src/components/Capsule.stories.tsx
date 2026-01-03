import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
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
  args: {
    color: "#ef4444",
    isOpen: false,
  },
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

// Interactive test - verify capsule halves have animation classes
export const InteractionTestAnimationClasses: Story = {
  args: {
    color: "#ef4444",
    isOpen: false,
  },
  play: async ({ canvasElement }) => {
    // Verify the top half has transition classes
    const topHalf = canvasElement.querySelector(".rounded-t-full");
    await expect(topHalf).toBeInTheDocument();
    await expect(topHalf).toHaveClass("transition-all");
    await expect(topHalf).toHaveClass("duration-700");

    // Verify the bottom half has transition classes
    const bottomHalf = canvasElement.querySelector(".rounded-b-full");
    await expect(bottomHalf).toBeInTheDocument();
    await expect(bottomHalf).toHaveClass("transition-all");
    await expect(bottomHalf).toHaveClass("duration-700");
  },
};

// Interactive test - verify open state transforms
export const InteractionTestOpenTransforms: Story = {
  args: {
    color: "#a855f7",
    isOpen: true,
  },
  play: async ({ canvasElement }) => {
    // Wait for animation to settle
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Verify top half has transformed (opacity should be 0 after animation)
    const topHalf = canvasElement.querySelector(
      ".rounded-t-full"
    ) as HTMLElement;
    if (topHalf) {
      const style = window.getComputedStyle(topHalf);
      // The transform should include translate and rotate
      await expect(style.transform).not.toBe("none");
    }

    // Verify bottom half has transformed
    const bottomHalf = canvasElement.querySelector(
      ".rounded-b-full"
    ) as HTMLElement;
    if (bottomHalf) {
      const style = window.getComputedStyle(bottomHalf);
      await expect(style.transform).not.toBe("none");
    }

    // Verify paper scroll is visible
    const paperScroll = canvasElement.querySelector(
      '[class*="bg-\\[\\#fff1f1\\]"]'
    ) as HTMLElement;
    if (paperScroll) {
      const style = window.getComputedStyle(paperScroll);
      await expect(style.opacity).toBe("1");
    }
  },
};
