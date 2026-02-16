import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold flex items-center gap-2"
          style={{ color: '#0F172A' }}
        >
          <img src="/asset/logoround-white.png" className='w-[30px]' alt="" />
          Pennypal
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'HowItWorks', 'Features', 'Security'].map((link, i) => (
            <motion.button
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              onClick={() => handleNavClick(link)}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: '#111827' }}
            >
              {link === 'HowItWorks' ? 'How It Works' : link}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          onClick={() => handleNavClick('CTA')}
          className="px-6 py-2 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: '#10B981' }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  )
}
