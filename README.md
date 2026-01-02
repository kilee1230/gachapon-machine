# 🐴 2026 Year of the Horse Gachapon Machine

[![GitHub Pages](https://img.shields.io/badge/demo-live-brightgreen)](https://kilee1230.github.io/gachapon-machine/)
[![Storybook](https://img.shields.io/badge/📖_storybook-docs-ff4785)](https://kilee1230.github.io/gachapon-machine/storybook/)
[![Coverage](https://img.shields.io/badge/coverage-71%25-yellow)](https://github.com/kilee1230/gachapon-machine/actions)

A fun, nostalgic gachapon (capsule toy) machine to celebrate the 2026 Lunar New Year!

## ✨ About

Made for everyone who loves a bit of fun and nostalgia, this project lets you relive the joy of gachapon machines. Turn the knob, grab a capsule, and uncover a lucky message to kick off the Lunar New Year with great vibes and positive energy.

## 🎯 Features

- 🎰 Interactive gachapon machine with realistic animations
- 🌏 Bilingual support (中文 / English)
- 🎵 Festive background music
- 📜 100 unique fortune messages
- 📱 Mobile-friendly design

## 🚀 Run Locally

**Prerequisites:** Node.js, pnpm

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the app:

   ```bash
   pnpm dev
   ```

3. Open http://localhost:3000 in your browser

## 📖 Storybook

This project uses [Storybook](https://storybook.js.org/) for component development and testing.

```bash
# Start Storybook dev server
pnpm storybook

# Build static Storybook
pnpm build-storybook
```

Open http://localhost:6006 to view components in Storybook.

## 🧪 Testing

Run interaction tests with coverage:

```bash
# Start Storybook first (in a separate terminal)
pnpm storybook

# Run tests with coverage report
pnpm test-storybook:coverage
```

Coverage report will be generated in `coverage/html/` and printed to terminal.

| Component       | Statements | Branches | Functions | Lines   |
| --------------- | ---------- | -------- | --------- | ------- |
| Capsule         | 100%       | 100%     | 100%      | 100%    |
| ResultModal     | 100%       | 100%     | 100%      | 100%    |
| GachaponMachine | 68%        | 88%      | 73%       | 68%     |
| MusicPlayer     | 66%        | 71%      | 50%       | 69%     |
| **Overall**     | **71%**    | **89%**  | **68%**   | **72%** |

## 🎵 Music Credit

Background music: [Chinese New Year](https://pixabay.com/music/world-chinese-new-year-284910/) from Pixabay  
License: [Pixabay Content License](https://pixabay.com/service/license-summary/) (Free for commercial and non-commercial use, no attribution required)

## 🧧 Happy Lunar New Year!

May the Year of the Horse bring you good fortune, success, and happiness! 🐴🎊
