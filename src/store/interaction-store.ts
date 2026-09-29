import { create } from "zustand";
import type { AuthStatus, FocusTarget } from "@/types/interaction";

type InteractionState = {
  focus: FocusTarget;
  authStatus: AuthStatus;
  passwordVisible: boolean;
  typingPulse: number;
  setFocus: (focus: FocusTarget) => void;
  setAuthStatus: (status: AuthStatus) => void;
  setPasswordVisible: (visible: boolean) => void;
  registerTyping: () => void;
  reset: () => void;
};

export const useInteractionStore = create<InteractionState>((set) => ({
  focus: null,
  authStatus: "idle",
  passwordVisible: false,
  typingPulse: 0,
  setFocus: (focus) => set({ focus }),
  setAuthStatus: (authStatus) => set({ authStatus }),
  setPasswordVisible: (passwordVisible) => set({ passwordVisible }),
  registerTyping: () => set((state) => ({ typingPulse: state.typingPulse + 1 })),
  reset: () => set({ focus: null, authStatus: "idle", passwordVisible: false, typingPulse: 0 }),
}));
