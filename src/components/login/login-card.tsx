"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authenticateDemo, DEMO_CREDENTIALS } from "@/lib/auth";
import { useInteractionStore } from "@/store/interaction-store";
import { Brand } from "@/components/ui/brand";

const loginSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
  remember: z.boolean(),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginCard() {
  const [socialMessage, setSocialMessage] = useState("");
  const {
    focus,
    authStatus,
    passwordVisible,
    setFocus,
    setAuthStatus,
    setPasswordVisible,
    registerTyping,
    reset: resetInteraction,
  } = useInteractionStore();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: true },
    mode: "onSubmit",
  });

  const email = register("email");
  const password = register("password");
  const remember = register("remember");
  const isBusy = authStatus === "submitting";

  async function onSubmit(values: LoginValues) {
    setSocialMessage("");
    setFocus(null);
    setAuthStatus("submitting");
    const authenticated = await authenticateDemo(values.email, values.password);
    if (authenticated) {
      setAuthStatus("success");
      return;
    }
    setAuthStatus("error");
    setError("root", {
      type: "credentials",
      message: "That email and password don’t match the demo credentials.",
    });
  }

  function onInvalid() {
    setAuthStatus("error");
  }

  function restart() {
    reset();
    resetInteraction();
    setSocialMessage("");
  }

  return (
    <section className="login-shell" id="login" aria-labelledby="login-heading">
      <div className="login-shell__shine" aria-hidden="true" />
      <AnimatePresence mode="wait" initial={false}>
        {authStatus === "success" ? (
          <motion.div
            className="success-state"
            key="success"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="success-state__icon"><ShieldCheck size={34} /></div>
            <span className="success-state__eyebrow">Identity confirmed</span>
            <h2 id="login-heading">You’re safely signed in.</h2>
            <p>Privacy Buddy kept watch. Your demo session is ready to go.</p>
            <div className="success-state__line"><Check size={15} /> Encrypted session established</div>
            <button className="secondary-action" type="button" onClick={restart}>
              <RotateCcw size={16} /> Try the interaction again
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="login-card"
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16, filter: "blur(5px)" }}
            transition={{ duration: 0.36 }}
          >
            <div className="login-card__brand"><Brand compact /></div>
            <div className="login-card__heading">
              <h2 id="login-heading">Welcome back</h2>
              <p>Sign in to continue</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
              <div className={`field ${focus === "email" ? "field--active" : ""} ${errors.email ? "field--error" : ""}`}>
                <label htmlFor="email">Email address</label>
                <span className="field__icon"><Mail size={18} /></span>
                <input
                  {...email}
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={isBusy}
                  onFocus={() => { setFocus("email"); setAuthStatus("idle"); }}
                  onBlur={(event) => { email.onBlur(event); setFocus(null); }}
                  onChange={(event) => { email.onChange(event); registerTyping(); }}
                />
              </div>
              {errors.email && <p className="field-error" id="email-error">{errors.email.message}</p>}

              <div className={`field ${focus === "password" ? "field--active" : ""} ${errors.password || errors.root ? "field--error" : ""}`}>
                <label htmlFor="password">Password</label>
                <span className="field__icon"><LockKeyhole size={18} /></span>
                <input
                  {...password}
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  aria-invalid={Boolean(errors.password || errors.root)}
                  aria-describedby={errors.password ? "password-error" : errors.root ? "login-error" : undefined}
                  disabled={isBusy}
                  onFocus={() => { setFocus("password"); setAuthStatus("idle"); }}
                  onBlur={(event) => { password.onBlur(event); setFocus(null); }}
                />
                <button
                  className="password-toggle"
                  type="button"
                  aria-label={passwordVisible ? "Hide password" : "Show password"}
                  aria-pressed={passwordVisible}
                  onPointerDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setPasswordVisible(!passwordVisible);
                    setFocus("password");
                  }}
                  disabled={isBusy}
                >
                  {passwordVisible ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
              {errors.password && <p className="field-error" id="password-error">{errors.password.message}</p>}

              <div className="form-options">
                <label className="checkbox">
                  <input {...remember} type="checkbox" disabled={isBusy} />
                  <span aria-hidden="true"><Check size={12} /></span>
                  Remember me
                </label>
                <a href="mailto:hello@privacybuddy.dev?subject=Password%20help">Forgot password?</a>
              </div>

              <div className="form-status" aria-live="polite" aria-atomic="true">
                {errors.root && <p id="login-error">{errors.root.message}</p>}
                {socialMessage && <p>{socialMessage}</p>}
              </div>

              <button className="primary-action" type="submit" disabled={isBusy}>
                <span>{isBusy ? "Checking securely" : "Sign in"}</span>
                {isBusy ? <LoaderCircle className="spin" size={18} /> : <ArrowRight size={18} />}
              </button>

              <div className="divider"><span>or continue with</span></div>
              <div className="social-actions">
                <button type="button" onClick={() => setSocialMessage("Google sign-in is not connected in this demo.")}>
                  <GoogleMark /> Continue with Google
                </button>
                <button type="button" onClick={() => setSocialMessage("Apple sign-in is not connected in this demo.")}>
                  <AppleMark /> Continue with Apple
                </button>
              </div>
            </form>
            <p className="demo-credentials">
              Demo: <button type="button" title="Copy demo credentials" onClick={() => navigator.clipboard?.writeText(`${DEMO_CREDENTIALS.email} / ${DEMO_CREDENTIALS.password}`)}>{DEMO_CREDENTIALS.email} · {DEMO_CREDENTIALS.password}</button>
            </p>
            <p className="signup-prompt">Don’t have an account? <a href="mailto:hello@privacybuddy.dev?subject=Create%20an%20account">Create one</a></p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h5.4a4.6 4.6 0 0 1-2 3v2.8h3.5c2-1.9 3.2-4.6 3.2-7.9Z" />
      <path fill="#34A853" d="M12 22c2.9 0 5.3-.9 7-2.6l-3.5-2.8c-.9.7-2.1 1-3.5 1-2.7 0-5-1.8-5.9-4.3H2.6v2.8A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.1 13.3a6 6 0 0 1 0-3.8V6.7H2.6a10 10 0 0 0 0 9.4l3.5-2.8Z" />
      <path fill="#EA4335" d="M12 5.3c1.6 0 3 .5 4.1 1.6l3-3A10 10 0 0 0 2.6 6.7l3.5 2.8C7 7 9.3 5.3 12 5.3Z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M17.1 12.7c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.8-2c-1.6-.2-3.2 1-4 1-.9 0-2.2-1-3.6-.9a5.2 5.2 0 0 0-4.4 2.7c-1.9 3.2-.5 8 1.3 10.7.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.6-.9 1.6 0 2.1.9 3.6.9s2.4-1.3 3.3-2.6a10.7 10.7 0 0 0 1.5-3.1 4.6 4.6 0 0 1-3.1-4.6ZM14.4 5.1A4.7 4.7 0 0 0 15.5 1a4.8 4.8 0 0 0-3.2 2.2A4.4 4.4 0 0 0 11.2 7a4 4 0 0 0 3.2-1.9Z" />
    </svg>
  );
}
