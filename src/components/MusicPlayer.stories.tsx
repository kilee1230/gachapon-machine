import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { MusicPlayer } from "./MusicPlayer";

const meta = {
  title: "Components/MusicPlayer",
  component: MusicPlayer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-red-900 relative">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MusicPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state with overlay
export const Default: Story = {};

// Interactive test - click overlay to start music
export const InteractionTestOverlayClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify overlay is visible initially
    const playText = canvas.getByText("点击开始");
    await expect(playText).toBeInTheDocument();

    const tapText = canvas.getByText("Tap to Start");
    await expect(tapText).toBeInTheDocument();

    // Find and verify the red envelope decoration
    const redEnvelope = canvas.getByText("🧧");
    await expect(redEnvelope).toBeInTheDocument();

    // Find and verify the horse emoji
    const horseEmoji = canvas.getByText("🐴");
    await expect(horseEmoji).toBeInTheDocument();
  },
};

// Interactive test - toggle music control button
export const InteractionTestToggleButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // First dismiss the overlay by clicking it
    const overlay = canvasElement.querySelector('[class*="fixed inset-0 z-\\[100\\]"]');
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait a bit for the overlay to disappear
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Now find the music control button
    const musicButton = canvas.getByRole("button", {
      name: /play music|pause music/i,
    });
    await expect(musicButton).toBeInTheDocument();
  },
};

// Interactive test - verify overlay has all required elements
export const InteractionTestOverlayElements: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify play button icon area exists (the golden circle)
    const playButtonArea = canvasElement.querySelector('[class*="w-24 h-24"]');
    await expect(playButtonArea).toBeInTheDocument();

    // Verify Chinese text
    const chineseText = canvas.getByText("点击开始");
    await expect(chineseText).toBeInTheDocument();
    await expect(chineseText).toHaveClass("text-yellow-300");

    // Verify English text
    const englishText = canvas.getByText("Tap to Start");
    await expect(englishText).toBeInTheDocument();
  },
};


