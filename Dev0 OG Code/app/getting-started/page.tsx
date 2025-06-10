import {
  ArrowRight,
  FileText,
  Building2,
  Shield,
  Calculator,
  CheckCircle,
  Users,
  Globe,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1171&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/hoft-logo-clean.png"
              alt="HoFT Logo"
              width={80}
              height={80}
              className="h-16 w-16 bg-white/10 backdrop-blur-sm p-2 rounded-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Getting Started in Berlin</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Your complete guide to relocating and establishing your business in Berlin - from visa to operations.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
              COMPLETE RELOCATION PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Two parallel tracks: Get your EU Blue Card for personal relocation while incorporating your company. Our
              streamlined 2025 process takes 2-4 months total.
            </h2>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/incorporation-process.png"
                alt="Incorporation Process Overview"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Download Complete Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Process Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Choose Your Path</h2>

          <Tabs defaultValue="blue-card" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="blue-card" className="text-lg py-4">
                <CreditCard className="h-5 w-5 mr-2" />
                EU Blue Card (Personal)
              </TabsTrigger>
              <TabsTrigger value="company" className="text-lg py-4">
                <Building2 className="h-5 w-5 mr-2" />
                Company Registration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="blue-card">
              <div className="space-y-12">
                {/* Updated 2025 Requirements */}
                <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center text-2xl text-blue-900">
                      <CreditCard className="h-8 w-8 text-orange-500 mr-3" />
                      EU Blue Card 2025 - Significantly Improved
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-4 text-lg">Major Improvements Since 2017</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Lower Salary Requirements:</strong> €48,300 general / €43,760 shortage occupations
                              (was €52,000+)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Expanded Eligibility:</strong> IT workers without degrees, educators, nurses
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Online Applications:</strong> Digital process available in most countries
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Family Benefits:</strong> Parents and in-laws can now relocate too
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Faster Permanent Residency:</strong> 21-27 months (was 5 years)
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-4 text-lg">2025 Process Flow</h4>
                        <div className="space-y-3">
                          {[
                            "Online Application (many countries)",
                            "Document Submission",
                            "Biometric Data at Embassy",
                            "Visa Issuance (faster processing)",
                            "Entry to Germany",
                            "Blue Card Application (1-3 months)",
                            "Work Authorization (immediate)",
                          ].map((step, i) => (
                            <div key={i} className="flex items-center">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-blue-600">
                                {i + 1}
                              </div>
                              <span className="text-gray-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Blue Card Process Visual */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Streamlined Blue Card Process</h3>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <Image
                      src="/images/blue-card-process.png"
                      alt="EU Blue Card Application Process"
                      width={1000}
                      height={700}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Requirements Breakdown */}
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-sm bg-white">
                    <CardHeader className="pb-4">
                      <FileText className="h-8 w-8 text-orange-500 mb-4" />
                      <CardTitle className="text-xl text-blue-900">Required Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• University degree (or 3+ years IT experience)</li>
                        <li>• Job offer with qualifying salary</li>
                        <li>• Valid passport</li>
                        <li>• Health insurance proof</li>
                        <li>• Clean criminal record</li>
                        <li>• Biometric photos</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-sm bg-white">
                    <CardHeader className="pb-4">
                      <Calculator className="h-8 w-8 text-orange-500 mb-4" />
                      <CardTitle className="text-xl text-blue-900">Salary Thresholds 2025</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="font-semibold text-blue-900">General Occupations</div>
                          <div className="text-2xl font-bold text-green-600">€48,300</div>
                          <div className="text-sm text-gray-500">per year minimum</div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-900">Shortage Occupations</div>
                          <div className="text-2xl font-bold text-green-600">€43,760</div>
                          <div className="text-sm text-gray-500">IT, healthcare, engineering</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-sm bg-white">
                    <CardHeader className="pb-4">
                      <Users className="h-8 w-8 text-orange-500 mb-4" />
                      <CardTitle className="text-xl text-blue-900">Timeline & Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Processing: 2-8 weeks</li>
                        <li>• Valid for 4 years initially</li>
                        <li>• Work anywhere in EU</li>
                        <li>• Family can join immediately</li>
                        <li>• Permanent residency in 21-27 months</li>
                        <li>• Path to German citizenship</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Link href="/blue-card">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      View Complete Blue Card Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="company">
              <div className="space-y-12">
                {/* Company Registration Steps */}
                <div className="grid gap-6">
                  {[
                    {
                      step: "1",
                      title: "Business Plan & Structure",
                      duration: "Week 1-2",
                      description:
                        "Define your business model and choose legal structure (GmbH recommended for FinTech)",
                      tasks: [
                        "Develop comprehensive business plan",
                        "Choose between GmbH (€25k capital) or UG (€1 minimum)",
                        "Define company purpose and activities",
                        "Plan ownership and management structure",
                      ],
                      cost: "€500-2,000",
                      icon: FileText,
                    },
                    {
                      step: "2",
                      title: "Legal Address & Banking",
                      duration: "Week 2-3",
                      description: "Establish your legal presence and financial foundation",
                      tasks: [
                        "Secure business address in Berlin",
                        "Open German bank account",
                        "Deposit required share capital",
                        "Obtain bank confirmation letter",
                      ],
                      cost: "€25,000+ (GmbH capital)",
                      icon: Building2,
                    },
                    {
                      step: "3",
                      title: "Notarization & Registration",
                      duration: "Week 3-5",
                      description: "Legal formalization and official registration",
                      tasks: [
                        "Draft articles of association",
                        "Notary appointment and signing",
                        "Commercial register application",
                        "Receive company registration certificate",
                      ],
                      cost: "€500-1,500",
                      icon: Shield,
                    },
                    {
                      step: "4",
                      title: "Tax & Trade Registration",
                      duration: "Week 5-8",
                      description: "Complete regulatory compliance and begin operations",
                      tasks: [
                        "Register with tax office (Finanzamt)",
                        "Apply for trade license (Gewerbeanmeldung)",
                        "Register with Chamber of Commerce",
                        "Set up accounting and VAT systems",
                      ],
                      cost: "€100-500",
                      icon: Calculator,
                    },
                  ].map((step, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <step.icon className="h-8 w-8 text-blue-600" />
                            </div>
                            <div className="text-center mt-2">
                              <div className="text-2xl font-bold text-blue-600">Step {step.step}</div>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                              </div>
                              <div className="text-right ml-6">
                                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-2">
                                  {step.duration}
                                </div>
                                <div className="text-lg font-bold text-green-600">{step.cost}</div>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              {step.tasks.map((task, i) => (
                                <div key={i} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* GmbH vs UG Comparison */}
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl text-blue-900">Legal Structure Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                        <h4 className="text-xl font-bold text-green-700 mb-4">GmbH (Recommended for FinTech)</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span>€25,000 minimum capital</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span>Excellent reputation with banks/investors</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span>EU-wide recognition</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span>No profit retention requirements</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-orange-200 rounded-lg p-6 bg-orange-50">
                        <h4 className="text-xl font-bold text-orange-700 mb-4">UG (Budget Option)</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                            <span>€1 minimum capital</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                            <span>Quick setup process</span>
                          </div>
                          <div className="flex items-center text-orange-700">
                            <span className="text-orange-600 mr-2">⚠️</span>
                            <span>Must retain 25% of profits</span>
                          </div>
                          <div className="flex items-center text-orange-700">
                            <span className="text-orange-600 mr-2">⚠️</span>
                            <span>Less credibility with investors</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Link href="/company-registration">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      View Complete Registration Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Parallel Process Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            Why Run Both Processes in Parallel?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">Faster Market Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete both personal relocation and business setup simultaneously, reducing total time from 6+
                  months to 2-4 months.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensure you have proper work authorization while establishing your company, avoiding any legal
                  complications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">Family Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  EU Blue Card allows your family (including parents since 2024) to join you immediately, providing
                  stability during business setup.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Process Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Complete Process Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our comprehensive dual-track approach for non-EU founders establishing a company in Germany
            </p>
          </div>

          <Tabs defaultValue="setup" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="setup" className="text-sm py-3">
                Initial Setup
              </TabsTrigger>
              <TabsTrigger value="company" className="text-sm py-3">
                Company Level
              </TabsTrigger>
              <TabsTrigger value="individual" className="text-sm py-3">
                Individual Level
              </TabsTrigger>
              <TabsTrigger value="timeline" className="text-sm py-3">
                Process Timeline
              </TabsTrigger>
            </TabsList>

            <TabsContent value="setup">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-red-50">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center text-2xl text-blue-900">
                      <FileText className="h-8 w-8 text-orange-500 mr-3" />
                      Phase I: Initial Setup & Information Gathering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-4 text-lg">Client Information Gathering</h4>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Collect all necessary client documentation and requirements</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Assess founder's current situation and relocation needs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Evaluate business model and German market fit</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-4 text-lg">Power of Attorney (Critical Step)</h4>
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                          <div className="flex">
                            <Shield className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-red-700">Must Complete First</h5>
                              <p className="text-red-600 text-sm">
                                Sign power of attorney to enable legal representation throughout the process
                              </p>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Enables legal representation in Germany</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Special considerations for non-EU founders</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Required for all subsequent legal proceedings</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="company">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center text-2xl text-blue-900">
                      <Building2 className="h-8 w-8 text-blue-500 mr-3" />
                      Phase II: Company Level Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Business Planning */}
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-4 text-lg flex items-center">
                          <FileText className="h-5 w-5 mr-2" />
                          Business Planning & Validation
                        </h4>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                          <h5 className="font-semibold text-blue-700 mb-2">Business Plan Requirements</h5>
                          <ul className="space-y-2 text-blue-600 text-sm">
                            <li>• Proof that there is a need for the business in Germany</li>
                            <li>
                              • Confirmation that business funding is secured (own funding, confirmed credit line)
                            </li>
                            <li>• Founder needs to be financially stable and fund himself</li>
                          </ul>
                        </div>
                      </div>

                      {/* Legal Structure */}
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-4 text-lg flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Legal Structure & Registration
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-blue-600 mt-0.5">
                                1
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Establish Legal Address</h5>
                                <p className="text-gray-600 text-sm">Required business address in Germany</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-blue-600 mt-0.5">
                                2
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Trigger Lawyers</h5>
                                <p className="text-gray-600 text-sm">
                                  Start incorporation process with legal representation
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-blue-600 mt-0.5">
                                3
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Open Bank Account</h5>
                                <p className="text-gray-600 text-sm">German business banking setup</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-blue-600 mt-0.5">
                                4
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Chamber Registration</h5>
                                <p className="text-gray-600 text-sm">Register at Handelskammer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Regulatory Compliance */}
                      <div>
                        <h4 className="font-semibold text-blue-600 mb-4 text-lg flex items-center">
                          <Calculator className="h-5 w-5 mr-2" />
                          Regulatory Compliance
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-gray-900">Gewerbeanmeldung</h5>
                                <p className="text-gray-600 text-sm">Business registration with trade office</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-gray-900">Finanzamt Registration</h5>
                                <p className="text-gray-600 text-sm">Tax office registration</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-gray-900">Agentur für Arbeit</h5>
                                <p className="text-gray-600 text-sm">
                                  Employment agency registration and obtain "Betriebsnummer"
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-gray-900">Business Insurance</h5>
                                <p className="text-gray-600 text-sm">Check and apply for required insurance</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="individual">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center text-2xl text-blue-900">
                      <Users className="h-8 w-8 text-green-500 mr-3" />
                      Phase III: Individual Level Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Educational & Professional */}
                      <div>
                        <h4 className="font-semibold text-green-600 mb-4 text-lg flex items-center">
                          <FileText className="h-5 w-5 mr-2" />
                          Educational & Professional Verification
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-900">University Degrees</h5>
                              <p className="text-gray-600 text-sm">
                                Check for original university degrees - credential verification
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-900">Ownership Verification</h5>
                              <p className="text-gray-600 text-sm">Check cap-table for right Anteinhaltstittel</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Residence & Work Authorization */}
                      <div>
                        <h4 className="font-semibold text-green-600 mb-4 text-lg flex items-center">
                          <CreditCard className="h-5 w-5 mr-2" />
                          Residence & Work Authorization
                        </h4>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                          <h5 className="font-semibold text-green-700 mb-2">Residence Permit Classification</h5>
                          <div className="space-y-2 text-green-600 text-sm">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span>
                                <strong>More than 50% ownership:</strong> Residence permit for "self-employed work"
                              </span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span>
                                <strong>Less than 50% ownership:</strong> Residence permit for "dependent work"
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-900">Local Accommodation</h5>
                              <p className="text-gray-600 text-sm">Check for housing requirements in Germany</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-900">Visa Application</h5>
                              <p className="text-gray-600 text-sm">Start visa application process</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Administrative Requirements */}
                      <div>
                        <h4 className="font-semibold text-green-600 mb-4 text-lg flex items-center">
                          <Building2 className="h-5 w-5 mr-2" />
                          Administrative Requirements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-900">Bürgeramt Registration</h5>
                              <p className="text-gray-600 text-sm">Founder must register at municipal office</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-gray-900">Personal Insurance</h5>
                              <p className="text-gray-600 text-sm">Check and apply for personal insurance coverage</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="timeline">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center text-2xl text-blue-900">
                      <Globe className="h-8 w-8 text-purple-500 mr-3" />
                      Phase IV: Key Process Notes & Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {/* Parallel Tracks */}
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-4 text-lg">Parallel Tracks</h4>
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                          <div className="flex items-start">
                            <Globe className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-semibold text-purple-700">Simultaneous Processing</h5>
                              <p className="text-purple-600 text-sm">
                                Company-level and individual-level processes can run simultaneously
                              </p>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Some steps are interdependent (e.g., legal address needed for various registrations)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Reduces total timeline from 6+ months to 2-4 months</span>
                          </li>
                        </ul>
                      </div>

                      {/* Critical Dependencies */}
                      <div>
                        <h4 className="font-semibold text-red-600 mb-4 text-lg">Critical Dependencies</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <Shield className="h-5 w-5 text-red-500 mr-2" />
                              <h5 className="font-semibold text-red-700">Power of Attorney</h5>
                            </div>
                            <p className="text-red-600 text-sm">Must be signed early to enable legal proceedings</p>
                          </div>
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <FileText className="h-5 w-5 text-orange-500 mr-2" />
                              <h5 className="font-semibold text-orange-700">Business Plan</h5>
                            </div>
                            <p className="text-orange-600 text-sm">Validation is crucial for visa approval</p>
                          </div>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              <Users className="h-5 w-5 text-blue-500 mr-2" />
                              <h5 className="font-semibold text-blue-700">Credentials</h5>
                            </div>
                            <p className="text-blue-600 text-sm">
                              Educational credentials must be verified for residence permit
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Timing Considerations */}
                      <div>
                        <h4 className="font-semibold text-purple-600 mb-4 text-lg">Timing Considerations</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-600 mt-0.5">
                                ⏱️
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Multiple Registrations</h5>
                                <p className="text-gray-600 text-sm">Registration steps with different agencies</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-600 mt-0.5">
                                🛡️
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Insurance Applications</h5>
                                <p className="text-gray-600 text-sm">Required at both company and individual levels</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-600 mt-0.5">
                                🏠
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Accommodation First</h5>
                                <p className="text-gray-600 text-sm">Must be secured before Bürgeramt registration</p>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-600 mt-0.5">
                                📋
                              </div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Sequential Dependencies</h5>
                                <p className="text-gray-600 text-sm">Some steps must be completed in specific order</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Process Summary */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Process Summary</h3>
                  <p className="text-blue-100 mb-6">
                    This comprehensive dual-track approach ensures that non-EU founders can efficiently establish both
                    their personal residence and company presence in Germany simultaneously.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      Download Process Checklist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Schedule Expert Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/hoft-logo-clean.png"
              alt="HoFT Logo"
              width={60}
              height={60}
              className="h-12 w-12 bg-white/10 backdrop-blur-sm p-2 rounded-xl"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Berlin Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Get expert guidance through both your personal relocation and company establishment with our proven process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Download Complete Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Schedule Expert Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
