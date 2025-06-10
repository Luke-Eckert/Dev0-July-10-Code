import { ArrowRight, FileText, Building2, Shield, Calculator, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompanyRegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-business-registration.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Company Registration Timeline</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Your step-by-step guide to registering and starting your company in Berlin - from paperwork to operations.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
              REGISTRATION TIMELINE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Complete your German company registration in 4-8 weeks. Navigate bureaucracy efficiently with our proven
              step-by-step process used by 340+ successful FinTech companies.
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Download Registration Checklist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Steps Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            8-Step Registration Process
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Legal Structure",
                  duration: "Day 1-2",
                  description: "Decide between GmbH (€25,000 capital) or UG (€1 minimum) based on your business needs",
                  tasks: [
                    "Compare GmbH vs UG advantages",
                    "Determine required share capital",
                    "Plan ownership structure",
                    "Consider future investment needs",
                  ],
                  cost: "€0 (consultation)",
                  icon: Building2,
                },
                {
                  step: "2",
                  title: "Reserve Company Name",
                  duration: "Day 3-5",
                  description: "Check name availability and reserve your preferred company name with the trade office",
                  tasks: [
                    "Search existing company names",
                    "Submit name reservation request",
                    "Receive confirmation letter",
                    "Prepare alternative names",
                  ],
                  cost: "€26",
                  icon: FileText,
                },
                {
                  step: "3",
                  title: "Open Bank Account & Deposit Capital",
                  duration: "Week 1-2",
                  description: "Open a German bank account and deposit the required share capital",
                  tasks: [
                    "Choose bank (traditional vs digital)",
                    "Submit required documents",
                    "Deposit share capital",
                    "Obtain bank confirmation letter",
                  ],
                  cost: "€25,000 (GmbH) or €1+ (UG)",
                  icon: Calculator,
                },
                {
                  step: "4",
                  title: "Draft Articles of Association",
                  duration: "Week 2",
                  description: "Create the legal foundation document defining your company structure and operations",
                  tasks: [
                    "Define company purpose",
                    "Set management structure",
                    "Establish shareholder rights",
                    "Include required legal clauses",
                  ],
                  cost: "€500-1,500 (lawyer fees)",
                  icon: Shield,
                },
                {
                  step: "5",
                  title: "Notarization Appointment",
                  duration: "Week 3",
                  description: "Have your articles of association notarized by a German notary public",
                  tasks: [
                    "Schedule notary appointment",
                    "Bring all required documents",
                    "Sign articles of association",
                    "Receive notarized documents",
                  ],
                  cost: "€500-1,500",
                  icon: CheckCircle,
                },
                {
                  step: "6",
                  title: "Commercial Register Entry",
                  duration: "Week 4-5",
                  description: "Submit application to register your company in the German Commercial Register",
                  tasks: [
                    "Submit notarized documents",
                    "Pay registration fees",
                    "Wait for processing",
                    "Receive registration certificate",
                  ],
                  cost: "€150-240",
                  icon: FileText,
                },
                {
                  step: "7",
                  title: "Tax Registration",
                  duration: "Week 5-6",
                  description: "Register with tax authorities for VAT, corporate tax, and trade tax",
                  tasks: [
                    "Submit tax registration form",
                    "Provide business details",
                    "Estimate annual revenue",
                    "Receive tax numbers",
                  ],
                  cost: "€0",
                  icon: Calculator,
                },
                {
                  step: "8",
                  title: "Trade License & Final Setup",
                  duration: "Week 6-8",
                  description: "Obtain trade license and complete remaining administrative requirements",
                  tasks: [
                    "Apply for Gewerbeanmeldung",
                    "Register with IHK/Chamber",
                    "Set up accounting system",
                    "Begin operations",
                  ],
                  cost: "€20-65",
                  icon: Building2,
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
          </div>
        </div>
      </section>

      {/* Legal Structure Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            GmbH vs UG: Choose Your Structure
          </h2>

          <Tabs defaultValue="gmbh" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="gmbh" className="text-lg py-3">
                GmbH (Recommended)
              </TabsTrigger>
              <TabsTrigger value="ug" className="text-lg py-3">
                UG (Budget Option)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gmbh">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <Building2 className="h-8 w-8 text-orange-500 mr-3" />
                    GmbH - Gesellschaft mit beschränkter Haftung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 text-lg">Why Choose GmbH</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Excellent reputation with banks and investors</li>
                        <li>• Limited liability protection for shareholders</li>
                        <li>• Flexible ownership and management structure</li>
                        <li>• Only one shareholder required</li>
                        <li>• Attractive to international investors</li>
                        <li>• EU-wide recognition and credibility</li>
                        <li>• No profit retention requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-4 text-lg">Requirements & Costs</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Minimum capital: €25,000</li>
                        <li>• At least one managing director (Geschäftsführer)</li>
                        <li>• German business address required</li>
                        <li>• Notarization: €500-1,500</li>
                        <li>• Registration fees: €150-240</li>
                        <li>• Total setup cost: ~€26,000-27,000</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ug">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <Building2 className="h-8 w-8 text-orange-500 mr-3" />
                    UG - Unternehmergesellschaft (Mini-GmbH)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 text-lg">Advantages</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Very low startup capital (€1 minimum)</li>
                        <li>• Quick and easy setup process</li>
                        <li>• Limited liability protection</li>
                        <li>• Can convert to GmbH later</li>
                        <li>• Lower initial costs</li>
                        <li>• Same legal framework as GmbH</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-4 text-lg">Limitations</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Less prestigious than GmbH</li>
                        <li>• Must retain 25% of annual profits</li>
                        <li>• "UG" must appear in company name</li>
                        <li>• May face credibility challenges</li>
                        <li>• Banks may be more cautious</li>
                        <li>• Total setup cost: ~€1,500-2,500</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Required Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "Personal Documents",
                documents: [
                  "Valid passport or ID",
                  "Proof of address (Anmeldung)",
                  "CV/Resume",
                  "Criminal background check",
                  "University degrees (if applicable)",
                ],
                icon: FileText,
              },
              {
                category: "Business Documents",
                documents: [
                  "Business plan",
                  "Articles of association",
                  "Proof of share capital deposit",
                  "Name reservation certificate",
                  "Office lease agreement",
                ],
                icon: Building2,
              },
              {
                category: "Financial Documents",
                documents: [
                  "Bank account confirmation",
                  "Proof of funds",
                  "Financial projections",
                  "Insurance certificates",
                  "Tax advisor appointment",
                ],
                icon: Calculator,
              },
            ].map((category, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <category.icon className="h-8 w-8 text-orange-500 mb-4" />
                  <CardTitle className="text-xl text-blue-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.documents.map((doc, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Avoid Common Pitfalls</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Timing Mistakes",
                  pitfalls: [
                    "Starting without proper visa status",
                    "Underestimating processing times",
                    "Not booking notary appointments early",
                    "Missing tax registration deadlines",
                  ],
                },
                {
                  title: "Documentation Errors",
                  pitfalls: [
                    "Incomplete articles of association",
                    "Missing apostilled documents",
                    "Incorrect business purpose description",
                    "Insufficient proof of funds",
                  ],
                },
                {
                  title: "Financial Oversights",
                  pitfalls: [
                    "Underestimating total costs",
                    "Not planning for ongoing expenses",
                    "Choosing wrong bank for business needs",
                    "Missing tax optimization opportunities",
                  ],
                },
                {
                  title: "Legal Compliance Issues",
                  pitfalls: [
                    "Not understanding director obligations",
                    "Missing mandatory insurance",
                    "Incorrect VAT registration",
                    "Failing to maintain corporate records",
                  ],
                },
              ].map((section, index) => (
                <Card key={index} className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-blue-900 flex items-center">
                      <Shield className="h-6 w-6 text-red-500 mr-3" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.pitfalls.map((pitfall, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{pitfall}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Register Your Company?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Download our comprehensive registration checklist and get expert guidance through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Download Registration Checklist
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
