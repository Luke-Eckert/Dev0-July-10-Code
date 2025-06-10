import { Check, Users, Calendar, FileText, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function JoinNetworkPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/70 backdrop-blur-[2px]" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-6">
            <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={80} height={80} className="h-16 w-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Network</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Become part of Berlin's premier FinTech community and access exclusive resources, events, and connections.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={60} height={60} className="h-12 w-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Membership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the House of Finance & Tech Berlin network and unlock a world of opportunities for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Exclusive Network Access",
                benefits: [
                  "Connect with 340+ FinTech companies",
                  "Direct access to investors and partners",
                  "Introductions to key industry players",
                  "Peer-to-peer knowledge sharing",
                ],
              },
              {
                icon: Calendar,
                title: "Events & Programs",
                benefits: [
                  "Priority access to all HoFT events",
                  "Exclusive member-only workshops",
                  "Scale-Up Academy eligibility",
                  "Speaking and showcase opportunities",
                ],
              },
              {
                icon: FileText,
                title: "Resources & Support",
                benefits: [
                  "Regulatory and compliance guidance",
                  "Funding and investment support",
                  "Market entry strategy assistance",
                  "Templates and business tools",
                ],
              },
              {
                icon: Building2,
                title: "Physical Space",
                benefits: [
                  "Access to Spittelmarkt Digital Hub",
                  "Meeting room privileges",
                  "Event space usage",
                  "Professional business address",
                ],
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={60} height={60} className="h-16 w-auto" />
                </div>
                <CardHeader className="pb-4">
                  <item.icon className="h-8 w-8 text-orange-500 mb-4" />
                  <CardTitle className="text-xl text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={60} height={60} className="h-12 w-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Membership Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the membership level that best fits your company's needs and growth stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={60} height={60} className="h-16 w-auto" />
              </div>
              <CardHeader className="pb-4 border-b">
                <CardTitle className="text-xl text-blue-900">Startup Membership</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">€1,500</div>
                <div className="text-sm text-gray-500">per year</div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">For early-stage companies (pre-Series A)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Basic network access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Event participation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Digital resources access</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Select Plan</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden scale-105 border-t-4 border-orange-500">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={60} height={60} className="h-16 w-auto" />
              </div>
              <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-1 text-sm font-medium">
                MOST POPULAR
              </div>
              <CardHeader className="pb-4 border-b pt-8">
                <CardTitle className="text-xl text-blue-900">Growth Membership</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">€5,000</div>
                <div className="text-sm text-gray-500">per year</div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">For Series A to B companies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Full network access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Priority event access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Scale-Up Academy eligibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Meeting room access (10 hrs/month)</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Select Plan</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={60} height={60} className="h-16 w-auto" />
              </div>
              <CardHeader className="pb-4 border-b">
                <CardTitle className="text-xl text-blue-900">Premium Membership</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">€10,000</div>
                <div className="text-sm text-gray-500">per year</div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">For established companies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">VIP network access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Speaking opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Dedicated advisor</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Unlimited meeting room access</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Select Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={60} height={60} className="h-12 w-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Apply for Membership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete the form below to start your application process. Our team will contact you within 48 hours.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-sm bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-5">
                <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={200} height={200} className="h-48 w-auto" />
              </div>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Company Website</Label>
                    <Input id="website" placeholder="https://" />
                  </div>

                  <div className="space-y-2">
                    <Label>Company Stage</Label>
                    <RadioGroup defaultValue="seed">
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="seed" id="seed" />
                          <Label htmlFor="seed">Seed / Pre-Series A</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="seriesA" id="seriesA" />
                          <Label htmlFor="seriesA">Series A-B</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="established" id="established" />
                          <Label htmlFor="established">Established</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {[
                        "Regulatory Support",
                        "Funding Access",
                        "Market Entry",
                        "Networking",
                        "Scale-Up Academy",
                        "Events",
                        "Office Space",
                        "Talent Acquisition",
                        "Legal Support",
                      ].map((interest, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <input type="checkbox" id={`interest-${i}`} className="rounded text-orange-500" />
                          <Label htmlFor={`interest-${i}`} className="text-sm">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your company</Label>
                    <Textarea
                      id="message"
                      placeholder="Please share a brief description of your company and what you hope to gain from membership"
                      rows={4}
                    />
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg">
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Image src="/images/hoft-logo.png" alt="HoFT Logo" width={300} height={300} className="h-64 w-auto" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Membership?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact our membership team to learn more about how House of Finance & Tech Berlin can support your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Schedule a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Email Membership Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
