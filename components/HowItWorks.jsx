import React from 'react'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      icon: '📝',
      title: 'Create Account',
      description: 'Sign up in minutes with basic information',
    },
    {
      icon: '🎯',
      title: 'Set Daily Savings',
      description: 'Choose your daily savings amount',
    },
    {
      icon: '💳',
      title: 'Deposit Daily',
      description: 'Save consistently through automated or manual deposits',
    },
    {
      icon: '🎉',
      title: 'Withdraw at Month-End',
      description: 'Access your full savings at month-end',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="HowItWorks" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            How It Works
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#6B7280' }}
          >
            Four simple steps to start your savings journey
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative"
            >
              {/* Step Card */}
              <div
                className="bg-white p-8 rounded-xl border-2 text-center h-full flex flex-col items-center justify-center"
                style={{ borderColor: '#E5E7EB' }}
              >
                {/* Step Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 font-bold text-white"
                  style={{ backgroundColor: '#10B981' }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: '#0F172A' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: '#6B7280' }}
                >
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile, shown on lg) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 origin-left"
                  style={{ backgroundColor: '#10B981' }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#F0FDF4] to-[#E0F9F7]"
        >
          <p
            className="text-center text-lg"
            style={{ color: '#0F172A' }}
          >
            <span className="font-bold">Pro Tip:</span> The longer you save, the better your financial health becomes. Build your discipline, build your future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
