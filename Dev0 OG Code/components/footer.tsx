import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <div className="text-white font-bold">HFT</div>
              </div>
              <div>
                <div className="text-xl font-bold">House of Finance</div>
                <div className="text-xl font-bold">& Tech Berlin</div>
              </div>
            </div>
            <p className="text-blue-100">
              Together, we shape the future of finance. Join us in driving collaboration and innovation for a stronger
              and impactful FinTech ecosystem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/why-berlin" className="text-blue-100 hover:text-orange-300 transition-colors">
                  Why Berlin
                </Link>
              </li>
              <li>
                <Link href="/legal-compliance" className="text-blue-100 hover:text-orange-300 transition-colors">
                  Legal & Compliance
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-blue-100 hover:text-orange-300 transition-colors">
                  Funding
                </Link>
              </li>
              <li>
                <Link href="/go-to-market" className="text-blue-100 hover:text-orange-300 transition-colors">
                  Go-to-Market
                </Link>
              </li>
              <li>
                <Link href="/living-berlin" className="text-blue-100 hover:text-orange-300 transition-colors">
                  Living in Berlin
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-blue-100 hover:text-orange-300 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">Spittelmarkt Digital Hub, 10178 Berlin, Germany</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-blue-100">+49 30 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-blue-100">info@hoft.berlin</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Join Our Network</h3>
            <p className="text-blue-100 mb-4">
              Subscribe to our newsletter and stay updated on the latest events, opportunities, and insights.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} House of Finance & Tech Berlin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-blue-200 hover:text-orange-300 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-200 hover:text-orange-300 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-blue-200 hover:text-orange-300 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
