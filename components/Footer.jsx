import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="bg-white border-t" style={{ borderColor: '#E5E7EB' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div
              className="text-2xl font-bold mb-4"
              style={{ color: '#0F172A' }}
            >
              <img src="/asset/logofull-white.png" alt="" className='w-[250px]' />
            </div>
            <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>
              Building financial discipline for all Nigerians.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h4
              className="font-semibold mb-4"
              style={{ color: '#0F172A' }}
            >
              Product
            </h4>
            <ul className="space-y-2">
              {['Features', 'Security', 'Pricing', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{ color: '#6B7280' }}
                    className="hover:opacity-70 transition-opacity text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4
              className="font-semibold mb-4"
              style={{ color: '#0F172A' }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{ color: '#6B7280' }}
                    className="hover:opacity-70 transition-opacity text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4
              className="font-semibold mb-4"
              style={{ color: '#0F172A' }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Cookies', 'Support'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{ color: '#6B7280' }}
                    className="hover:opacity-70 transition-opacity text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div
          className="border-t my-8"
          style={{ borderColor: '#E5E7EB' }}
        ></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between"
        >
          <p
            style={{ color: '#6B7280' }}
            className="text-sm"
          >
            © 2024 Pennypal. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                style={{ color: '#10B981' }}
                className="hover:opacity-70 transition-opacity text-sm font-medium"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
