import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="Home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: '#0F172A' }}
          >
            Save Daily. Withdraw Monthly. Stay Disciplined.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl"
            style={{ color: '#6B7280' }}
          >
            Pennypal helps Nigerians build financial discipline through structured daily savings with secure monthly withdrawals.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg transform hover:scale-105"
              style={{ backgroundColor: '#10B981' }}
            >
              Get Started
            </button>
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105"
              style={{
                color: '#0F172A',
                borderColor: '#0F172A',
                borderWidth: '2px',
              }}
            >
              How It Works
            </button>
          </motion.div>
        </motion.div>

        {/* Right Illustration - Dashboard Card Mockup */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileInView="float"
          viewport={{ once: true }}
          className="relative h-96 hidden lg:block"
        >
          <div
            className="absolute inset-0 rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: 'white' }}
          >
            {/* Header */}
            <div className="space-y-4 pb-8">
              <div
                className="h-3 w-1/3 rounded"
                style={{ backgroundColor: '#10B981' }}
              ></div>
              <div
                className="h-2 w-1/4 rounded"
                style={{ backgroundColor: '#E5E7EB' }}
              ></div>
            </div>

            {/* Chart mockup */}
            <div className="space-y-4">
              <div className="flex items-end gap-2 h-32 pt-4 pb-4">
                {[40, 60, 75, 85, 90, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t transition-all"
                    style={{
                      height: `${height}%`,
                      backgroundColor: i % 2 === 0 ? '#10B981' : '#D1FAE5',
                    }}
                  ></div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: '#F0FDF4' }}
                >
                  <div
                    className="text-xs"
                    style={{ color: '#6B7280' }}
                  >
                    Monthly Target
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: '#10B981' }}
                  >
                    ₦30,000
                  </div>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: '#F0FDF4' }}
                >
                  <div
                    className="text-xs"
                    style={{ color: '#6B7280' }}
                  >
                    Saved So Far
                  </div>
                  <div
                    className="text-xl font-bold"
                    style={{ color: '#10B981' }}
                  >
                    ₦24,500
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: '#10B981' }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
