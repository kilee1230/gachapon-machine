import { z } from "zod";

// Language Type
export type Language = "cn" | "en";

// Fortune Interface
export interface Fortune {
  id: number;
  cn: string; // Chinese text
  en: string; // English text
}

export type GameState =
  | "idle" // Waiting for coin
  | "inserting" // Coin animation playing
  | "ready" // Coin inserted, waiting for spin
  | "spinning" // Machine turning
  | "dropped" // Capsule waiting to be opened
  | "opening" // Capsule opening animation
  | "result" // Showing the result
  | "empty"; // No more fortunes

export interface GachaponMachineProps {
  gameState: GameState;
  onInsertCoin: () => void;
  onSpin: () => void;
  onOpenCapsule: () => void;
  capsuleColor: string;
  remainingCount: number;
  language: Language; // Added language prop
}
