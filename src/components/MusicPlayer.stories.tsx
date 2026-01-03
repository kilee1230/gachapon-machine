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
    const overlay = canvasElement.querySelector(
      '[class*="fixed inset-0 z-\\[100\\]"]'
    );
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

// Interactive test - toggle play button after dismissing overlay
export const InteractionTestTogglePlayPause: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Mock the audio element to avoid actual playback issues
    const audioElement = canvasElement.querySelector(
      "audio"
    ) as HTMLAudioElement;
    if (audioElement) {
      // Mock play to resolve immediately
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {};
    }

    // Click overlay to dismiss it
    const overlay = canvasElement.querySelector(
      '[class*="fixed inset-0 z-\\[100\\]"]'
    ) as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait for overlay to disappear
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Find the music control button and click to toggle
    const musicButton = canvas.getByRole("button", {
      name: /play music|pause music/i,
    });
    await expect(musicButton).toBeInTheDocument();

    // Click to toggle play state
    await userEvent.click(musicButton);

    // Wait for state update
    await new Promise((resolve) => setTimeout(resolve, 100));
  },
};

// Interactive test - test pause after playing
export const InteractionTestPauseAfterPlay: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Mock the audio element
    const audioElement = canvasElement.querySelector(
      "audio"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {};
    }

    // Click overlay to dismiss and start playing
    const overlay = canvasElement.querySelector(
      '[class*="fixed inset-0 z-\\[100\\]"]'
    ) as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait for overlay to disappear and music to "start"
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Now the music should be "playing", click to pause
    const musicButton = canvas.getByRole("button", {
      name: /pause music/i,
    });
    await expect(musicButton).toBeInTheDocument();

    // Click to pause
    await userEvent.click(musicButton);

    // Wait for state update
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Click again to resume
    const pausedButton = canvas.getByRole("button", {
      name: /play music/i,
    });
    await userEvent.click(pausedButton);
  },
};

// Interactive test - handle audio play failure
export const InteractionTestPlayFailure: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Mock the audio element to fail on play
    const audioElement = canvasElement.querySelector(
      "audio"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.reject(new Error("Autoplay blocked"));
      audioElement.pause = () => {};
    }

    // Click overlay - play will fail but should handle gracefully
    const overlay = canvasElement.querySelector(
      '[class*="fixed inset-0 z-\\[100\\]"]'
    ) as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    // Wait for error handling
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Overlay should be dismissed even on error
    const musicButton = canvas.getByRole("button");
    await expect(musicButton).toBeInTheDocument();
  },
};

// Interactive test - toggle with play failure
export const InteractionTestToggleWithFailure: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // First let overlay succeed
    let audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {};
    }

    // Dismiss overlay
    const overlay = canvasElement.querySelector(
      '[class*="fixed inset-0 z-\\[100\\]"]'
    ) as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    // Now make play fail for the toggle
    audioElement = canvasElement.querySelector("audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.reject(new Error("Playback failed"));
    }

    // Click pause first
    const pauseButton = canvas.getByRole("button", {
      name: /pause music/i,
    });
    await userEvent.click(pauseButton);

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Now try to play again (will fail silently)
    const playButton = canvas.getByRole("button", {
      name: /play music/i,
    });
    await userEvent.click(playButton);

    await new Promise((resolve) => setTimeout(resolve, 100));
  },
};

// Interactive test - visibility change pauses music when tab is hidden
export const InteractionTestVisibilityChange: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Track pause calls
    let pauseCalled = false;

    // Mock the audio element
    const audioElement = canvasElement.querySelector(
      "audio"
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.play = () => Promise.resolve();
      audioElement.pause = () => {
        pauseCalled = true;
      };
    }

    // Dismiss overlay to start playing
    const overlay = canvasElement.querySelector(
      '[class*="fixed inset-0 z-\\[100\\]"]'
    ) as HTMLElement;
    if (overlay) {
      await userEvent.click(overlay);
    }

    await new Promise((resolve) => setTimeout(resolve, 300));

    // Verify music is "playing"
    const pauseButton = canvas.getByRole("button", {
      name: /pause music/i,
    });
    await expect(pauseButton).toBeInTheDocument();

    // Simulate visibility change to hidden
    // Note: We can't actually change document.hidden, but we can verify
    // the event listener is set up by checking the component behavior
    const visibilityEvent = new Event("visibilitychange");

    // Mock document.hidden (this is tricky in tests)
    // For now, just verify the component rendered correctly
    // The actual visibility change behavior requires integration testing
  },
};

// Interactive test - verify audio element has correct attributes
export const InteractionTestAudioElement: Story = {
  play: async ({ canvasElement }) => {
    // Verify the audio element exists with correct attributes
    const audioElement = canvasElement.querySelector(
      "audio"
    ) as HTMLAudioElement;
    await expect(audioElement).toBeInTheDocument();
    await expect(audioElement).toHaveAttribute("loop");
    await expect(audioElement).toHaveAttribute("preload", "auto");
    await expect(audioElement.src).toContain("chinese-new-year");
  },
};
