import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect, fn } from "@storybook/test";
import { GachaponMachine } from "./GachaponMachine";
import type { GameState, Language } from "../types";

const meta = {
  title: "Components/GachaponMachine",
  component: GachaponMachine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    gameState: {
      control: "select",
      options: [
        "idle",
        "inserting",
        "ready",
        "spinning",
        "dropped",
        "opening",
        "result",
        "empty",
      ],
      description: "Current state of the game",
    },
    capsuleColor: {
      control: "color",
      description: "Color of the dropped capsule",
    },
    remainingCount: {
      control: { type: "number", min: 0, max: 100 },
      description: "Number of remaining fortunes",
    },
    language: {
      control: "radio",
      options: ["zh", "en"],
      description: "Display language",
    },
    onInsertCoin: { action: "coin inserted" },
    onSpin: { action: "spin triggered" },
    onOpenCapsule: { action: "capsule opened" },
    onCapsuleColorPicked: { action: "color picked" },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GachaponMachine>;

export default meta;
type Story = StoryObj<typeof meta>;

// Idle state - waiting for coin
export const Idle: Story = {
  args: {
    gameState: "idle",
    capsuleColor: "#ef4444",
    remainingCount: 100,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
};

// Idle state in English
export const IdleEnglish: Story = {
  args: {
    ...Idle.args,
    language: "en",
  },
};

// Inserting coin animation
export const InsertingCoin: Story = {
  args: {
    ...Idle.args,
    gameState: "inserting",
  },
};

// Ready to spin
export const ReadyToSpin: Story = {
  args: {
    ...Idle.args,
    gameState: "ready",
  },
};

// Spinning state
export const Spinning: Story = {
  args: {
    ...Idle.args,
    gameState: "spinning",
  },
};

// Capsule dropped
export const CapsuleDropped: Story = {
  args: {
    ...Idle.args,
    gameState: "dropped",
  },
};

// Capsule opening
export const CapsuleOpening: Story = {
  args: {
    ...Idle.args,
    gameState: "opening",
  },
};

// Empty machine
export const EmptyMachine: Story = {
  args: {
    ...Idle.args,
    gameState: "idle",
    remainingCount: 0,
  },
};

// Low remaining count
export const LowRemaining: Story = {
  args: {
    ...Idle.args,
    remainingCount: 5,
  },
};

// Different capsule colors when dropped
export const DroppedBlueCapsule: Story = {
  args: {
    ...Idle.args,
    gameState: "dropped",
    capsuleColor: "#3b82f6",
  },
};

export const DroppedGreenCapsule: Story = {
  args: {
    ...Idle.args,
    gameState: "dropped",
    capsuleColor: "#22c55e",
  },
};

export const DroppedPurpleCapsule: Story = {
  args: {
    ...Idle.args,
    gameState: "dropped",
    capsuleColor: "#a855f7",
  },
};

// Interactive test - click coin slot in idle state
export const InteractionTestInsertCoin: Story = {
  args: {
    gameState: "idle",
    capsuleColor: "#ef4444",
    remainingCount: 100,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find and verify the coin slot label
    const coinSlotLabel = canvas.getByText("投币口");
    await expect(coinSlotLabel).toBeInTheDocument();

    // Find the start hint
    const startHint = canvas.getByText("点击投币");
    await expect(startHint).toBeInTheDocument();

    // Find the coin slot button (first button in the component)
    const buttons = canvas.getAllByRole("button");
    const coinSlotButton = buttons[0]; // First button is coin slot

    // Click the coin slot
    await userEvent.click(coinSlotButton);

    // Verify onInsertCoin was called
    await expect(args.onInsertCoin).toHaveBeenCalledTimes(1);
  },
};

// Interactive test - click spin button in ready state
export const InteractionTestSpin: Story = {
  args: {
    gameState: "ready",
    capsuleColor: "#ef4444",
    remainingCount: 100,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find and verify the spin text
    const spinText = canvas.getByText("点击旋转");
    await expect(spinText).toBeInTheDocument();

    // Find the spin button (second button in ready state)
    const buttons = canvas.getAllByRole("button");
    const spinButton = buttons[1]; // Second button is spin knob

    // Click the spin button
    await userEvent.click(spinButton);

    // Verify onSpin was called
    await expect(args.onSpin).toHaveBeenCalledTimes(1);
  },
};

// Interactive test - click/swipe dropped capsule
export const InteractionTestOpenCapsule: Story = {
  args: {
    gameState: "dropped",
    capsuleColor: "#ef4444",
    remainingCount: 99,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find the open hint
    const openHint = canvas.getByText("点击或下滑打开");
    await expect(openHint).toBeInTheDocument();

    // Find the dropped capsule container and click it
    const capsuleContainer = canvasElement.querySelector(
      '[class*="animate-\\[chute-exit"]'
    );
    if (capsuleContainer) {
      await userEvent.click(capsuleContainer);
      // Verify onOpenCapsule was called
      await expect(args.onOpenCapsule).toHaveBeenCalledTimes(1);
    }
  },
};

// Interactive test - verify English labels
export const InteractionTestEnglishLabels: Story = {
  args: {
    gameState: "ready",
    capsuleColor: "#ef4444",
    remainingCount: 100,
    language: "en",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify English labels
    const insertLabel = canvas.getByText("INSERT");
    await expect(insertLabel).toBeInTheDocument();

    const exitLabel = canvas.getByText("EXIT");
    await expect(exitLabel).toBeInTheDocument();

    const spinText = canvas.getByText("SPIN");
    await expect(spinText).toBeInTheDocument();
  },
};

// Interactive test - verify empty machine state
export const InteractionTestEmptyMachine: Story = {
  args: {
    gameState: "idle",
    capsuleColor: "#ef4444",
    remainingCount: 0,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify sold out text
    const soldOutText = canvas.getByText("已售罄");
    await expect(soldOutText).toBeInTheDocument();

    // Find the coin slot button
    const buttons = canvas.getAllByRole("button");
    const coinSlotButton = buttons[0];

    // Click should not trigger onInsertCoin when empty
    await userEvent.click(coinSlotButton);
    await expect(args.onInsertCoin).not.toHaveBeenCalled();
  },
};

// Interactive test - spinning state triggers color picking
export const InteractionTestSpinning: Story = {
  args: {
    gameState: "spinning",
    capsuleColor: "#ef4444",
    remainingCount: 50,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement }) => {
    // Verify the spinning effect overlay is visible
    const spinningOverlay = canvasElement.querySelector(
      '[class*="animate-\\[spin-fast"]'
    );
    await expect(spinningOverlay).toBeInTheDocument();

    // Wait for capsule initialization and color picking
    // The useEffects run async, so we wait for the full spin animation cycle
    await new Promise((resolve) => setTimeout(resolve, 1500));
  },
};

// Interactive test - touch swipe on dropped capsule
export const InteractionTestTouchSwipe: Story = {
  args: {
    gameState: "dropped",
    capsuleColor: "#ef4444",
    remainingCount: 99,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement, args }) => {
    // Find the dropped capsule container
    const capsuleContainer = canvasElement.querySelector(
      '[class*="animate-\\[chute-exit"]'
    ) as HTMLElement;

    if (capsuleContainer) {
      // Simulate touch start
      const touchStartEvent = new TouchEvent("touchstart", {
        bubbles: true,
        cancelable: true,
        touches: [
          new Touch({
            identifier: 0,
            target: capsuleContainer,
            clientX: 100,
            clientY: 100,
          }),
        ],
      });
      capsuleContainer.dispatchEvent(touchStartEvent);

      // Simulate touch end with downward swipe (> 50px threshold)
      const touchEndEvent = new TouchEvent("touchend", {
        bubbles: true,
        cancelable: true,
        changedTouches: [
          new Touch({
            identifier: 0,
            target: capsuleContainer,
            clientX: 100,
            clientY: 200, // 100px down
          }),
        ],
      });
      capsuleContainer.dispatchEvent(touchEndEvent);

      // Verify onOpenCapsule was called
      await expect(args.onOpenCapsule).toHaveBeenCalledTimes(1);
    }
  },
};

// Interactive test - touch without enough swipe distance
export const InteractionTestTouchNoSwipe: Story = {
  args: {
    gameState: "dropped",
    capsuleColor: "#3b82f6",
    remainingCount: 99,
    language: "zh",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const capsuleContainer = canvasElement.querySelector(
      '[class*="animate-\\[chute-exit"]'
    ) as HTMLElement;

    if (capsuleContainer) {
      // Simulate touch start
      const touchStartEvent = new TouchEvent("touchstart", {
        bubbles: true,
        cancelable: true,
        touches: [
          new Touch({
            identifier: 0,
            target: capsuleContainer,
            clientX: 100,
            clientY: 100,
          }),
        ],
      });
      capsuleContainer.dispatchEvent(touchStartEvent);

      // Simulate touch end with small movement (< 50px threshold)
      const touchEndEvent = new TouchEvent("touchend", {
        bubbles: true,
        cancelable: true,
        changedTouches: [
          new Touch({
            identifier: 0,
            target: capsuleContainer,
            clientX: 100,
            clientY: 130, // Only 30px down, should NOT trigger
          }),
        ],
      });
      capsuleContainer.dispatchEvent(touchEndEvent);

      // Verify onOpenCapsule was NOT called (swipe too small)
      await expect(args.onOpenCapsule).not.toHaveBeenCalled();
    }
  },
};

// Interactive test - touch end without touch start
export const InteractionTestTouchEndOnly: Story = {
  args: {
    gameState: "dropped",
    capsuleColor: "#22c55e",
    remainingCount: 99,
    language: "en",
    onInsertCoin: fn(),
    onSpin: fn(),
    onOpenCapsule: fn(),
    onCapsuleColorPicked: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Verify English hint
    const openHint = canvas.getByText("CLICK OR SWIPE DOWN");
    await expect(openHint).toBeInTheDocument();

    const capsuleContainer = canvasElement.querySelector(
      '[class*="animate-\\[chute-exit"]'
    ) as HTMLElement;

    if (capsuleContainer) {
      // Only dispatch touchend without touchstart
      const touchEndEvent = new TouchEvent("touchend", {
        bubbles: true,
        cancelable: true,
        changedTouches: [
          new Touch({
            identifier: 0,
            target: capsuleContainer,
            clientX: 100,
            clientY: 200,
          }),
        ],
      });
      capsuleContainer.dispatchEvent(touchEndEvent);

      // Should NOT trigger since touchStartY is null
      await expect(args.onOpenCapsule).not.toHaveBeenCalled();
    }
  },
};
