import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/ui/brand";

export function Navigation() {
  return (
    <header className="site-header">
      <Brand />
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#features">Features</a>
        <a href="#experience">How it works</a>
        <a href="#security">Security</a>
      </nav>
      <a className="nav-cta" href="#login">
        Try the demo <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </header>
  );
}
