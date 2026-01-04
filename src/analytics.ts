// Google Analytics event tracking utility

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

// Event names for the gachapon machine
export const GA_EVENTS = {
  INSERT_COIN: "insert_coin",
  SPIN_KNOB: "spin_knob",
  OPEN_CAPSULE: "open_capsule",
  VIEW_RESULT: "view_result",
  RESET_MACHINE: "reset_machine",
  LANGUAGE_SWITCH: "language_switch",
  MUSIC_TOGGLE: "music_toggle",
} as const;

type GAEventName = (typeof GA_EVENTS)[keyof typeof GA_EVENTS];

/**
 * Track a custom event in Google Analytics
 * @param eventName - The name of the event to track
 * @param params - Optional additional parameters
 */
export function trackEvent(
  eventName: GAEventName,
  params?: Record<string, unknown>
): void {
  // Only track if gtag is available (prevents errors in dev/test)
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "gachapon_interaction",
      ...params,
    });
  }
}

/**
 * Track insert coin event
 * @param remainingCapsules - Number of capsules remaining
 */
export function trackInsertCoin(remainingCapsules: number): void {
  trackEvent(GA_EVENTS.INSERT_COIN, {
    remaining_capsules: remainingCapsules,
  });
}

/**
 * Track spin knob event
 */
export function trackSpinKnob(): void {
  trackEvent(GA_EVENTS.SPIN_KNOB);
}

/**
 * Track capsule open event
 * @param capsuleColor - Color of the capsule opened
 */
export function trackOpenCapsule(capsuleColor: string): void {
  trackEvent(GA_EVENTS.OPEN_CAPSULE, {
    capsule_color: capsuleColor,
  });
}

/**
 * Track view result event
 * @param fortuneId - ID of the fortune viewed
 */
export function trackViewResult(fortuneId: number): void {
  trackEvent(GA_EVENTS.VIEW_RESULT, {
    fortune_id: fortuneId,
  });
}

/**
 * Track machine reset event
 * @param drawnCount - Number of capsules drawn before reset
 */
export function trackResetMachine(drawnCount: number): void {
  trackEvent(GA_EVENTS.RESET_MACHINE, {
    drawn_count: drawnCount,
  });
}

/**
 * Track language switch event
 * @param fromLang - Previous language
 * @param toLang - New language selected
 */
export function trackLanguageSwitch(fromLang: string, toLang: string): void {
  trackEvent(GA_EVENTS.LANGUAGE_SWITCH, {
    from_language: fromLang,
    to_language: toLang,
  });
}

/**
 * Track music mute/unmute event
 * @param action - "mute" or "unmute"
 */
export function trackMusicToggle(action: "mute" | "unmute"): void {
  trackEvent(GA_EVENTS.MUSIC_TOGGLE, {
    music_action: action,
  });
}

/**
 * Set user property for preferred language
 * This helps identify which language users prefer
 * @param language - User's current language preference
 */
export function setUserLanguage(language: string): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "set_user_properties", {
      user_properties: {
        preferred_language: language,
      },
    });
  }
}
