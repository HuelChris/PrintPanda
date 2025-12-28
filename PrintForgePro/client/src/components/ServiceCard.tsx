import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, image, icon }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="mb-4 p-3 bg-secondary/10 w-fit rounded-lg text-secondary">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-6">
          {description}
        </CardDescription>
        <Link href="/services">
          <a className="inline-flex items-center text-secondary font-semibold hover:gap-2 transition-all group-hover:text-secondary/80">
            Learn More <ArrowRight className="ml-1 w-4 h-4" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
