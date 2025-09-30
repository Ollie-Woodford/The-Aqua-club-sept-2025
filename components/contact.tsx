import { Mail, MapPin, MessageCircle, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Us
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get in touch with The Aqua Club for bookings and inquiries.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
          <Card className="bg-background/60 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground">Send us an email</p>
                </div>
              </div>
              <a 
                href="mailto:theaquaclubpoker@gmail.com"
                className="text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                theaquaclubpoker@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Instagram className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-lg font-semibold">Instagram</h3>
                  <p className="text-muted-foreground">Follow us on social media</p>
                </div>
              </div>
              <a 
                href="https://instagram.com/theaquaclubpoker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                @theaquaclubpoker
              </a>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-muted-foreground">Where to find us</p>
                </div>
              </div>
              <p className="text-foreground">
                London, United Kingdom
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="h-8 w-8 text-cyan-500" />
                <div>
                  <h3 className="text-lg font-semibold">WhatsApp</h3>
                  <p className="text-muted-foreground">Quick messaging</p>
                </div>
              </div>
              <div className="space-y-1">
                <a 
                  href="https://wa.me/442076026489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-400 transition-colors block"
                >
                  +44 20 7602 6489
                </a>
                <p className="text-sm text-muted-foreground">(messages only)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}