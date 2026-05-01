import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-wider">
            <span className="gradient-gold-text">ROYAL</span>
            <span className="text-foreground"> TOUCH</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-widest font-medium transition-colors ${
                    isActive ? "text-gold" : "text-foreground/80 hover:text-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 right-0 h-px bg-primary"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full gradient-gold text-primary-foreground font-medium text-sm tracking-wider uppercase shadow-gold hover:scale-105 transition-transform"
        >
          Book Now
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <ul className="container-luxe py-6 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block py-2 text-base uppercase tracking-widest ${isActive ? "text-gold" : "text-foreground"}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex justify-center items-center px-6 py-3 rounded-full gradient-gold text-primary-foreground font-medium uppercase tracking-wider"
              >
                Book Now
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
