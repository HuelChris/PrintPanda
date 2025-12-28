import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ServiceCard from "@/components/ServiceCard";
import { Layers, Zap, Box, Settings, Palette, Repeat } from "lucide-react";
import fdmImage from "@assets/generated_images/fdm_3d_printer_service_image.png";
import slaImage from "@assets/generated_images/sla_resin_3d_printer_service_image.png";
import slsImage from "@assets/generated_images/sls_powder_3d_printer_service_image.png";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Unsere Leistungen</h1>
        <p className="text-white/80 max-w-2xl mx-auto px-4">
          Umfassende Lösungen für die additive Fertigung für jede Phase der Produktentwicklung.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="FDM-Druck" 
            description="Fused Deposition Modeling ist perfekt für kostengünstiges Rapid Prototyping und einfache Funktionsteile. Materialien umfassen PLA, ABS, PETG und TPU."
            image={fdmImage}
            icon={<Layers size={24} />}
          />
          <ServiceCard 
            title="SLA-Harz" 
            description="Stereolithografie produziert Teile mit hoher Auflösung und glatten Oberflächen. Ideal für visuelle Prototypen, Dentalmodelle und Schmuckvorlagen."
            image={slaImage}
            icon={<Zap size={24} />}
          />
          <ServiceCard 
            title="SLS-Nylon" 
            description="Selektives Lasersintern erstellt langlebige, funktionale Teile ohne Stützstrukturen. Perfekt für komplexe Geometrien und Kleinserien."
            image={slsImage}
            icon={<Box size={24} />}
          />
           <ServiceCard 
            title="Rapid Prototyping" 
            description="Iterieren Sie schneller mit unserem Express-Service. Erhalten Sie Teile in nur 24 Stunden, um Passform, Form und Funktion zu testen."
            image={fdmImage}
            icon={<Repeat size={24} />}
          />
           <ServiceCard 
            title="Nachbearbeitung" 
            description="Wir bieten Schleifen, Lackieren, Polieren und Dampfglätten an, um Ihren 3D-gedruckten Teilen ein professionelles Finish zu verleihen."
            image={slaImage}
            icon={<Palette size={24} />}
          />
           <ServiceCard 
            title="Konstruktion & Design" 
            description="Unsere Ingenieure helfen Ihnen, Ihre 3D-Modelle für die additive Fertigung (DfAM) zu optimieren, um Kosten zu senken und die Stabilität zu verbessern."
            image={slsImage}
            icon={<Settings size={24} />}
          />
        </div>
      </div>

      {/* Materials Table Section - Simplified */}
      <div className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Materialvergleich</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="p-4 text-left">Material</th>
                  <th className="p-4 text-left">Technologie</th>
                  <th className="p-4 text-left">Stärke</th>
                  <th className="p-4 text-left">Detailgenauigkeit</th>
                  <th className="p-4 text-left">Hitzebeständigkeit</th>
                  <th className="p-4 text-left">Geeignet für</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-semibold">PLA</td>
                  <td className="p-4">FDM</td>
                  <td className="p-4">Mittel</td>
                  <td className="p-4">Mittel</td>
                  <td className="p-4">Niedrig</td>
                  <td className="p-4">Konzeptmodelle, visuelle Prototypen</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">ABS</td>
                  <td className="p-4">FDM</td>
                  <td className="p-4">Hoch</td>
                  <td className="p-4">Mittel</td>
                  <td className="p-4">Mittel</td>
                  <td className="p-4">Funktionsteile, Gehäuse</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Standard Harz</td>
                  <td className="p-4">SLA</td>
                  <td className="p-4">Niedrig</td>
                  <td className="p-4">Sehr Hoch</td>
                  <td className="p-4">Niedrig</td>
                  <td className="p-4">Hochdetaillierte Modelle, Miniaturen</td>
                </tr>
                 <tr>
                  <td className="p-4 font-semibold">Nylon PA12</td>
                  <td className="p-4">SLS</td>
                  <td className="p-4">Sehr Hoch</td>
                  <td className="p-4">Hoch</td>
                  <td className="p-4">Hoch</td>
                  <td className="p-4">Endanwendungsteile, Zahnräder, Scharniere</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
