import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CloudRain, Leaf, Plane } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-sky">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container relative px-4 py-20 md:px-6 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            <span className="block">Membaca Langit,</span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Menyusun Keputusan
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl mb-8">
            Layanan analisis cuaca berbasis AI untuk mendukung pertanian, penerbangan, dan pertambangan.
            Dapatkan wawasan cuaca yang akurat untuk keputusan strategis Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="shadow-primary">
              <Link to="/services">
                Pelajari Layanan Kami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Pertanian</div>
                <p className="text-sm text-muted-foreground">Optimasi jadwal tanam</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Plane className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">Penerbangan</div>
                <p className="text-sm text-muted-foreground">Antisipasi cuaca ekstrem</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CloudRain className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Pertambangan</div>
                <p className="text-sm text-muted-foreground">Keselamatan operasional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;