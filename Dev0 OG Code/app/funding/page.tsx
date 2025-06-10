import { ArrowRight, TrendingUp, Building2, Landmark, Lightbulb, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-fintech.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Financing & Sponsoring</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Access Berlin's rich ecosystem of investors, public funding programs, and growth opportunities for your
            business.
          </p>
        </div>
      </section>

      {/* Announcement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
              FUNDING OPPORTUNITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Berlin saw €7B in startup funding in 2024, with one-third of all German startup deals. The FinTech sector
              secured 50 deals, representing 85% of all FinTech investments in Germany.
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Download Financing Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Public Funding Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Public Funding Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Building2 className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Federal Ministry Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• DeepTech & Climate Fund</li>
                  <li>• Venture Tech Growth Financing</li>
                  <li>• High-Tech Gründerfonds</li>
                  <li>• Growth Fund Germany</li>
                </ul>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Landmark className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Regional Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• IBB Pro FIT programme</li>
                  <li>• EXIST Business Start-up Grant</li>
                  <li>• Gründungsbonus</li>
                  <li>• Berlin Start-Up Scholarship</li>
                </ul>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Banknote className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Tax Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• IBB Gründungsbonus subsidies</li>
                  <li>• Relocation expense deductions</li>
                  <li>• Research Allowance Act (25% subsidy)</li>
                  <li>• Potential corporate tax reductions</li>
                </ul>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venture Capital & Private Equity */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            Venture Capital & Private Equity
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">FinTech Investment Success</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">85% market share</strong> of FinTech investments in Germany happen
                    in Berlin
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">€7B in funding</strong> in 2024, with 239 startups receiving
                    investment
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">50 FinTech deals</strong> in 2024, representing a third of
                    nationwide deals
                  </span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">20% of VC money</strong> in Berlin goes to FinTech startups
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Fundraising Support</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Expert advisory</strong> from firms like Capvisory and HoFT for
                    fundraising strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Banking options</strong> with specialized programs for startups
                    and scale-ups
                  </span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Bürgschaftsbank Berlin</strong> can act as guarantor for startups
                    without sufficient collateral
                  </span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Scale-Up Academy</strong> provides comprehensive fundraising
                    guidance and investor connections
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Incubators & Accelerators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Incubators & Accelerators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              "Digital Hub Initiative",
              "FinLeap",
              "House of Finance & Tech",
              "Techstars Berlin",
              "Wayra Deutschland",
              "APX",
            ].map((program, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white text-center py-8"
              >
                <CardContent>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-blue-900">{program}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Funding?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Download our comprehensive financing guide and learn how to navigate Berlin's rich funding landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Download Financing Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Apply to Scale-Up Academy
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
