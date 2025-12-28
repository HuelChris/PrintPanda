import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Printer } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/services", label: "Leistungen" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-heading font-bold text-2xl text-primary">
            <Printer className="w-8 h-8 text-secondary" />
            PrintForge
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-sm font-semibold transition-colors hover:text-secondary ${
                  location === link.href ? "text-secondary" : "text-foreground"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/quote">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full px-6">
              Angebot anfordern
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`text-lg font-semibold py-2 ${
                  location === link.href ? "text-secondary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/quote">
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-full">
              Angebot anfordern
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
