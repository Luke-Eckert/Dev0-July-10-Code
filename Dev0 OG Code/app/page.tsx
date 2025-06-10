"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Download,
  TrendingUp,
  Shield,
  Globe,
  Users,
  Building2,
  Star,
  Check,
  ChevronRight,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [visibleSection, setVisibleSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine which section is in view
      const sections = document.querySelectorAll("section")
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setVisibleSection(index)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showModal = (id: string) => {
    setActiveModal(id)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-purple-900/90" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <Image
                src="/images/hoft-logo-clean.png"
                alt="House of Finance & Tech Berlin"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              House of Finance & Tech Berlin
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-90 leading-relaxed mb-12"
          >
            Your gateway to Berlin's thriving FinTech ecosystem. Get your EU Blue Card, establish your company, and
            accelerate your business growth in Europe's financial technology capital.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div variants={fadeIn}>
              <Link href="/getting-started">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeIn}>
              <button
                onClick={() => showModal("scale-up-application")}
                className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Join Scale-Up Academy
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <Image src="/images/hoft-logo-clean.png" alt="HoFT Logo" width={60} height={60} className="h-12 w-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berlin's FinTech Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Europe's fastest-growing financial technology hub</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                number: "340+",
                label: "FinTech Companies",
                sublabel: "Funded startups",
              },
              {
                number: "€11.4B",
                label: "Total Funding",
                sublabel: "Since 2010",
              },
              {
                number: "85%",
                label: "German Market Share",
                sublabel: "FinTech investment",
              },
              {
                number: "€43,760",
                label: "Blue Card Minimum",
                sublabel: "2025 salary threshold",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New 2025 Blue Card Announcement */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
                  NEW: 2025 EU BLUE CARD IMPROVEMENTS
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Lower Salary Requirements, Online Applications & Faster Processing
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  The EU Blue Card process has been dramatically improved for 2025. Lower salary thresholds (€43,760 for
                  shortage occupations), online applications, and family benefits including parents make relocation
                  easier than ever.
                </p>
                <Link href="/getting-started">
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
                    Learn About Blue Card Process
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/blue-card-process.png"
                    alt="EU Blue Card Process"
                    width={500}
                    height={350}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="font-semibold">2025 Blue Card Process</div>
                      <div className="text-sm opacity-80">Streamlined for entrepreneurs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Incorporation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dual-Track Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Run your company registration and personal relocation processes in parallel to save time
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16"
          >
            <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Complete Relocation Process</h3>
                  <p className="text-gray-600 mb-6">
                    Our streamlined approach combines both personal relocation and company registration into a parallel
                    process, reducing your total setup time from 6+ months to just 2-4 months.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Company Level</h4>
                        <p className="text-gray-600 text-sm">Legal structure, registration, banking, and compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Individual Level</h4>
                        <p className="text-gray-600 text-sm">
                          Visa, residence permit, housing, and personal integration
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/getting-started">
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
                        View Complete Process
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/incorporation-process.png"
                      alt="Incorporation Process"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Berlin Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Berlin?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Berlin has become Europe's premier destination for fintech innovation
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Globe,
                title: "Gateway to Europe",
                description:
                  "Access 450M+ European consumers through Germany's largest economy and strategic EU location.",
                image: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?q=80&w=1170&auto=format&fit=crop",
              },
              {
                icon: TrendingUp,
                title: "Thriving Ecosystem",
                description: "Join 340+ funded FinTechs in Europe's second-largest financial technology hub.",
                image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1169&auto=format&fit=crop",
              },
              {
                icon: Shield,
                title: "Regulatory Advantage",
                description: "BaFin approval provides EU-wide recognition and credibility for your financial services.",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop",
              },
              {
                icon: Users,
                title: "International Talent",
                description: "Access diverse, English-speaking workforce with 40,000+ international students.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop",
              },
              {
                icon: Building2,
                title: "Flexible Infrastructure",
                description: "From co-working spaces to tech hubs, find the perfect environment for your growing team.",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169&auto=format&fit=crop",
              },
              {
                icon: Star,
                title: "Quality of Life",
                description:
                  "Enjoy work-life balance in a city known for culture, reasonable costs, and creative energy.",
                image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1170&auto=format&fit=crop",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${feature.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/why-berlin">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center">
                Learn More About Berlin
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from entrepreneurs who've successfully established their businesses in Berlin
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote:
                  "HoFT's guidance through both the Blue Card and company registration was invaluable. We completed both processes in parallel and were operational in 3 months.",
                name: "Sarah Johnson",
                title: "CEO, PayTech Solutions",
                avatar:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&crop=faces&faceindex=1",
              },
              {
                quote:
                  "The 2025 Blue Card improvements made our relocation so much easier. Lower salary requirements and online applications saved us months.",
                name: "Michael Schmidt",
                title: "Founder, InvestAI",
                avatar:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&crop=faces&faceindex=1",
              },
              {
                quote:
                  "As a non-EU founder, the parallel process approach was perfect. I got my Blue Card while setting up the company - no legal complications.",
                name: "Aisha Patel",
                title: "CTO, SecureFinance",
                avatar:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&crop=faces&faceindex=1",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                </div>
                <div className="text-gray-600 italic mb-6">"{testimonial.quote}"</div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/hoft-logo-clean.png"
              alt="HoFT Logo"
              width={80}
              height={80}
              className="h-16 w-16 bg-white/10 backdrop-blur-sm p-2 rounded-xl"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Berlin's FinTech Revolution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Start your journey with our streamlined 2025 process for both EU Blue Card and company registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/getting-started">
              <button className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Your Journey
              </button>
            </Link>
            <button
              onClick={() => showModal("download-guide")}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Download Guide
              <Download className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Modals */}
      <Dialog open={activeModal === "scale-up-application"} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Apply to Scale-Up Academy</DialogTitle>
            <DialogDescription>
              Join our exclusive program designed to accelerate your company's growth in Berlin
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Company Stage</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Pre-Seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B+</option>
                  <option>Established</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">What are your main challenges?</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Tell us about your specific challenges..."
                ></textarea>
              </div>

              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Submit Application
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === "download-guide"} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Download Berlin FinTech Guide</DialogTitle>
            <DialogDescription>Get our comprehensive guide to Berlin's FinTech ecosystem</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="mb-6">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-blue-600 text-center">
                  <Download className="h-12 w-12 mx-auto mb-2" />
                  <div className="font-semibold">Berlin FinTech Guide</div>
                </div>
              </div>
              <p className="text-gray-600">
                Get our comprehensive guide to Berlin's FinTech ecosystem, including EU Blue Card process, company
                registration, and growth opportunities.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Download Now
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
