import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PortfolioItem from "@/components/PortfolioItem";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import p1 from "@assets/generated_images/portfolio_architectural_model.png";
import p2 from "@assets/generated_images/portfolio_mechanical_prototype.png";
import p3 from "@assets/generated_images/portfolio_medical_model.png";
import p4 from "@assets/generated_images/portfolio_artistic_vase.png";
import heroImage from "@assets/generated_images/hero_background_of_high-tech_3d_printing.png";

// Mock data - normally would come from an API
const portfolioItems = [
  { id: 1, title: "Moderner Wolkenkratzer", category: "Architektur", image: p1, client: "Urban Architects" },
  { id: 2, title: "Planetengetriebe", category: "Technik", image: p2, client: "TechMech Solutions" },
  { id: 3, title: "Zahnkorrektur-Modell", category: "Medizin", image: p3, client: "Smile Direct" },
  { id: 4, title: "Voronoi-Skulptur", category: "Kunst", image: p4, client: "Unabhängiger Künstler" },
  { id: 5, title: "Drohnen-Chassis", category: "Technik", image: heroImage, client: "AeroDynamics" },
  // Repeating for grid effect
  { id: 6, title: "Komplexer Verteiler", category: "Technik", image: p2, client: "Fluid Systems" },
  { id: 7, title: "Stadtplanungs-Modell", category: "Architektur", image: p1, client: "Stadtrat" },
  { id: 8, title: "Chirurgische Führung", category: "Medizin", image: p3, client: "Stadtklinikum" },
];

const categories = ["Alle", "Technik", "Architektur", "Medizin", "Kunst"];

export default function Portfolio() {
  const [filter, setFilter] = useState("Alle");

  const filteredItems = filter === "Alle" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-primary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Unser Portfolio</h1>
        <p className="text-white/80 max-w-2xl mx-auto px-4">
          Entdecken Sie, was mit additiver Fertigung möglich ist. Von funktionalen Prototypen bis hin zu Endanwendungsteilen.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 ${
                filter === cat 
                  ? "bg-secondary hover:bg-secondary/90 text-white border-none" 
                  : "border-muted-foreground text-muted-foreground hover:text-primary hover:border-primary"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <PortfolioItem 
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              client={item.client}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
