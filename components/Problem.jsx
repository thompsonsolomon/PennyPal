import React from 'react'
import { motion } from 'framer-motion'

export default function Problem() {
  const problems = [
    {
      icon: '💰',
      title: 'Salary finishes before month end',
      description: 'Without a structured plan, money disappears quickly',
    },
    {
      icon: '📉',
      title: 'Poor savings discipline',
      description: 'Hard to save without accountability and structure',
    },
    {
      icon: '⚠️',
      title: 'Risky informal ajo systems',
      description: 'No security or guarantee with traditional methods',
    },
    {
      icon: '🎯',
      title: 'No structured digital savings plan',
      description: 'Lack of transparent and trackable options',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            The Problem With Saving in Nigeria
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="p-8 rounded-xl bg-white border transition-all cursor-default"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: '#0F172A' }}
              >
                {problem.title}
              </h3>
              <p style={{ color: '#6B7280' }}>
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
