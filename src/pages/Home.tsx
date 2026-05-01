import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import bikeImg from "@/assets/gallery-bike.jpg";
import plateImg from "@/assets/gallery-plate.jpg";
import wrapImg from "@/assets/gallery-wrap.jpg";
import ppfImg from "@/assets/gallery-ppf.jpg";
import laserImg from "@/assets/gallery-laser.jpg";
import wallpaperImg from "@/assets/gallery-wallpaper.jpg";
import { services } from "@/data/services";

const rotatingServices = [
  { label: "Bike and Car Wrapping", img: bikeImg },
  { label: "Car and Bike Number Plates", img: plateImg },
  { label: "Wrapping & Stickering", img: wrapImg },
  { label: "Car & Bike PPF", img: ppfImg },
  { label: "Laser Cut", img: laserImg },
  { label: "Wallpaper", img: wallpaperImg },
];

const reviews = [
  { name: "Arjun M.", text: "Absolutely flawless wrap on my GT-R. The attention to detail is unreal.", rating: 5 },
  { name: "Priya S.", text: "Best PPF service in town. My car looks brand new every single day.", rating: 5 },
  { name: "Rohan K.", text: "Custom plate and bike wrap — both turned out better than I imagined.", rating: 5 },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

const Home = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotatingServices.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCar}
            alt="Luxury black and gold sports car"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
          <div className="absolute inset-0 hero-glow" />
        </div>

        <div className="container-luxe relative z-10 pt-32 pb-12 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* LEFT: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-6"
            >
              — Premium Customization Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
            >
              ROYAL <span className="gradient-gold-text">TOUCH</span>
              <br />
              WRAPPING
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl"
            >
              Premium Car & Bike Customization Services
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm shadow-gold hover:scale-105 transition-transform"
              >
                Book Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-foreground hover:bg-primary/10 hover:border-primary transition-all font-medium tracking-wider uppercase text-sm"
              >
                View Services
              </Link>
            </motion.div>

            {/* Animated image strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 relative overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <motion.div
                className="flex gap-4 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {[...rotatingServices, ...rotatingServices].map((s, i) => (
                  <div
                    key={i}
                    className="group relative w-40 h-28 md:w-52 md:h-32 rounded-xl overflow-hidden border border-border hover:border-primary/60 transition-colors flex-shrink-0"
                  >
                    <img
                      src={s.img}
                      alt={s.label}
                      loading="lazy"
                      width={208}
                      height={128}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    <p className="absolute bottom-2 left-3 right-3 font-serif text-sm md:text-base text-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: rotating service image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* glow */}
            <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full opacity-60" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-primary/30 shadow-gold bg-card">
              <AnimatePresence mode="wait">
                <motion.img
                  key={rotatingServices[idx].label}
                  src={rotatingServices[idx].img}
                  alt={rotatingServices[idx].label}
                  width={1024}
                  height={1280}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />

              {/* label chip */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rotatingServices[idx].label + "-chip"}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">Service {String(idx + 1).padStart(2, "0")}</p>
                    <p className="font-serif text-2xl md:text-3xl text-foreground">{rotatingServices[idx].label}</p>
                  </motion.div>
                </AnimatePresence>

                {/* progress dots */}
                <div className="flex flex-col gap-1.5">
                  {rotatingServices.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === idx ? "w-6 bg-primary" : "w-1.5 bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-28">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What we craft</p>
            <h2 className="font-serif text-4xl md:text-6xl">
              Signature <span className="gradient-gold-text">Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
                <s.icon className="text-gold mb-6 relative" size={40} strokeWidth={1.4} />
                <h3 className="font-serif text-2xl mb-2 relative">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-28 bg-card/50 border-y border-border">
        <div className="container-luxe">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Loved by clients</p>
            <h2 className="font-serif text-4xl md:text-6xl">
              What Our <span className="gradient-gold-text">Clients</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-8 rounded-2xl bg-background border border-border hover:shadow-gold transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 font-serif text-lg italic">"{r.text}"</p>
                <p className="text-sm text-gold uppercase tracking-widest">{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28">
        <div className="container-luxe">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl border border-primary/30 p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 hero-glow" />
            <h2 className="relative font-serif text-4xl md:text-6xl mb-6">
              Ready for the <span className="gradient-gold-text">Royal Treatment?</span>
            </h2>
            <p className="relative text-muted-foreground max-w-xl mx-auto mb-10">
              Book a consultation today and let our experts craft something extraordinary.
            </p>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-10 py-4 rounded-full gradient-gold text-primary-foreground font-medium tracking-wider uppercase text-sm shadow-gold hover:scale-105 transition-transform"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
