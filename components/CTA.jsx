import React from 'react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="CTA" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, #0F172A 0%, transparent 50%)`,
        }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: '#0F172A' }}
          >
            Start Building Financial Discipline Today.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#6B7280' }}
          >
            Join thousands of Nigerians already building their financial future with Pennypal.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
          >
            <button
              className="px-10 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:shadow-2xl transform hover:scale-105 inline-block"
              style={{ backgroundColor: '#10B981' }}
            >
              Start Saving Now
            </button>
          </motion.div>

          {/* Secondary Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm"
            style={{ color: '#6B7280' }}
          >
            No credit card required • Takes 2 minutes to sign up
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8 pt-12 border-t"
          style={{ borderColor: '#E5E7EB' }}
        >
          {[
            { stat: '50,000+', label: 'Active Savers' },
            { stat: '₦2B+', label: 'Total Saved' },
            { stat: '98.9%', label: 'Success Rate' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#10B981' }}
              >
                {item.stat}
              </div>
              <p
                className="text-sm sm:text-base"
                style={{ color: '#6B7280' }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          float: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 left-10 text-6xl opacity-5 pointer-events-none"
      >
        💚
      </motion.div>
      <motion.div
        animate={{
          float: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-10 text-6xl opacity-5 pointer-events-none"
      >
        💰
      </motion.div>
    </section>
  )
}
