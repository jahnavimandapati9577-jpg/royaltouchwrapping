import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import bike from "@/assets/gallery-bike.jpg";
import wrap from "@/assets/gallery-wrap.jpg";
import plate from "@/assets/gallery-plate.jpg";
import ppf from "@/assets/gallery-ppf.jpg";
import wallpaper from "@/assets/gallery-wallpaper.jpg";
import laser from "@/assets/gallery-laser.jpg";
import hero from "@/assets/hero-car.jpg";

const items = [
  { src: hero, label: "Signature Wrap" },
  { src: bike, label: "Bike Custom" },
  { src: plate, label: "Custom Plates" },
  { src: wrap, label: "Vinyl Install" },
  { src: ppf, label: "PPF Protection" },
  { src: laser, label: "Laser Cut Detail" },
  { src: wallpaper, label: "Wallpaper Suite" },
];

const Gallery = () => (
  <>
    <PageHeader eyebrow="Our Work" title="The Gallery" subtitle="A glimpse into projects that turned heads." />

    <section className="pb-28">
      <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-5">
        {items.map((it, i) => (
          <motion.figure
            key={it.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border border-border ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
          >
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Project</p>
              <p className="font-serif text-2xl">{it.label}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  </>
);

export default Gallery;
