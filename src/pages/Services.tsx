import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { services } from "@/data/services";

const Services = () => (
  <>
    <PageHeader eyebrow="What we offer" title="Our Premium Services" subtitle="Six signature crafts. One uncompromising standard." />

    <section className="pb-16 md:pb-28">
      <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-10 rounded-2xl bg-card border border-border hover:border-primary/70 transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-gold" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </>
);

export default Services;
