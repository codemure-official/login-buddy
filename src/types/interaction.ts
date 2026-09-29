export type FocusTarget = "email" | "password" | null;
export type AuthStatus = "idle" | "submitting" | "error" | "success";

export type MascotMode =
  | "idle"
  | "emailFocused"
  | "passwordHidden"
  | "passwordVisible"
  | "validationError"
  | "submitting"
  | "success";
