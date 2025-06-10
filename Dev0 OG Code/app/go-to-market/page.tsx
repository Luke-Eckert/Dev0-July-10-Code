import { ArrowRight, Building, MapPin, Users, Globe, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GoToMarketPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-office-space.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Go-To-Market Strategy</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Find the perfect space, adapt to the local market, and build your team in Berlin's vibrant business
            ecosystem.
          </p>
        </div>
      </section>

      {/* Announcement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
              MARKET ENTRY STRATEGY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Berlin's vibrant startup ecosystem has adapted to provide flexible office solutions, international talent
              pools, and a unique blend of German precision with creative innovation.
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Download Go-To-Market Checklist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Office Space Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Find the Perfect Space</h2>

          <Tabs defaultValue="coworking" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="coworking" className="text-lg py-3">
                Coworking Spaces
              </TabsTrigger>
              <TabsTrigger value="serviced" className="text-lg py-3">
                Serviced Offices
              </TabsTrigger>
              <TabsTrigger value="private" className="text-lg py-3">
                Private Offices
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coworking">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <Building className="h-8 w-8 text-orange-500 mr-3" />
                    Coworking Spaces
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4 text-lg">Benefits</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Flexible rental terms with no long-term commitment</li>
                        <li>• Built-in networking opportunities with other startups</li>
                        <li>• Access to shared facilities and meeting rooms</li>
                        <li>• All-inclusive pricing with utilities and internet</li>
                        <li>• Professional address for business registration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4 text-lg">Popular Options</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Factory Berlin (Mitte & Kreuzberg)</li>
                        <li>• WeWork (multiple locations)</li>
                        <li>• Mindspace (Friedrichstraße)</li>
                        <li>• Betahaus (Kreuzberg)</li>
                        <li>• The Drivery (Tempelhof)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="serviced">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <Building className="h-8 w-8 text-orange-500 mr-3" />
                    Serviced Offices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4 text-lg">Benefits</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• All-inclusive pricing with fully furnished spaces</li>
                        <li>• Reception and administrative support</li>
                        <li>• More privacy than coworking spaces</li>
                        <li>• Professional business address</li>
                        <li>• Flexible contracts (3-12 months)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4 text-lg">Popular Options</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Regus (multiple locations)</li>
                        <li>• Design Offices (Unter den Linden)</li>
                        <li>• Satellite Office (Gendarmenmarkt)</li>
                        <li>• Agendis Business Center (Potsdamer Platz)</li>
                        <li>• ecos office center (Kurfürstendamm)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="private">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <Building className="h-8 w-8 text-orange-500 mr-3" />
                    Private Offices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4 text-lg">Benefits</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Complete customization and branding opportunities</li>
                        <li>• Maximum privacy and security</li>
                        <li>• Scalable space for growing teams</li>
                        <li>• Established presence in the Berlin market</li>
                        <li>• Long-term stability with traditional leases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-4 text-lg">Popular Areas</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Mitte: Central hub for visibility and prestige</li>
                        <li>• Kreuzberg: Creative hotspot for tech companies</li>
                        <li>• Friedrichshain: Youthful energy and innovation</li>
                        <li>• Prenzlauer Berg: Stylish spaces in renovated buildings</li>
                        <li>• Charlottenburg: Modern high-end corporate offices</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Berlin Districts Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Berlin Business Districts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Mitte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Berlin's central district and traditional business hub. Home to government institutions, corporate
                  headquarters, and prestigious office addresses.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Perfect for:</strong> Financial services, corporate headquarters, established businesses
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Kreuzberg</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Berlin's creative heart with a vibrant startup scene. Trendy, diverse, and home to many tech companies
                  and coworking spaces.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Perfect for:</strong> Tech startups, creative agencies, digital innovators
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Friedrichshain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Young, energetic district with a growing tech scene. Home to many startups and the iconic Oberbaum
                  Bridge connecting to Kreuzberg.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Perfect for:</strong> Growth-stage startups, tech companies, innovative businesses
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Prenzlauer Berg</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Upscale residential area with stylish office spaces in renovated old buildings. Popular with media and
                  design companies.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Perfect for:</strong> Media companies, design studios, boutique agencies
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Charlottenburg</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Traditional West Berlin business district with elegant buildings and high-end offices. Home to many
                  law firms and corporate offices.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Perfect for:</strong> Law firms, consulting agencies, established businesses
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Adlershof</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Berlin's Science and Technology Park with research institutions and tech companies. Modern facilities
                  and room for expansion.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Perfect for:</strong> Research-focused companies, tech innovators, science startups
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Market Adaptation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Local Market Adaptation</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Globe className="h-7 w-7 text-orange-500 mr-3" />
                Cultural Nuances
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Precision and structure</strong> are highly valued, though Berlin
                    tends to be more flexible and international than other German cities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Punctuality</strong> is expected in meetings, with detailed
                    documentation and preparation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Direct communication</strong> is preferred, with a focus on
                    quality and long-term relationships
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Work-life balance</strong> is highly valued, with clear boundaries
                    between professional and personal time
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Briefcase className="h-7 w-7 text-orange-500 mr-3" />
                Consumer Behavior
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Trust is paramount</strong> - marketing should focus on honesty,
                    transparency, and quality
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Data privacy</strong> is taken very seriously, with strict
                    adherence to GDPR and other regulations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Value-conscious</strong> consumers who appreciate quality,
                    sustainability, and innovation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span>
                    <strong className="text-gray-900">Digital adoption</strong> is high, but with a preference for
                    security and established solutions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Hiring Great People</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Users className="h-7 w-7 text-orange-500 mr-3" />
                Berlin's Talent Advantage
              </h3>
              <p className="text-gray-600 mb-6">
                Berlin is a magnet for top talent in FinTech and technology, with a diverse international workforce and
                low language barriers. The city's unique culture and high quality of life help attract and retain
                skilled professionals from around the world.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">In-Demand Skills</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI & Machine Learning</li>
                    <li>• Cloud Technology</li>
                    <li>• Blockchain Development</li>
                    <li>• UX/UI Design</li>
                    <li>• Data Science & Analytics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Recruitment Channels</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tech meetups and conferences</li>
                    <li>• University partnerships</li>
                    <li>• Specialized recruiters</li>
                    <li>• Berlin Job Board</li>
                    <li>• LinkedIn and XING</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                Download Hiring Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enter the Berlin Market?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Download our comprehensive Go-To-Market Checklist and plan your successful entry into the Berlin business
            ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Download Go-To-Market Checklist
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
