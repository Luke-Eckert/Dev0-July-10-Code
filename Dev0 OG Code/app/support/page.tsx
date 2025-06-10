import { ArrowRight, Building2, Users, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-networking.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Support Resources</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Connect with key institutions and support organizations to accelerate your business growth in Berlin.
          </p>
        </div>
      </section>

      {/* Announcement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">SCALE-UP ACADEMY</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Berlin launches new Scale-up Academy to close the growth gap for FinTechs with international ambitions.
              Learn how this initiative aims to help companies navigate regulations, secure funding, and scale
              successfully.
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Apply to Scale-Up Academy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Scale-Up Academy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Scale-Up Academy</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-sm bg-white mb-12">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Building2 className="h-8 w-8 text-orange-500 mr-3" />
                  Expert Guidance for Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  The Scale-Up Academy is designed to help build German unicorns by providing expert guidance from
                  experienced professionals. The program focuses on reducing barriers to entry and accelerating growth
                  for international companies entering the German market.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-4">Key Focus Areas</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>Regulation & Compliance:</strong> Navigate BaFin licensing and legal requirements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>Fundraising & Investment:</strong> Connect with investors and optimize funding
                          strategy
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>International Market Entry:</strong> Develop effective go-to-market strategies
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>Organization & Leadership:</strong> Build effective teams and leadership structures
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-4">Program Benefits</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>Mentorship:</strong> One-on-one guidance from industry experts and successful founders
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>Workshops:</strong> Specialized training on key growth challenges and opportunities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>Network Access:</strong> Connect with potential partners, clients, and investors
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>
                          <strong>Resources:</strong> Templates, guides, and tools to streamline business processes
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                Apply to Scale-Up Academy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Network Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Our Network Partners</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-600 text-center mb-12 text-lg">
              As a central point of contact for the Berlin ecosystem, we actively network with both private and public
              partnerships to promote coordination and support for international businesses.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <Users className="h-8 w-8 text-orange-500 mb-4" />
                  <CardTitle className="text-xl text-blue-900">Premium Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visa</li>
                    <li>• Deutsche Bank</li>
                    <li>• Berliner Volksbank</li>
                    <li>• Major financial institutions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <Users className="h-8 w-8 text-orange-500 mb-4" />
                  <CardTitle className="text-xl text-blue-900">Standard & Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Roland Berger</li>
                    <li>• N26</li>
                    <li>• Holvi</li>
                    <li>• Hawk</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <Users className="h-8 w-8 text-orange-500 mb-4" />
                  <CardTitle className="text-xl text-blue-900">Institutional</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• IHK Berlin</li>
                    <li>• Berlin Finance Initiative</li>
                    <li>• Verein Börsenplatz Berlin</li>
                    <li>• Government agencies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Resources & Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <FileText className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Knowledge Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Access our comprehensive collection of guides, articles, and resources covering all aspects of
                  establishing and growing your business in Berlin.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Access Database
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <FileText className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Templates & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Download ready-to-use templates for business plans, legal documents, compliance checklists, and other
                  essential business tools.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Download Templates
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <FileText className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">One-Stop Shop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Streamlined access to public authorities and government services, making bureaucratic processes more
                  efficient for international businesses.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Access Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Our Events</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Calendar className="h-8 w-8 text-orange-500 mr-3" />
                  Networking & Learning Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Join our regular events featuring talks from industry leaders, networking sessions, and educational
                  workshops designed to help you connect with the Berlin FinTech ecosystem.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Event Types</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Industry expert talks and panels</li>
                      <li>• Networking mixers and meetups</li>
                      <li>• Workshops on specific business topics</li>
                      <li>• Investor pitch events</li>
                      <li>• Regulatory update sessions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Benefits</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Connect with potential partners and clients</li>
                      <li>• Learn from successful entrepreneurs</li>
                      <li>• Stay updated on industry trends</li>
                      <li>• Access to exclusive opportunities</li>
                      <li>• Build your professional network</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                View Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Space */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Our Space</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Building2 className="h-8 w-8 text-orange-500 mr-3" />
                  Spittelmarkt Digital Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Berlin's Spittelmarkt Digital Hub, our space provides a physical platform for
                  networking, knowledge transfer, and showcasing innovative FinTech solutions.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Facilities</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Modern meeting and conference rooms</li>
                      <li>• Event spaces for workshops and presentations</li>
                      <li>• Networking areas and collaboration zones</li>
                      <li>• State-of-the-art technology infrastructure</li>
                      <li>• Central location with excellent transport links</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Services</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Meeting room bookings for members</li>
                      <li>• Event hosting and organization</li>
                      <li>• Showcase opportunities for FinTechs</li>
                      <li>• Access to our network and resources</li>
                      <li>• Professional business address services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                Visit Our Space
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Connect with Berlin's leading FinTech ecosystem and accelerate your business growth with our comprehensive
            support network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Apply to Scale-Up Academy
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
