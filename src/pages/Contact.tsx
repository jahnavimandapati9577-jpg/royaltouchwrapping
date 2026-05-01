import { motion } from "framer-motion";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Phone, MapPin, Instagram, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHeader eyebrow="Get in Touch" title="Contact Us" subtitle="Tell us about your dream project. We'll make it real." />

      <section className="pb-16 md:pb-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="font-serif text-3xl mb-6">Reach <span className="gradient-gold-text">us directly</span></h3>

              <a href="tel:+910000000000" className="flex items-center gap-4 py-4 border-b border-border hover:text-gold transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 00000 00000</p>
                </div>
              </a>

              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 border-b border-border hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20">
                  <MessageCircle size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                  <p className="font-medium">Chat with us instantly</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/yjrWpp5SNfQrzARR7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 border-b border-border hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-medium">View on Google Maps</p>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 py-4 hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20">
                  <Instagram size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
                  <p className="font-medium">@royaltouchwrapping</p>
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full gradient-gold text-primary-foreground font-medium uppercase tracking-wider text-sm shadow-gold hover:scale-[1.02] transition-transform"
            >
              <MessageCircle size={18} /> Message on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl bg-card border border-border space-y-5"
          >
            <h3 className="font-serif text-3xl mb-2">Send a <span className="gradient-gold-text">message</span></h3>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full gradient-gold text-primary-foreground font-medium uppercase tracking-wider text-sm shadow-gold hover:scale-[1.02] transition-transform"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
