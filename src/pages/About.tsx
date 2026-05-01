import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Award, Sparkles, Wrench } from "lucide-react";
import wrapImg from "@/assets/gallery-wrap.jpg";

const points = [
  { icon: Sparkles, title: "Premium Materials", text: "Only the world's finest vinyls, films and finishes touch your vehicle." },
  { icon: Wrench, title: "Expert Finishing", text: "Decades of combined craftsmanship in every cut, every edge, every curve." },
  { icon: Award, title: "Stylish Customization", text: "Bespoke designs tailored to your taste — never templates, always one-of-a-kind." },
];

const About = () => (
  <>
    <PageHeader eyebrow="Our Story" title="About Royal Touch" subtitle="Where automotive passion meets uncompromising luxury." />

    <section className="py-16 md:py-20">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-border shadow-elegant"
        >
          <img src={wrapImg} alt="Premium car wrap installation" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Brand</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Crafting the <span className="gradient-gold-text">extraordinary</span> on every vehicle.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Royal Touch Wrapping is a premium customization studio dedicated to redefining how cars and bikes look on the road. From flawless wraps to gallery-grade laser cut details, every project is a statement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We pair the finest materials with obsessive attention to detail, delivering finishes that don't just last — they make people stop and stare.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-card/50 border-y border-border">
      <div className="container-luxe grid md:grid-cols-3 gap-8">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-background border border-border text-center"
          >
            <p.icon className="mx-auto text-gold mb-4" size={36} strokeWidth={1.4} />
            <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </>
);

export default About;
