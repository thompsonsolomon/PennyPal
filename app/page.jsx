'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import WhyDifferent from '@/components/WhyDifferent'
import Security from '@/components/Security'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <WhyDifferent />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}
