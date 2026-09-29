import { Eye, MousePointer2, ShieldCheck, Sparkles } from "lucide-react";

const FEATURES = [
  {
    title: "Cursor-aware",
    body: "Follows your movement naturally.",
    icon: MousePointer2,
  },
  {
    title: "Privacy-first",
    body: "Looks away when things get private.",
    icon: ShieldCheck,
  },
  {
    title: "Delightful feedback",
    body: "Small reactions make login feel alive.",
    icon: Sparkles,
  },
] as const;

export function HeroCopy() {
  return (
    <section className="hero-copy" aria-labelledby="hero-title">
      <div className="eyebrow">
        <Sparkles size={15} aria-hidden="true" />
        Interactive Privacy Login
      </div>
      <h1 id="hero-title">
        Meet your smart <span>login companion.</span>
      </h1>
      <p className="hero-copy__lead">
        A little privacy buddy that follows your cursor, reacts to your typing, and knows when not to look.
      </p>
      <div className="feature-list" id="features">
        {FEATURES.map(({ title, body, icon: Icon }) => (
          <div className="feature" key={title}>
            <span className="feature__icon" aria-hidden="true"><Icon size={19} /></span>
            <span><strong>{title}</strong><small>{body}</small></span>
          </div>
        ))}
      </div>
      <p className="mobile-hint"><Eye size={15} aria-hidden="true" /> Buddy reacts as you fill the form</p>
    </section>
  );
}
