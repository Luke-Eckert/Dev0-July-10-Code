import { FileText, Building2, Shield, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LegalCompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-blue-900">
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Legal Framework & Compliance</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Navigate German regulations with confidence. Get regulatory approval that opens doors across Europe.
          </p>
        </div>
      </section>

      {/* Announcement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
              REGULATORY ADVANTAGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              German BaFin approval provides EU-wide recognition and credibility. Choose the right business structure
              and navigate compliance requirements with expert guidance from our Scale-Up Academy.
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Apply to Scale-Up Academy
            </Button>
          </div>
        </div>
      </section>

      {/* Company Structure Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            Choose Your Business Structure
          </h2>

          <Tabs defaultValue="gmbh" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="gmbh" className="text-lg py-3">
                GmbH (Recommended)
              </TabsTrigger>
              <TabsTrigger value="ug" className="text-lg py-3">
                UG (Simplified)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gmbh">
              <Card className="border-0 shadow-sm bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-2xl text-blue-900">
                    <Building2 className="h-8 w-8 text-orange-500 mr-3" />
                    GmbH - Gesellschaft mit beschränkter Haftung
                  </CardTitle>
                  <CardDescription className="text-lg">
                    The preferred choice for foreign companies expanding into Germany
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 text-lg">Advantages</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Excellent reputation and credibility</li>
                        <li>• Limited liability protection</li>
                        <li>• Flexible ownership structure</li>
                        <li>• Only one shareholder required</li>
                        <li>• Attractive to investors</li>
                        <li>• EU-wide recognition</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-4 text-lg">Requirements</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Minimum capital: €25,000</li>
                        <li>• At least one managing director</li>
                        <li>• German business address</li>
                        <li>• Local representative</li>
                        <li>• Notarized articles of association</li>
                        <li>• Commercial register entry</li>
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
                    UG - Unternehmergesellschaft
                  </CardTitle>
                  <CardDescription className="text-lg">
                    A simplified version of GmbH for smaller companies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 text-lg">Advantages</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Very low startup capital (€1 minimum)</li>
                        <li>• Quick and easy setup</li>
                        <li>• Limited liability protection</li>
                        <li>• Can convert to GmbH later</li>
                        <li>• Lower initial costs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-4 text-lg">Considerations</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li>• Less prestigious than GmbH</li>
                        <li>• Must retain 25% of profits</li>
                        <li>• "UG" must appear in company name</li>
                        <li>• May face credibility challenges</li>
                        <li>• Limited growth potential</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Incorporation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Incorporation Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Legal Structure",
                  description: "Choose between GmbH and UG based on your needs",
                  icon: FileText,
                },
                {
                  step: "2",
                  title: "Notarization",
                  description: "Draft and notarize articles of association",
                  icon: Shield,
                },
                {
                  step: "3",
                  title: "Registration",
                  description: "Register with commercial register and trade office",
                  icon: Building2,
                },
                {
                  step: "4",
                  title: "Tax Setup",
                  description: "Register for VAT, corporate tax, and trade tax",
                  icon: Calculator,
                },
              ].map((item, index) => (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-blue-900 mb-2">Step {item.step}</div>
                    <CardTitle className="text-xl text-blue-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Authorities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Key Regulatory Authorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Shield className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">BaFin</CardTitle>
                <CardDescription>Federal Financial Supervisory Authority</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Primary regulator for financial services. BaFin approval provides EU-wide recognition and credibility.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Visit BaFin
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Building2 className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Bundesbank</CardTitle>
                <CardDescription>German Central Bank</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Works alongside BaFin for banking supervision and monetary policy implementation.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Visit Bundesbank
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Calculator className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Tax Office</CardTitle>
                <CardDescription>Local Tax Registration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Register for VAT, corporate tax, and trade tax. Essential for legal business operations.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full">
                  Find Local Office
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Licensing Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">BaFin Licensing Strategy</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-blue-900">External Licensing</CardTitle>
                <CardDescription>Operate under another bank's BaFin license</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Faster speed to market</li>
                      <li>• Lower upfront costs</li>
                      <li>• Reduced liability exposure</li>
                      <li>• Less compliance burden</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Cons</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Limited control</li>
                      <li>• Selective partners</li>
                      <li>• Scalability limits</li>
                      <li>• Dependency risks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-blue-900">Internal Licensing</CardTitle>
                <CardDescription>Obtain your own BaFin license</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Full operational control</li>
                      <li>• Enhanced reputation</li>
                      <li>• Investor appeal</li>
                      <li>• Long-term scalability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Cons</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Longer licensing process</li>
                      <li>• Higher costs</li>
                      <li>• Complex compliance</li>
                      <li>• Resource intensive</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Expert Legal Guidance</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Navigate German regulations with confidence. Apply to our Scale-Up Academy for comprehensive legal and
            compliance support.
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
              Download Legal Checklist
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
