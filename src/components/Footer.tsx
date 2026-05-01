import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container-luxe py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-3 mb-2">
            <img src={logo} alt="Royal Touch Wrapping Logo" className="h-20 md:h-24 w-auto object-contain" />
            <h3 className="font-serif text-2xl md:text-3xl">
              <span className="gradient-gold-text">ROYAL</span> TOUCH 
              <span className="gradient-gold-text"> WRAPPING</span>
            </h3>
          </Link>
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
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +91 9494744537</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-gold" /> <a href="https://maps.app.goo.gl/yjrWpp5SNfQrzARR7" target="_blank">Visit our studio</a></li>
            <li>
              <a
                href="https://www.instagram.com/royal_touch_wrapping?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Instagram size={14} className="text-gold" /> @royaltouch wrapping
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
