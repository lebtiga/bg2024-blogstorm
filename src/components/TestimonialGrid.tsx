import React from 'react';
import { Quote, Star, Shield, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "BlogStorm has been an absolute game changer for automating semantic content and intent keywords for my clients. After the helpful content update, having an 'answer engine' became crucial for site owners. BlogStorm automates this process and integrates seamlessly with WordPress sites.",
    name: "Jordan Parker",
    company: "selsius.ai",
    image: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/455354226_122134214360293102_6850027882540391758_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wKL-1V77eMsQ7kNvgEqSVQb&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=AahzUegucx5Ujy7jJ1jShe-&oh=00_AYBM252GMaV8IYob129-9vY76S3CJx9Kt4LgQBwM5D6yMA&oe=67455071",
    featured: true,
    highlights: ["Semantic Content", "WordPress Integration", "Answer Engine"],
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    quote: "BlogStorm consistently generates high-ranking, lasting content for our clients while saving us valuable time. The constant feature updates and improvements make it even more exciting.",
    name: "Lior Manelis",
    company: "BlckPanda Creative",
    image: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/395552760_307496385399241_4624404199244515731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SNBlL0LmT7QQ7kNvgHR7H95&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=AtyZ3IyDiJhnalJWSVm8-ou&oh=00_AYBkRNQprRvuyBiagTsLJPf1IMHkCKzmIsoJ7X1dJv8G6A&oe=67457710",
    featured: true,
    highlights: ["High-Ranking Content", "Time Savings", "Regular Updates"],
    icon: <Award className="w-5 h-5" />
  },
  {
    quote: "After years of experience with various AI content tools like Jasper, SurferSEO, Frase.io, and ChatGPT, BlogStorm stands out for its affordability and ease of use. It helps me focus on profit-generating activities, and the content ranks well in the legal industry even without backlinks.",
    name: "Brian Ford",
    company: "Building Futures",
    image: "https://scontent-ord5-3.xx.fbcdn.net/v/t1.6435-9/96378280_3241955709171564_6060178621065068544_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r1ADQQpMUGYQ7kNvgG1Zb0P&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=Ar59TqjOQuBiWttD9S6pn3o&oh=00_AYBV7ExZswWO0gcRWDOK8GcIoYPpq16hHqSYJZrFOoKwaA&oe=6766F536",
    featured: true,
    highlights: ["Affordable", "Easy to Use", "Legal Industry Success"],
    icon: <Shield className="w-5 h-5" />
  },
  {
    quote: "BlogStorm is the biggest ace up my sleeve.",
    name: "Riz Mo",
    image: "https://scontent-ord5-3.xx.fbcdn.net/v/t1.6435-9/67673417_10105800085838656_3446005248315883520_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=lHXmpPc-gXUQ7kNvgFcBRdg&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=AoNRs1Zp-9uQPHLAkJKAD5p&oh=00_AYBEgGYOiR-8Bgn8hUYkm2rMGIhmAracgXeeOOXGMXFDwA&oe=6766F4F7",
    icon: <Star className="w-5 h-5" />
  },
  {
    quote: "Very smooth, very efficient and very effective!",
    name: "Randy The News Guy",
    image: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/312580075_108119278774517_7839839428492900392_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FjyOpihJh9oQ7kNvgF0ITd2&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=Aj7dW8IXTYMblhp79TX17FK&oh=00_AYBTHYtHUwKS1GrjRZJu4Bug9KELvtrEFnH6mg7Zc-dlvg&oe=67456B65",
    icon: <Users className="w-5 h-5" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export const TestimonialGrid: React.FC = () => {
  return (
    <div className="mb-16">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-white/10 mb-6"
        >
          <Star className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </span>
          <Star className="w-5 h-5 text-purple-400" />
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join hundreds of satisfied founders who've transformed their content strategy with BlogStorm
        </p>
      </motion.div>

      {/* Featured Testimonials */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 gap-6 mb-8"
      >
        {TESTIMONIALS.filter(t => t.featured).map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card rounded-2xl p-6 relative group hover:border-emerald-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/5"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            {/* Icon */}
            <div className="mb-6 flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                {testimonial.icon}
              </div>
              <Quote className="w-6 h-6 text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              {testimonial.highlights && (
                <div className="flex flex-wrap gap-2">
                  {testimonial.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-xs text-emerald-400"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {highlight}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
                </div>
                <div>
                  <div className="font-medium text-white">{testimonial.name}</div>
                  {testimonial.company && (
                    <div className="text-sm text-emerald-400">{testimonial.company}</div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Testimonials */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6"
      >
        {TESTIMONIALS.filter(t => !t.featured).map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card rounded-2xl p-6 relative group hover:border-purple-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/5"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-px bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  {testimonial.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">{testimonial.name}</div>
                </div>
                <Quote className="w-5 h-5 text-purple-400/20 group-hover:text-purple-400/40 transition-colors duration-300" />
              </div>

              <div className="relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden absolute -left-2 top-1/2 -translate-y-1/2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
                </div>
                <p className="text-gray-300 text-sm pl-14">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};