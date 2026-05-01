import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container-luxe py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl">
            <span className="gradient-gold-text">ROYAL</span> TOUCH
          </h3>
          <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
            Premium car & bike customization. Expert craftsmanship, finest materials, finishes that turn heads.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Connect</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> Visit our studio</li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Instagram size={14} className="text-gold" /> @royaltouchwrapping
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Royal Touch Wrapping. All rights reserved.</p>
          <p className="tracking-widest uppercase">Crafted with luxury in mind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
