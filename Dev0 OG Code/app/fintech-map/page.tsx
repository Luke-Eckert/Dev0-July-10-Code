"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Download, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const timelinePhases = [
  {
    phase: "Phase 1",
    title: "Pre-Arrival Planning",
    duration: "3-6 Months Before",
    tasks: [
      "Financial Preparation (€15,000-30,000 savings)",
      "Document Collection & Apostilling",
      "Business Plan Development",
      "Remote Consultations Setup",
      "German Language Learning (A1 minimum)",
    ],
    costs: "€2,000-5,000",
    description: "Essential preparation work you can complete from your home country",
    keyPoints: [
      "Budget Requirements: €15,000-30,000 per person",
      "Hidden costs: IHK membership, insurance, tax advisor",
      "Document apostilling and certification",
      "Virtual consultations with experts",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    phase: "Phase 2",
    title: "Visa & Immigration",
    duration: "2-3 Months Before",
    tasks: [
      "Self-Employment Visa Application",
      "Health Insurance Arrangement",
      "Temporary Accommodation Booking",
      "Business Immigration Service (optional)",
      "Criminal Background Check",
    ],
    costs: "€75-1,100",
    description: "Navigate German immigration requirements and secure legal entry",
    keyPoints: [
      "Processing time: 4-12 weeks",
      "Fast-track BIS option available",
      "Health insurance mandatory",
      "Business plan required",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    phase: "Phase 3",
    title: "First Week in Berlin",
    duration: "Days 1-7",
    tasks: [
      "Secure Temporary Housing",
      "German SIM Card & Phone Number",
      "Bank Account Opening",
      "Anmeldung Appointment Booking",
      "Initial Networking",
    ],
    costs: "€500-1,500",
    description: "Critical first steps to establish your presence in Berlin",
    keyPoints: [
      "Anmeldung appointment: 3-6 week wait",
      "Bank account possible before Anmeldung",
      "Prepare 'tenant CV' for housing",
      "Digital banks: N26, Vivid, Revolut",
    ],
    image: "/images/berlin-office.jpg",
  },
  {
    phase: "Phase 4",
    title: "Business Registration",
    duration: "Weeks 2-4",
    tasks: [
      "Choose Legal Structure (GmbH/UG)",
      "Notary Appointment & Articles",
      "Commercial Register Entry",
      "Tax Registration (Finanzamt)",
      "Trade License (Gewerbeanmeldung)",
    ],
    costs: "€500-25,500",
    description: "Formal company establishment and regulatory compliance",
    keyPoints: [
      "GmbH: €25,000 capital, better reputation",
      "UG: €1 minimum, less credibility",
      "Notary cost: €500-1,500",
      "Tax registration within 4 weeks",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    phase: "Phase 5",
    title: "Operational Setup",
    duration: "Months 2-3",
    tasks: [
      "Office Space Selection",
      "Hiring & Compliance Setup",
      "Insurance & Benefits",
      "IT Infrastructure",
      "Industry-Specific Licenses",
    ],
    costs: "€1,000-5,000/month",
    description: "Build operational infrastructure and team",
    keyPoints: [
      "Office costs: €12-40/sqm by district",
      "Employer contributions: ~20% of salary",
      "Mandatory insurances required",
      "BaFin licensing: 6-12 months",
    ],
    image: "/images/berlin-office-space.jpg",
  },
  {
    phase: "Phase 6",
    title: "Financial Optimization",
    duration: "Months 3-6",
    tasks: [
      "R&D Tax Benefits Application",
      "Banking Relationship Building",
      "Accounting System Setup",
      "Tax Optimization Strategy",
      "Grant Applications",
    ],
    costs: "€200-500/month",
    description: "Optimize financial structure and access funding opportunities",
    keyPoints: [
      "R&D subsidy: 25% up to €500,000/year",
      "Relocation expenses deductible",
      "Traditional banks for lending",
      "Professional tax advisory essential",
    ],
    image: "/images/berlin-fintech.jpg",
  },
  {
    phase: "Phase 7",
    title: "Integration & Growth",
    duration: "Months 4-12",
    tasks: [
      "Network Building & Events",
      "Team Expansion",
      "Market Entry Strategy",
      "Customer Acquisition",
      "Scaling Operations",
    ],
    costs: "Variable",
    description: "Scale operations and integrate into Berlin's business ecosystem",
    keyPoints: [
      "Join industry associations",
      "Attend networking events",
      "Hire German-speaking staff",
      "Build local partnerships",
    ],
    image: "/images/berlin-networking.jpg",
  },
  {
    phase: "Phase 8",
    title: "Long-term Success",
    duration: "Year 1+",
    tasks: [
      "Permanent Residency Application",
      "Market Expansion",
      "Investment Rounds",
      "Strategic Partnerships",
      "Exit Planning",
    ],
    costs: "Growth-dependent",
    description: "Establish long-term presence and plan for expansion",
    keyPoints: [
      "Permanent residency after 3 years",
      "German language A1 required",
      "Consider other German cities",
      "Investment visa option: €500k+",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

const berlinDistricts = [
  {
    name: "Mitte",
    description: "Corporate headquarters and government district - the heart of Berlin's business world",
    officePrice: "€25-40/sqm",
    companies: 45,
    focus: "FinTech, Corporate Banking, RegTech",
    highlights: ["Government proximity", "Corporate prestige", "Central location", "Excellent transport"],
    image: "/images/berlin-fintech.jpg",
  },
  {
    name: "Kreuzberg",
    description: "Vibrant startup hub with creative energy and diverse tech scene",
    officePrice: "€20-30/sqm",
    companies: 67,
    focus: "Digital Banking, Payments, Crypto",
    highlights: ["Startup ecosystem", "Creative culture", "Networking events", "Young talent"],
    image: "/images/berlin-office-space.jpg",
  },
  {
    name: "Friedrichshain",
    description: "Tech companies and scale-ups in a dynamic, growing district",
    officePrice: "€18-25/sqm",
    companies: 34,
    focus: "InsurTech, WealthTech, Lending",
    highlights: ["Tech concentration", "Scale-up friendly", "Modern offices", "Good value"],
    image: "/images/berlin-apartment.jpg",
  },
  {
    name: "Charlottenburg",
    description: "Traditional business district with established corporate presence",
    officePrice: "€22-35/sqm",
    companies: 28,
    focus: "Traditional Banking, Consulting",
    highlights: ["Corporate tradition", "Professional services", "Established networks", "Premium locations"],
    image: "/images/berlin-networking.jpg",
  },
  {
    name: "Prenzlauer Berg",
    description: "Creative hub with stylish offices in renovated historic buildings",
    officePrice: "€20-28/sqm",
    companies: 19,
    focus: "FinTech Design, UX/UI, Marketing",
    highlights: ["Creative atmosphere", "Historic charm", "Design focus", "Quality of life"],
    image: "/images/berlin-office.jpg",
  },
]

export default function FinTechMapPage() {
  const [selectedPhase, setSelectedPhase] = useState(0)
  const [selectedDistrict, setSelectedDistrict] = useState("Mitte")

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Different from homepage */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-fintech.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-purple-900/90" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
              <Image
                src="/images/hoft-logo.png"
                alt="House of Finance & Tech Berlin"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Berlin{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FinTech Ecosystem
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-90 leading-relaxed mb-12">
            Your comprehensive guide to Berlin's FinTech landscape — from company relocation to market domination.
            Navigate the complete journey with expert insights and proven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center">
              Download Complete Guide
              <Download className="ml-2 h-5 w-5" />
            </button>
            <a href="#timeline">
              <button className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                Explore Timeline
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berlin FinTech at a Glance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Europe's fastest-growing financial technology hub</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                number: "6-7",
                label: "Unicorns",
                sublabel: "$1B+ valuation",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section id="timeline" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company Relocation Timeline</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your complete 8-phase roadmap to successfully moving your company to Berlin — from initial planning to
              long-term success
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {timelinePhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setSelectedPhase(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPhase === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {phase.phase}
              </button>
            ))}
          </div>

          {/* Selected Phase Details */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={timelinePhases[selectedPhase].image || "/placeholder.svg"}
                    alt={timelinePhases[selectedPhase].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-semibold opacity-90">{timelinePhases[selectedPhase].phase}</div>
                    <h3 className="text-3xl font-bold mb-2">{timelinePhases[selectedPhase].title}</h3>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      {timelinePhases[selectedPhase].duration}
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {timelinePhases[selectedPhase].description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold">
                      Cost: {timelinePhases[selectedPhase].costs}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                        <CheckCircle className="h-6 w-6 mr-3 text-green-600" />
                        Key Tasks
                      </h4>
                      <ul className="space-y-3">
                        {timelinePhases[selectedPhase].tasks.map((task, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
                        <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                        Key Insights
                      </h4>
                      <ul className="space-y-3">
                        {timelinePhases[selectedPhase].keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => setSelectedPhase(Math.max(0, selectedPhase - 1))}
                className={`p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all ${selectedPhase === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
                disabled={selectedPhase === 0}
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={() => setSelectedPhase(Math.min(timelinePhases.length - 1, selectedPhase + 1))}
                className={`p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all ${selectedPhase === timelinePhases.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
                disabled={selectedPhase === timelinePhases.length - 1}
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Berlin Districts Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berlin Business Districts</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore Berlin's key business districts and find the perfect location for your company's European
              headquarters
            </p>
          </div>

          <Tabs value={selectedDistrict} onValueChange={setSelectedDistrict} className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-16 bg-gray-100 p-1 rounded-lg">
              {berlinDistricts.map((district) => (
                <TabsTrigger
                  key={district.name}
                  value={district.name}
                  className="text-sm font-semibold py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  {district.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {berlinDistricts.map((district) => (
              <TabsContent key={district.name} value={district.name}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-80 lg:h-auto">
                      <img
                        src={district.image || "/placeholder.svg"}
                        alt={`Berlin ${district.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">{district.name}</h3>
                        <p className="text-lg opacity-90">{district.focus}</p>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{district.name}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{district.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{district.officePrice}</div>
                          <div className="text-sm text-gray-600 font-medium">Office Price</div>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{district.companies}</div>
                          <div className="text-sm text-gray-600 font-medium">FinTech Companies</div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Highlights</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {district.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-600 font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                        Find Office Space in {district.name}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Company Categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FinTech Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the diverse landscape of financial technology companies thriving in Berlin across multiple
              sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Digital Banking",
                count: 89,
                description: "Neo-banks and digital-first financial services",
                icon: "🏦",
              },
              {
                name: "Payments",
                count: 76,
                description: "Payment processing and fintech infrastructure",
                icon: "💳",
              },
              {
                name: "InsurTech",
                count: 45,
                description: "Insurance technology and digital insurance",
                icon: "🛡️",
              },
              {
                name: "WealthTech",
                count: 34,
                description: "Investment platforms and wealth management",
                icon: "📊",
              },
              {
                name: "RegTech",
                count: 28,
                description: "Regulatory technology and compliance solutions",
                icon: "⚖️",
              },
              {
                name: "Crypto/Blockchain",
                count: 23,
                description: "Cryptocurrency and blockchain solutions",
                icon: "₿",
              },
              {
                name: "Lending",
                count: 19,
                description: "Alternative lending and credit solutions",
                icon: "💰",
              },
              {
                name: "B2B FinTech",
                count: 31,
                description: "Business-to-business financial technology",
                icon: "🤝",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                  <div className="text-6xl">{category.icon}</div>
                  <div className="absolute bottom-4 left-4 text-gray-800">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <div className="text-2xl font-bold text-blue-600">{category.count} Companies</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                    Add Your Company
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/berlin-networking.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Download the Complete Guide</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Get the comprehensive entrepreneur's guide to moving your company to Berlin — including detailed timelines,
            cost breakdowns, and insider tips from successful founders.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              Download PDF Guide
              <Download className="ml-2 h-6 w-6" />
            </button>
            <Link href="/join-network">
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                Join HoFT Network
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
