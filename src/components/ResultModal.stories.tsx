import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect, fn } from "@storybook/test";
import { ResultModal } from "./ResultModal";
import type { Fortune, Language } from "../types";

const mockFortune: Fortune = {
  id: 1,
  zh: "马到成功：愿你在新的一年里事业腾飞，心想事成！",
  en: "Success at Hand: May your career soar and all wishes come true in the new year!",
};

const shortFortune: Fortune = {
  id: 2,
  zh: "龙马精神",
  en: "Vigor and Vitality",
};

const meta = {
  title: "Components/ResultModal",
  component: ResultModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    fortune: {
      description: "The fortune object containing Chinese and English text",
    },
    language: {
      control: "radio",
      options: ["zh", "en"],
      description: "Display language",
    },
    onClose: {
      action: "closed",
      description: "Callback when modal is closed",
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-red-900">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResultModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Chinese version
export const Chinese: Story = {
  args: {
    fortune: mockFortune,
    language: "zh",
    onClose: fn(),
  },
};

// English version
export const English: Story = {
  args: {
    fortune: mockFortune,
    language: "en",
    onClose: fn(),
  },
};

// Short fortune without separator
export const ShortFortuneChinese: Story = {
  args: {
    fortune: shortFortune,
    language: "zh",
    onClose: fn(),
  },
};

export const ShortFortuneEnglish: Story = {
  args: {
    fortune: shortFortune,
    language: "en",
    onClose: fn(),
  },
};

// Interactive test - close button click
export const InteractionTestCloseButton: Story = {
  args: {
    fortune: mockFortune,
    language: "zh",
    onClose: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find and click the X close button
    const closeButton = canvas.getByRole("button", { name: "×" });
    await expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);

    // Verify onClose was called
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  },
};

// Interactive test - collect button click
export const InteractionTestCollectButton: Story = {
  args: {
    fortune: mockFortune,
    language: "zh",
    onClose: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find and click the collect button
    const collectButton = canvas.getByRole("button", { name: "收入囊中" });
    await expect(collectButton).toBeInTheDocument();
    await userEvent.click(collectButton);

    // Verify onClose was called
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  },
};

// Interactive test - English collect button
export const InteractionTestCollectButtonEnglish: Story = {
  args: {
    fortune: mockFortune,
    language: "en",
    onClose: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Find and click the collect button in English
    const collectButton = canvas.getByRole("button", { name: "COLLECT" });
    await expect(collectButton).toBeInTheDocument();
    await userEvent.click(collectButton);

    // Verify onClose was called
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  },
};

// Interactive test - verify fortune content displays correctly
export const InteractionTestContentDisplay: Story = {
  args: {
    fortune: mockFortune,
    language: "zh",
    onClose: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify the title is displayed
    const title = canvas.getByText("马到成功");
    await expect(title).toBeInTheDocument();

    // Verify the content is displayed
    const content = canvas.getByText(/愿你在新的一年里/);
    await expect(content).toBeInTheDocument();

    // Verify year decoration
    const year = canvas.getByText("2026 · 丙午年");
    await expect(year).toBeInTheDocument();
  },
};

