import type { AuthStatus, FocusTarget, MascotMode } from "@/types/interaction";

export function resolveMascotMode(
  status: AuthStatus,
  focus: FocusTarget,
  passwordVisible: boolean,
): MascotMode {
  if (status === "success") return "success";
  if (status === "submitting") return "submitting";
  if (status === "error") return "validationError";
  if (focus === "password" && passwordVisible) return "passwordVisible";
  if (focus === "password") return "passwordHidden";
  if (focus === "email") return "emailFocused";
  return "idle";
}
