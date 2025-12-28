import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Kontaktieren Sie uns</h1>
        <p className="text-white/80 max-w-2xl mx-auto px-4">
          Haben Sie Fragen zu unseren Leistungen oder benötigen Sie eine individuelle Lösung? Wir sind hier, um zu helfen.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Senden Sie uns eine Nachricht</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Vorname</Label>
                  <Input id="first-name" placeholder="Max" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nachname</Label>
                  <Input id="last-name" placeholder="Mustermann" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" placeholder="max@beispiel.de" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Betreff</Label>
                <Input id="subject" placeholder="Projektanfrage" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Wie können wir Ihnen helfen?" 
                  className="min-h-[150px] resize-none" 
                />
              </div>

              <Button className="bg-secondary hover:bg-secondary/90 text-white w-full md:w-auto px-8 py-6 text-lg">
                Nachricht senden
              </Button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <Card className="bg-muted/20 border-none shadow-none">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-secondary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Besuchen Sie unser Labor</h3>
                    <p className="text-muted-foreground">Musterstraße 123<br/>10115 Berlin, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Rufen Sie uns an</h3>
                    <p className="text-muted-foreground">+49 (0) 30 123-4567</p>
                    <p className="text-sm text-muted-foreground mt-1">Mo-Fr, 9:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Schreiben Sie uns</h3>
                    <p className="text-muted-foreground">hallo@printforge.de</p>
                    <p className="text-muted-foreground">support@printforge.de</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="bg-muted h-[300px] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5" />
              <p className="text-muted-foreground font-semibold z-10 flex items-center gap-2">
                <MapPin size={20} /> Kartenansicht
              </p>
              {/* Visual pattern to make it look like a map placeholder */}
              <div className="absolute inset-0 opacity-10" 
                   style={{backgroundImage: 'radial-gradient(#34495E 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
