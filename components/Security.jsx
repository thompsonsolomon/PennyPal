import React from 'react'
import { motion } from 'framer-motion'

export default function Security() {
  const securityFeatures = [
    {
      icon: '🔐',
      title: 'Encrypted Transactions',
      description: 'All data encrypted with military-grade encryption',
    },
    {
      icon: '🏦',
      title: 'Secure Payment Processing',
      description: 'PCI-DSS compliant payment systems',
    },
    {
      icon: '🛡️',
      title: 'Fraud Monitoring',
      description: '24/7 fraud detection and prevention systems',
    },
    {
      icon: '🔑',
      title: 'Withdrawal PIN Protection',
      description: 'Additional layer of security for every withdrawal',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="Security" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Background Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden"
          style={{ backgroundColor: '#0F172A' }}
        >
          <div className="p-12 sm:p-16 lg:p-20">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: 'white' }}
              >
                Your Money. Protected.
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: '#D1D5DB' }}
              >
                We take your financial security seriously. Trust is everything.
              </p>
            </motion.div>

            {/* Security Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid md:grid-cols-2 gap-8"
            >
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  {/* Icon with background */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                    style={{ backgroundColor: '#10B981' }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: 'white' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: '#D1D5DB' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Shield Icon (background) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-0 right-0 text-9xl opacity-10 pointer-events-none"
            >
              🛡️
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p
            className="text-lg font-semibold"
            style={{ color: '#0F172A' }}
          >
            Regulated and compliant with Nigerian financial standards
          </p>
        </motion.div>
      </div>
    </section>
  )
}
