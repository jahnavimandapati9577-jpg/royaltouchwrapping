import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ eyebrow, title, subtitle }: Props) => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="absolute inset-0 hero-glow pointer-events-none" />
    <div className="container-luxe relative text-center">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.3em] text-gold mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-serif text-5xl md:text-7xl"
      >
        {title.split(" ").map((w, i) => (
          <span key={i} className={i % 2 === 1 ? "gradient-gold-text" : ""}>
            {w}{" "}
          </span>
        ))}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHeader;
