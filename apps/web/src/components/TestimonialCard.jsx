import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 rounded-2xl group hover:bg-white/10 hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.1)] hover:border-primary/20 relative overflow-hidden h-full flex flex-col"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 smooth-transition group-hover:text-primary">
        <Quote className="w-20 h-20" />
      </div>
      
      <Quote className="w-8 h-8 text-primary mb-6 opacity-80 relative z-10" />
      
      <p className={`text-foreground leading-relaxed mb-3 italic relative z-10 whitespace-pre-line ${isExpanded ? '' : 'line-clamp-6'}`}>
        "{testimonial.text}"
      </p>
      <button
        type="button"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        aria-expanded={isExpanded}
        className="self-start text-primary text-sm font-semibold hover:underline mb-6 relative z-10"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      
      <div className="flex items-center gap-4 relative z-10 mt-auto">
        <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary/20 smooth-transition">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          {testimonial.role && <p className="text-sm text-muted-foreground">{testimonial.role}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;