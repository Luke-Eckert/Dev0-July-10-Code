import { ArrowRight, TrendingUp, Globe, Users, Building, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhyBerlinPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,165,0,0.1),transparent_50%)] opacity-70" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Star className="h-8 w-8 text-orange-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Why Choose Berlin?</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light opacity-90">
            Europe's fastest-growing fintech hub offers unparalleled opportunities for international entrepreneurs and
            innovative companies.
          </p>
        </div>
      </section>

      {/* Announcement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
              BERLIN FINTECH ECOSYSTEM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Berlin dominates European fintech with 85% of German investment, 340+ funded companies, and €11.4B in
              total funding. Discover why global entrepreneurs choose Berlin as their European headquarters.
            </h2>
            <div className="flex items-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                Download FinTech Map
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="ml-4 flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
                  <div className="text-xs font-bold text-orange-600">HFT</div>
                </div>
                <span className="text-blue-900 font-medium">House of Finance & Tech Berlin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Berlin by the Numbers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-orange-500 mb-3">340+</div>
              <div className="text-gray-900 font-semibold mb-1">Funded FinTechs</div>
              <div className="text-gray-600 text-sm">Over 700 total FinTechs</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-blue-600 mb-3">€11.4B</div>
              <div className="text-gray-900 font-semibold mb-1">Total Funding</div>
              <div className="text-gray-600 text-sm">1/3 of German startup funding</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-3">6-7</div>
              <div className="text-gray-900 font-semibold mb-1">Unicorns</div>
              <div className="text-gray-600 text-sm">Valued at $1B+</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-3">85%</div>
              <div className="text-gray-900 font-semibold mb-1">Market Share</div>
              <div className="text-gray-600 text-sm">of German FinTech investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Key Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">European Market Access</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gateway to 450M+ European consumers</li>
                  <li>• Single market participant benefits</li>
                  <li>• Largest economy in Europe</li>
                  <li>• Strategic location for EU expansion</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-3xl" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">Thriving FinTech Ecosystem</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2nd largest sector after ICT</li>
                  <li>• 1/3 of Germany's FinTech startups</li>
                  <li>• 20% of VC money goes to FinTech</li>
                  <li>• Rapidly growing ESG sector</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-3xl" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">Innovation Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3,000 startups founded in 10 years</li>
                  <li>• 11.4% have 50+ employees</li>
                  <li>• Strong international talent pool</li>
                  <li>• Low language barriers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-3xl" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">Regulatory Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• BaFin approval = EU-wide recognition</li>
                  <li>• Clear regulatory framework</li>
                  <li>• Strong legal protections</li>
                  <li>• Established compliance processes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-3xl" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">Funding Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• €7B invested in 2024</li>
                  <li>• 239 startups received funding</li>
                  <li>• 50 deals in FinTech space</li>
                  <li>• Strong public-private partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-3xl" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">Quality of Life</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Excellent work-life balance</li>
                  <li>• Rich cultural scene</li>
                  <li>• Affordable cost of living</li>
                  <li>• Strong social safety net</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,165,0,0.1),transparent_50%)] opacity-70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Berlin's FinTech Revolution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Download our comprehensive FinTech Map and discover the opportunities waiting for your business.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
            Download FinTech Map
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
