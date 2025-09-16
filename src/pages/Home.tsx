import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Plane, Mountain, CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Highlight Sectors Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Layanan untuk Berbagai Sektor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi analisis cuaca yang disesuaikan untuk kebutuhan spesifik industri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agriculture Card */}
            <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer gradient-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Pertanian</h3>
                <p className="text-muted-foreground mb-6">
                  Optimasi jadwal tanam, pencegahan hama dan penyakit, serta manajemen irigasi berdasarkan prediksi cuaca akurat.
                </p>
                <Button variant="outline" asChild className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Link to="/services">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Aviation Card */}
            <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer gradient-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Penerbangan</h3>
                <p className="text-muted-foreground mb-6">
                  Antisipasi cuaca ekstrem, optimasi rute penerbangan, dan peningkatan keselamatan operasional bandara.
                </p>
                <Button variant="outline" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to="/services">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mining Card */}
            <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer gradient-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Mountain className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Pertambangan</h3>
                <p className="text-muted-foreground mb-6">
                  Keselamatan kerja outdoor, efisiensi operasional, dan mitigasi risiko cuaca untuk industri ekstraktif.
                </p>
                <Button variant="outline" asChild className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Link to="/services">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-16 lg:py-24 gradient-sky">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  Mengapa Memilih Bajak Langit?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Kami menggabungkan teknologi AI terdepan dengan data cuaca komprehensif untuk memberikan 
                  wawasan yang akurat dan dapat ditindaklanjuti. Tim ahli kami memahami tantangan unik 
                  setiap industri dan menyediakan solusi yang disesuaikan.
                </p>
                <Button asChild size="lg" className="shadow-primary">
                  <Link to="/about">
                    Tentang Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data Akurat & Terpercaya</h3>
                    <p className="text-muted-foreground">Sumber data dari BMKG, satelit, radar, dan jaringan stasiun cuaca.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Teknologi AI Terdepan</h3>
                    <p className="text-muted-foreground">Machine learning dan neural networks untuk analisis prediktif yang presisi.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dukungan 24/7</h3>
                    <p className="text-muted-foreground">Tim ahli siap membantu Anda mengoptimalkan penggunaan data cuaca.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;