import React from 'react'
import { motion } from 'framer-motion'

export default function WhyDifferent() {
  const advantages = [
    'No collector risk',
    'Real-time balance tracking',
    'Secure payment integration',
    'Withdrawal PIN protection',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#F0FDF4]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#0F172A' }}
          >
            Why Pennypal is Different
          </h2>
          <p
            className="text-lg"
            style={{ color: '#6B7280' }}
          >
            Unlike traditional ajo systems, Pennypal is fully digital, transparent, secure, and trackable in real time.
          </p>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="h-1 w-24 mx-auto mb-12 rounded-full origin-center"
          style={{ backgroundColor: '#10B981' }}
        ></motion.div>

        {/* Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 bg-white p-8 sm:p-12 rounded-2xl shadow-lg"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              {/* Checkmark */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: '#10B981' }}
              >
                ✓
              </motion.div>

              {/* Text */}
              <div className="pt-1">
                <p
                  className="text-lg font-semibold"
                  style={{ color: '#0F172A' }}
                >
                  {advantage}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-8 rounded-xl border-l-4"
          style={{ backgroundColor: '#F0FDF4', borderColor: '#10B981' }}
        >
          <p
            className="text-lg font-semibold italic"
            style={{ color: '#0F172A' }}
          >
            "Pennypal doesn't just help you save money – it helps you build financial confidence and discipline for a better future."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
