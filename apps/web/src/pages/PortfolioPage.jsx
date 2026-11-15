import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Bot, Code2, GraduationCap, Palette, Sparkles, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation.jsx';

const projects = [
  {
    id: 'ai-learning',
    title: 'AI-Powered Learning Management System',
    category: 'AI & Software',
    type: 'Product',
    description: 'A workplace learning platform that connects company knowledge with role-based learning, assessments and an AI learning assistant.',
    tags: ['AI', 'Learning platform', 'Knowledge assistant'],
    icon: GraduationCap,
    tone: 'from-amber-400/25 via-yellow-500/10 to-transparent',
    accent: 'text-amber-300',
    href: '/products/ai-learning-management-system',
  },
  {
    id: 'automation',
    title: 'AI Solutions & Enterprise Automation',
    category: 'AI & Software',
    type: 'Service',
    description: 'Purpose-built AI workflows, system integrations and automation designed around business operations.',
    tags: ['Artificial intelligence', 'Workflow automation', 'API integration'],
    icon: Bot,
    tone: 'from-cyan-400/20 via-blue-500/10 to-transparent',
    accent: 'text-cyan-300',
    href: '/services/ai-solutions-enterprise-automation',
  },
  {
    id: 'elearning',
    title: 'eLearning & Corporate Training',
    category: 'eLearning',
    type: 'Service',
    description: 'Digital learning experiences that turn complex information into structured, engaging training content.',
    tags: ['Instructional design', 'Interactive learning', 'Training'],
    icon: GraduationCap,
    tone: 'from-violet-400/20 via-fuchsia-500/10 to-transparent',
    accent: 'text-violet-300',
    href: '/services/elearning-corporate-training',
  },
  {
    id: 'software',
    title: 'Enterprise Software Development',
    category: 'Web & Software',
    type: 'Service',
    description: 'Custom web applications and business software built to fit existing processes and scale with teams.',
    tags: ['Web applications', 'Backend systems', 'Integrations'],
    icon: Code2,
    tone: 'from-emerald-400/20 via-teal-500/10 to-transparent',
    accent: 'text-emerald-300',
    href: '/services/enterprise-software-development',
  },
  {
    id: 'creative',
    title: 'Creative Design & Brand Communication',
    category: 'Creative',
    type: 'Service',
    description: 'Visual communication and digital creative that help brands present a consistent, clear identity.',
    tags: ['Graphic design', 'Brand identity', 'Digital creative'],
    icon: Palette,
    tone: 'from-rose-400/20 via-orange-500/10 to-transparent',
    accent: 'text-rose-300',
    href: '/services/creative-design-brand-communication',
  },
];

const filters = ['All', 'AI & Software', 'eLearning', 'Web & Software', 'Creative'];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Portfolio | CPUTEK - Digital Solutions & Creative Work</title>
        <meta name="description" content="Explore CPUTEK's featured digital solutions across AI, enterprise software, eLearning and creative design." />
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
                  <Sparkles className="h-4 w-4" /> What we create
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight">
                  Ideas made <span className="text-primary">real.</span>
                  <br />Solutions built to move you forward.
                </h1>
                <p className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
                  Explore CPUTEK's work across intelligent software, digital learning and creative experiences. Each solution starts with a business challenge and is shaped around a clear goal.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-black hover:shadow-[0_0_28px_rgba(255,215,0,0.25)] transition">
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-foreground hover:border-primary/60 hover:text-primary transition">
                    Explore services
                  </Link>
                </div>
              </div>
            </ScrollRevealAnimation>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {[
                { value: 'AI', label: 'Intelligent solutions' },
                { value: 'Web', label: 'Software experiences' },
                { value: 'Learn', label: 'Digital learning' },
                { value: 'Create', label: 'Creative communication' },
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
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary mb-4">Selected capabilities</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built around your next big idea.</h2>
                  <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">A closer look at the solution areas CPUTEK brings together for modern businesses.</p>
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
              {visibleProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.article
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] hover:border-primary/40 hover:bg-white/[0.055] transition duration-300"
                  >
                    <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.tone}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.12),transparent_35%)]" />
                      <div className="absolute -right-8 -bottom-16 h-56 w-56 rounded-full border border-white/10" />
                      <div className="absolute -right-1 -bottom-9 h-40 w-40 rounded-full border border-white/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-3xl border border-white/15 bg-black/30 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition duration-500">
                          <Icon className={`h-11 w-11 ${project.accent}`} strokeWidth={1.4} />
                        </div>
                      </div>
                      <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium text-white/80">{project.type}</span>
                    </div>
                    <div className="p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">{project.category}</p>
                      <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground min-h-[5rem]">{project.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}
                      </div>
                      <Link to={project.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Explore solution <ArrowRight className="h-4 w-4" />
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
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">Tell us what you're building. We'll help shape the right combination of technology, creativity and expertise.</p>
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
