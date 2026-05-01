import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Crown, Users, Tag, ShieldCheck, Zap } from "lucide-react";

const items = [
  { icon: Crown, title: "Premium Quality", text: "Only the finest materials sourced globally — built to outlast." },
  { icon: Users, title: "Expert Team", text: "Skilled craftsmen with years of high-end automotive experience." },
  { icon: Tag, title: "Affordable Pricing", text: "Luxury work at honest prices — no hidden costs, ever." },
  { icon: ShieldCheck, title: "Long-lasting Finish", text: "Finishes engineered to stay flawless season after season." },
  { icon: Zap, title: "Fast Delivery", text: "Quick turnaround without compromising a single detail." },
];

const WhyUs = () => (
  <>
    <PageHeader eyebrow="The Royal Difference" title="Why Choose Us" subtitle="Five reasons our clients keep coming back." />

    <section className="pb-28">
      <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative p-10 rounded-2xl bg-card border border-border hover:shadow-gold transition-shadow"
          >
            <div className="absolute top-6 right-6 font-serif text-5xl text-primary/20">0{i + 1}</div>
            <it.icon className="text-gold mb-6" size={40} strokeWidth={1.4} />
            <h3 className="font-serif text-2xl mb-3">{it.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default WhyUs;
