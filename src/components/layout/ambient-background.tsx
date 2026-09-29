export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__grid" />
      <div className="ambient__orb ambient__orb--one" />
      <div className="ambient__orb ambient__orb--two" />
      <div className="ambient__arc ambient__arc--one" />
      <div className="ambient__arc ambient__arc--two" />
      <div className="ambient__stars" />
      <div className="ambient__shield"><ShieldMotif /></div>
    </div>
  );
}

function ShieldMotif() {
  return (
    <svg viewBox="0 0 220 260" fill="none">
      <path d="M110 12 205 50v72c0 61-39 106-95 126C54 228 15 183 15 122V50l95-38Z" stroke="currentColor" strokeWidth="16" />
      <path d="M79 126V98a31 31 0 0 1 62 0v28m-71 0h80v61H70v-61Z" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
    </svg>
  );
}
