import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ServiceCard from "@/components/ServiceCard";
import PortfolioItem from "@/components/PortfolioItem";
import { ArrowRight, Layers, Zap, Box, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/hero_background_of_high-tech_3d_printing.png";
import fdmImage from "@assets/generated_images/fdm_3d_printer_service_image.png";
import slaImage from "@assets/generated_images/sla_resin_3d_printer_service_image.png";
import slsImage from "@assets/generated_images/sls_powder_3d_printer_service_image.png";
import p1 from "@assets/generated_images/portfolio_architectural_model.png";
import p2 from "@assets/generated_images/portfolio_mechanical_prototype.png";
import p3 from "@assets/generated_images/portfolio_medical_model.png";
import p4 from "@assets/generated_images/portfolio_artistic_vase.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="3D Printing Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Verwandeln Sie Ideen in <span className="text-secondary">Realität</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Professionelle 3D-Druckdienstleistungen für Rapid Prototyping und industrielle Fertigung. 
              Schnelle Bearbeitung, Präzisionsqualität und eine große Auswahl an Materialien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 rounded-full">
                  Sofortangebot erhalten <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 rounded-full">
                  Portfolio ansehen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Unsere Leistungen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir bieten ein umfassendes Angebot an additiven Fertigungstechnologien für Ihre spezifischen Projektanforderungen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="FDM-Druck" 
              description="Fused Deposition Modeling für kostengünstige funktionale Prototypen und Endanwendungsteile."
              image={fdmImage}
              icon={<Layers size={24} />}
            />
            <ServiceCard 
              title="SLA-Harz" 
              description="Stereolithografie für hohe Detailgenauigkeit und glatte Oberflächen. Ideal für filigrane Designs."
              image={slaImage}
              icon={<Zap size={24} />}
            />
            <ServiceCard 
              title="SLS-Nylon" 
              description="Selektives Lasersintern für langlebige Funktionsteile mit komplexen Geometrien."
              image={slsImage}
              icon={<Box size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Warum PrintForge?</h2>
              <div className="space-y-6">
                {[
                  { title: "Industriequalität", desc: "Wir verwenden erstklassige Maschinen für präzise Toleranzen und überlegene Oberflächen." },
                  { title: "Schnelle Bearbeitung", desc: "Standardbestellungen werden innerhalb von 48 Stunden versandt. Eilbearbeitung verfügbar." },
                  { title: "Materialexpertise", desc: "Von PLA und ABS bis hin zu Kohlefaser und flexiblen Harzen." },
                  { title: "Design-Unterstützung", desc: "Unsere Ingenieure prüfen jede Datei auf Druckbarkeit und Kostenoptimierung." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="text-secondary w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
               <div className="grid grid-cols-2 gap-2 h-full">
                 <img src={p1} alt="Detail" className="w-full h-full object-cover" />
                 <img src={p2} alt="Detail" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Aktuelle Projekte</h2>
              <p className="text-primary-foreground/70 max-w-xl">
                Entdecken Sie unsere neuesten Arbeiten aus verschiedenen Branchen, von Medizin bis Luft- und Raumfahrt.
              </p>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" className="hidden md:flex text-white border-white hover:bg-white hover:text-primary">
                Komplettes Portfolio ansehen
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PortfolioItem title="Büroturm-Modell" category="Architektur" image={p1} />
            <PortfolioItem title="Getriebebaugruppe" category="Technik" image={p2} />
            <PortfolioItem title="Zahnform" category="Medizin" image={p3} />
            <PortfolioItem title="Voronoi-Vase" category="Kunst & Design" image={p4} />
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary w-full">
                Komplettes Portfolio ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">Bereit, Ihr Projekt zu starten?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Laden Sie Ihre STL-Dateien hoch und erhalten Sie in Sekunden ein Angebot. Unser Team ist bereit, Ihre Vision zu verwirklichen.
          </p>
          <Link href="/quote">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all">
              Bestellung starten
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
