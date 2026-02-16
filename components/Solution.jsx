import React from 'react'
import { motion } from 'framer-motion'

export default function Solution() {
  const features = [
    {
      icon: '🔒',
      title: 'Secure Transactions',
      description: 'Bank-level encryption protects every transaction',
    },
    {
      icon: '📊',
      title: 'Smart Dashboard',
      description: 'Real-time insights into your savings progress',
    },
    {
      icon: '📅',
      title: 'Monthly Discipline System',
      description: 'Structured withdrawals encourage consistency',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  const processSteps = [
    'Choose your daily savings amount',
    'Save consistently',
    'Track your progress visually',
    'Withdraw at month-end',
  ]

  return (
    <section id="Features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#F0FDF4] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#0F172A' }}
          >
            Meet Pennypal
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#6B7280' }}
          >
            Your journey to financial discipline starts here. Simple, secure, and designed for Nigerians.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-16 bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: '#0F172A' }}
          >
            How It Works
          </h3>
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: '#10B981' }}
                >
                  {index + 1}
                </div>
                <div className="pt-1">
                  <p
                    className="font-semibold"
                    style={{ color: '#0F172A' }}
                  >
                    {step}
                  </p>
                  {index === 3 && (
                    <p
                      className="text-sm mt-1"
                      style={{ color: '#6B7280' }}
                    >
                      Early withdrawal includes discipline fee
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-2xl shadow-lg border border-transparent hover:shadow-2xl transition-all"
            >
              {/* Icon background circle */}
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"
                style={{ backgroundColor: '#D1FAE5' }}
              >
                {feature.icon}
              </motion.div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#0F172A' }}
              >
                {feature.title}
              </h3>
              <p style={{ color: '#6B7280' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
