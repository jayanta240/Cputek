import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ParticleBackground from '@/components/ParticleBackground.jsx';
import GlowButton from '@/components/GlowButton.jsx';
import ScrollRevealAnimation from '@/components/ScrollRevealAnimation.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';

const HomePage = () => {
  const navigate = useNavigate();

  const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(true);

const toggleVideo = () => {
  if (isPlaying) {
    videoRef.current.pause();
  } else {
    videoRef.current.play();
  }

  setIsPlaying(!isPlaying);
};

  const testimonials = [
    {
      name: 'Kevin Arnold',
      initials: 'KA',
      text: 'It was wonderful to work with Abanty and Arghish. I like their responsiveness and dedication throughout the entire process. The final product was excellent, and I\'m very pleased with the results. I highly recommend their services for anyone seeking high-quality design work.'
    },
    {
      name: 'Vimal Trivedi',
      initials: 'VT',
      text: 'I  from Hyderabad, and I would like to share my positive experience working with CPUTEK Pvt Ltd. Our collaboration has been extremely satisfying. The team at CPUTEK showcases remarkable efficiency and professionalism in all aspects of their work. Their innovative designs are both practical and tailored to our needs, making them a valuable partner in our projects. Additionally, their skilled and dedicated workforce fosters a collaborative atmosphere that enhances productivity. I also appreciate their commitment to delivering high-quality solutions at economical prices. Overall, CPUTEK Pvt Ltd has proven to be an excellent choice for our business needs.'
    },
    {
      name: 'Sayan Mandal',
      initials: 'SM',
      text: 'Working with CPUTEK has been an absolute game-changer for our brand. Their team\'s dedication, creativity, and attention to detail have truly exceeded our expectations. From the initial concept development to the final product, they brought our vision to life in the most spectacular way possible.\nThe level of professionalism demonstrated by the entire team was remarkable. They took the time to understand our goals and objectives, ensuring that every frame captured the essence of our app. The production process was seamless, with clear communication and timely updates at every stage.'
    },
    {
      name: 'Pratika Poorswani',
      initials: 'PP',
      text: 'It has been an absolute pleasure working with CPUTEK! Abanty and Arghish have been extremely cooperative and helpful with the projects. From onboarding to delivery, their process has been seamless and I look forward to establishing an ongoing partnership with them. Great job team!'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CPUtek - Creative Design Agency | Transforming Ideas into Digital Reality</title>
        <meta name="description" content="CPUtek is a creative design agency specializing in e-learning, digital marketing, graphics design, software development, and AI-powered solutions." />
      </Helmet>

      <Header />

      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/cputekvdo2.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/10" />

{/* Play Pause Button */}
<button
  onClick={toggleVideo}
  className="absolute bottom-6 right-6 z-20 bg-black/40 text-white px-5 py-2 rounded-full backdrop-blur-md border border-white/20 hover:bg-black/60 transition"
>
  {isPlaying ? "Pause" : "Play"}
</button>


          
          <ParticleBackground />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-6 justify-center z-20">
            

            

            <ScrollRevealAnimation direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GlowButton 
                  variant="primary" 
                  href="https://wa.me/918013920772?text=Hi%20CPUTEK%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20services"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </GlowButton>
                <GlowButton variant="secondary" onClick={() => navigate('/contact')}>
                  Contact Us
                </GlowButton>
              </div>
            </ScrollRevealAnimation>
          </div>
        </section>

        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollRevealAnimation>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                  Who we are
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  CPUtek is a forward-thinking creative agency dedicated to helping businesses thrive in the digital landscape. We combine strategic thinking with cutting-edge technology to deliver solutions that drive measurable results.
                </p>
              </div>
            </ScrollRevealAnimation>

            <ScrollRevealAnimation stagger={true}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { end: 150, suffix: '+', label: 'Projects Delivered' },
                  { end: 87, suffix: '%', label: 'Client Satisfaction' },
                  { end: 42, suffix: '+', label: 'Team Members' },
                  { end: 6, suffix: ' Years', label: 'Industry Experience' }
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-8 rounded-2xl text-center">
                    <div className="text-5xl font-bold mb-4">
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollRevealAnimation>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollRevealAnimation>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                  What our clients say
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Real feedback from businesses we've helped transform.
                </p>
              </div>
            </ScrollRevealAnimation>

            <ScrollRevealAnimation stagger={true}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} index={index} />
                ))}
              </div>
            </ScrollRevealAnimation>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <ParticleBackground />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollRevealAnimation>
              <div className="glass-base p-16 rounded-3xl border-primary/20 shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                  Ready to transform your business?
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss how we can help you achieve your digital goals with our expertise and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <GlowButton 
                    variant="primary" 
                    href="https://wa.me/918013920772?text=Hi%20CPUTEK%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </GlowButton>
                  <GlowButton variant="secondary" onClick={() => navigate('/about')}>
                    Learn More About Us
                  </GlowButton>
                </div>
              </div>
            </ScrollRevealAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
