import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  profession: string;
  sector: string;
  testimonial: string;
  photo_url?: string;
  created_at: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Placeholder testimonials (will be replaced by Supabase data when available)
  const placeholderTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ir. Bambang Sutrisno",
      profession: "Ketua Kelompok Tani Maju Sejahtera",
      sector: "Pertanian",
      testimonial: "Sejak menggunakan layanan Bajak Langit, produktivitas sawah kami meningkat drastis. Prediksi cuaca yang akurat membantu kami menentukan waktu tanam yang tepat dan menghindari kerugian akibat cuaca ekstrem. Sangat direkomendasikan untuk petani modern!",
      photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      created_at: "2024-01-20"
    },
    {
      id: "2",
      name: "Capt. Sari Indrawati",
      profession: "Pilot Senior Garuda Indonesia",
      sector: "Penerbangan",
      testimonial: "Sistem peringatan cuaca dari Bajak Langit sangat membantu dalam perencanaan penerbangan. Informasi real-time tentang turbulensi dan cuaca ekstrem membuat kami bisa membuat keputusan yang tepat untuk keselamatan penumpang. Interface yang user-friendly dan data yang akurat.",
      photo_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      created_at: "2024-02-15"
    },
    {
      id: "3", 
      name: "Drs. Ahmad Fauzi, MT",
      profession: "Site Manager PT Berau Coal",
      sector: "Pertambangan",
      testimonial: "Keselamatan adalah prioritas utama dalam operasi tambang kami. Bajak Langit memberikan peringatan dini yang sangat akurat tentang kondisi cuaca yang berpotensi berbahaya. Hal ini membantu kami dalam pengambilan keputusan operasional dan melindungi keselamatan pekerja.",
      photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      created_at: "2024-03-05"
    },
    {
      id: "4",
      name: "Dr. Maya Sari, SP",
      profession: "Peneliti Balai Penelitian Tanaman Padi",
      sector: "Pertanian", 
      testimonial: "Sebagai peneliti, kami membutuhkan data cuaca yang presisi untuk penelitian varietas padi. Bajak Langit menyediakan data historis dan prediksi yang sangat detail, membantu kami dalam analisis korelasi antara kondisi cuaca dengan pertumbuhan tanaman.",
      photo_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      created_at: "2024-02-28"
    },
    {
      id: "5",
      name: "Ir. Rizky Pratama",
      profession: "Operations Manager Bandara Juanda",
      sector: "Penerbangan",
      testimonial: "Sistem monitoring cuaca Bajak Langit terintegrasi dengan operasi bandara kami. Prediksi visibilitas dan arah angin yang akurat sangat membantu dalam scheduling penerbangan dan memastikan operasi yang aman dan efisien.",
      photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      created_at: "2024-03-12"
    }
  ];

  useEffect(() => {
    // TODO: Fetch from Supabase when available
    // For now, use placeholder data
    setTestimonials(placeholderTestimonials);
  }, []);

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case "Pertanian":
        return "secondary";
      case "Penerbangan":
        return "default";
      case "Pertambangan":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-sky py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Testimoni</span> Klien
            </h1>
            <p className="text-lg text-muted-foreground">
              Dengarkan langsung pengalaman klien kami yang telah merasakan manfaat layanan analisis cuaca berbasis AI
            </p>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-2xl font-bold mb-2">4.9/5 Rating Kepuasan Klien</h2>
            <p className="text-muted-foreground">
              Berdasarkan 150+ review dari berbagai sektor industri
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          {testimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Testimoni sedang dimuat atau belum tersedia.
              </p>
              <p className="text-sm text-muted-foreground">
                Silakan hubungi kami untuk informasi lebih lanjut tentang pengalaman klien kami.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 relative overflow-hidden">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.photo_url} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{testimonial.profession}</p>
                        <Badge variant={getSectorColor(testimonial.sector) as any} className="text-xs">
                          {testimonial.sector}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bergabunglah dengan Klien yang Puas
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rasakan sendiri manfaat layanan analisis cuaca berbasis AI untuk bisnis Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-primary hover:bg-primary/90 transition-colors"
              >
                Konsultasi Gratis
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;