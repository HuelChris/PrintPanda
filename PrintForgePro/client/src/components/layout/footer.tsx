import { Link } from "wouter";
import { Printer, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-heading font-bold text-2xl text-white">
              <Printer className="w-8 h-8 text-secondary" />
              PrintForge
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professionelle 3D-Druckdienstleistungen für Ingenieure, Designer und Kreative. Wir bringen Ihre digitalen Designs mit Präzision und Geschwindigkeit in die physische Realität.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">FDM-Druck</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">SLA-Harz</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">SLS-Nylon</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary transition-colors">Rapid Prototyping</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Musterstraße 123,<br />10115 Berlin, Deutschland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+49 (0) 30 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>hallo@printforge.de</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">Abonnieren Sie unseren Newsletter für die neuesten Updates und Angebote.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-Mail eingeben" 
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-secondary flex-1"
              />
              <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                Anmelden
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} PrintForge. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
