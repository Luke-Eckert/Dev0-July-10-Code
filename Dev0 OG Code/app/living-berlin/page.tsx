import { ArrowRight, Home, Globe, Users, Landmark, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LivingBerlinPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-apartment.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Living in Berlin</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Practical guidance for relocating, finding housing, and integrating into Berlin's international community.
          </p>
        </div>
      </section>

      {/* Announcement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
              RELOCATION ESSENTIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Berlin offers an exceptional quality of life with its rich cultural scene, green spaces, and international
              atmosphere. Navigate the housing market, residence permits, and cultural integration with our
              comprehensive guide.
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Download Relocation Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Housing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Finding Housing</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Home className="h-7 w-7 text-orange-500 mr-3" />
                Housing Market Overview
              </h3>
              <p className="text-gray-600 mb-6">
                Berlin's housing market has become increasingly competitive, with rising demand and limited supply.
                Finding suitable accommodation requires preparation, persistence, and often local assistance.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                <h4 className="font-semibold text-orange-700 mb-2">Important Note</h4>
                <p className="text-gray-700">
                  Your business address is closely tied to your housing situation. Having a registered address is
                  essential for company registration and other official procedures.
                </p>
              </div>
              <h4 className="font-semibold text-blue-900 mb-3">Key Considerations</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Budget: €10-20/sqm depending on location and quality</li>
                <li>• Furnished vs. unfurnished options</li>
                <li>• Short-term vs. long-term rentals</li>
                <li>• Proximity to office or transportation</li>
                <li>• Registration requirements (Anmeldung)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Finding Your Home</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-3">Short-Term Options</h4>
                  <p className="text-gray-600 mb-3">
                    While searching for permanent housing, consider these temporary solutions:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Serviced apartments (e.g., Quarters, Spotahome)</li>
                    <li>• Extended-stay hotels</li>
                    <li>• Temporary sublets (Zwischenmiete)</li>
                    <li>• Corporate housing providers</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-3">Long-Term Housing</h4>
                  <p className="text-gray-600 mb-3">Popular platforms and resources for finding permanent housing:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ImmobilienScout24 and ImmoWelt</li>
                    <li>• WG-Gesucht (shared apartments)</li>
                    <li>• Facebook groups (e.g., Berlin Housing)</li>
                    <li>• Relocation services and agents</li>
                    <li>• Company housing assistance programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residence Permits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Residence Permits</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm bg-white mb-8">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Landmark className="h-8 w-8 text-orange-500 mr-3" />
                  Immigration Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">EU Citizens</h4>
                    <p className="text-gray-600 mb-3">
                      EU citizens enjoy freedom of movement and can live and work in Germany without a visa or residence
                      permit. However, you must:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Register your address (Anmeldung) within 14 days of arrival</li>
                      <li>• Obtain a tax ID (Steueridentifikationsnummer)</li>
                      <li>• Register for health insurance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Non-EU Citizens</h4>
                    <p className="text-gray-600 mb-3">
                      Entrepreneurs from non-EU countries who will manage a company on-site in Germany require a
                      residence permit for self-employment:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Entry visa from German embassy in home country</li>
                      <li>• Business plan and proof of financing</li>
                      <li>• Proof of relevant experience and qualifications</li>
                      <li>• Health insurance coverage</li>
                      <li>• Registered address in Berlin</li>
                    </ul>
                    <p className="text-gray-600 mt-3">
                      Citizens from certain countries (e.g., USA, Australia, Canada, UK) may enter Germany without a
                      visa and apply for a residence permit within 90 days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                Immigration Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Language and Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            Language & Cultural Integration
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Globe className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Language Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  While Berlin is one of Germany's most international cities with widespread English proficiency,
                  learning German offers significant advantages:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Easier navigation of bureaucratic processes</li>
                  <li>• Better integration into local business networks</li>
                  <li>• Access to a wider range of services and opportunities</li>
                  <li>• Appreciation from German business partners and clients</li>
                </ul>
                <p className="text-gray-600">
                  Many language schools offer business German courses specifically designed for professionals and
                  entrepreneurs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Users className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Networking & Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Berlin offers numerous opportunities to connect with fellow entrepreneurs and build your professional
                  network:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Industry-specific meetups and events</li>
                  <li>• International business associations</li>
                  <li>• Coworking space communities</li>
                  <li>• Chamber of Commerce (IHK) networking events</li>
                  <li>• Expat business groups and forums</li>
                </ul>
                <p className="text-gray-600">
                  Building a strong network is essential for business success and personal integration in Berlin.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality of Life */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Quality of Life</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Sparkles className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Berlin is renowned for its excellent work-life balance. German business culture respects personal
                  time, with standard working hours, generous vacation policies (20-30 days annually), and strong labor
                  protections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Sparkles className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Cost of Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Despite rising costs, Berlin remains more affordable than many European capitals. Housing is the
                  largest expense, while public transportation, healthcare, and daily necessities are reasonably priced.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Sparkles className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Culture & Recreation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Berlin offers world-class cultural attractions, extensive green spaces, diverse culinary scenes, and
                  vibrant nightlife. The city's excellent public transportation system makes it easy to explore and
                  enjoy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make Berlin Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Download our comprehensive relocation guide and make your transition to Berlin smooth and successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Download Relocation Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Relocation Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
