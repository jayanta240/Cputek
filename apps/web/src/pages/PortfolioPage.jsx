import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  Bot,
  GraduationCap,
  Film,
  Code,
  Palette,
  Users,
  Sparkles,
  Layers3,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation.jsx';
import { servicesData } from '@/data/services.js';

const servicePresentation = {
  'ai-solutions-enterprise-automation': {
    category: 'AI & Automation',
    icon: Bot,
    accent: 'text-cyan-300',
    tone: 'from-cyan-400/20 via-blue-500/10 to-transparent',
    tags: ['Artificial intelligence', 'Workflow automation', 'API integration'],
    summary: 'Custom AI models, intelligent workflows and enterprise integrations that reduce repetitive work and connect business systems.',
  },
  'elearning-corporate-training': {
    category: 'eLearning',
    icon: GraduationCap,
    accent: 'text-violet-300',
    tone: 'from-violet-400/20 via-fuchsia-500/10 to-transparent',
    tags: ['Instructional design', 'Interactive learning', 'SCORM & xAPI'],
    summary: 'Interactive, multimedia-rich corporate learning modules designed to make training more engaging and easier to deliver.',
  },
  'animation-explainer-videos': {
    category: 'Animation',
    icon: Film,
    accent: 'text-amber-300',
    tone: 'from-amber-400/25 via-yellow-500/10 to-transparent',
    tags: ['Visual storytelling', 'Motion design', 'Explainer videos'],
    summary: 'Animated stories and explainer videos that make complex products, services and ideas easier to understand.',
  },
  'enterprise-software-development': {
    category: 'Software',
    icon: Code,
    accent: 'text-emerald-300',
    tone: 'from-emerald-400/20 via-teal-500/10 to-transparent',
    tags: ['Web applications', 'Business systems', 'API integration'],
    summary: 'Purpose-built enterprise software and web applications shaped around business processes, teams and operational needs.',
  },
  'creative-design-brand-communication': {
    category: 'Creative',
    icon: Palette,
    accent: 'text-rose-300',
    tone: 'from-rose-400/20 via-orange-500/10 to-transparent',
    tags: ['Brand identity', 'Graphic design', 'Digital communication'],
    summary: 'Creative design and brand communication that help businesses present a consistent, clear and memorable identity.',
  },
  'human-resources-compliance': {
    category: 'HR & Compliance',
    icon: Users,
    accent: 'text-sky-300',
    tone: 'from-sky-400/20 via-indigo-500/10 to-transparent',
    tags: ['HR support', 'Compliance', 'People operations'],
    summary: 'Human resources and compliance support to help organizations manage people processes and workplace requirements.',
  },
};

const services = servicesData
  .filter((service) => servicePresentation[service.slug])
  .map((service) => ({ ...service, ...servicePresentation[service.slug] }));

const filters = ['All', ...services.map((service) => service.category)];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleServices = useMemo(
    () => activeFilter === 'All'
      ? services
      : services.filter((service) => service.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Our Services Portfolio | CPUTEK - Digital Solutions & Creative Services</title>
        <meta
          name="description"
          content="Explore all six CPUTEK services: AI automation, eLearning, animation, enterprise software, creative design, and HR compliance."
        />
      </Helmet>
      <Header />

      <main className="flex-grow pt-24">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.13),transparent_55%)]" />
          <div className="absolute -top-24 right-[-8rem] h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <ScrollRevealAnimation>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-7">
                  <Sparkles className="h-4 w-4" /> What we offer
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight">
                  Services designed to <span className="text-primary">move you forward.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
                  Explore CPUTEK's six service areas across intelligent automation, digital learning,
                  animation, enterprise software, creative design and HR compliance.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-black hover:shadow-[0_0_28px_rgba(255,215,0,0.25)] transition">
                    Discuss your project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-foreground hover:border-primary/60 hover:text-primary transition">
                    View all services
                  </Link>
                </div>
              </div>
            </ScrollRevealAnimation>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {[
                { value: '06', label: 'Service areas' },
                { value: 'AI + Tech', label: 'Intelligent solutions' },
                { value: 'Creative', label: 'Learning & communication' },
              ].map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6 backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollRevealAnimation>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7 mb-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-4">Our service portfolio</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Six ways we help businesses grow.</h2>
                  <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                    Choose a service area to explore how CPUTEK can support your organization.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === filter ? 'bg-primary text-black shadow-[0_0_20px_rgba(255,215,0,0.18)]' : 'border border-white/15 text-muted-foreground hover:border-primary/50 hover:text-primary'}`}
                      aria-pressed={activeFilter === filter}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollRevealAnimation>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    layout
                    key={service.slug}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] hover:border-primary/40 hover:bg-white/[0.055] transition duration-300"
                  >
                    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${service.tone}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.12),transparent_35%)]" />
                      <div className="absolute -right-8 -bottom-16 h-56 w-56 rounded-full border border-white/10" />
                      <div className="absolute -right-1 -bottom-9 h-40 w-40 rounded-full border border-white/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-3xl border border-white/15 bg-black/30 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition duration-500">
                          <Icon className={`h-11 w-11 ${service.accent}`} strokeWidth={1.4} />
                        </div>
                      </div>
                      <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/80">Service</span>
                    </div>
                    <div className="p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">{service.category}</p>
                      <h3 className="text-xl font-bold leading-snug">{service.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground min-h-[6rem]">{service.summary}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">{tag}</span>
                        ))}
                      </div>
                      <Link to={`/services/${service.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Explore service <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.10),transparent_60%)]" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Layers3 className="mx-auto h-10 w-10 text-primary mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Have a challenge worth solving?</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us what you need. We'll help identify the right service and shape a practical way forward.
            </p>
            <Link to="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-black hover:shadow-[0_0_28px_rgba(255,215,0,0.25)] transition">
              Let's talk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
