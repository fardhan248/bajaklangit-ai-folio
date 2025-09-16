import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Plane, 
  Mountain, 
  Brain, 
  Satellite, 
  Database,
  Cloud,
  BarChart3,
  Shield
} from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-sky py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              Layanan <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kami</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Solusi analisis cuaca berbasis AI yang disesuaikan untuk kebutuhan spesifik industri Anda
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Agriculture Service */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Pertanian</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Optimasi produktivitas pertanian dengan analisis cuaca yang presisi untuk pengambilan keputusan yang tepat.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Jadwal Tanam</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rekomendasi waktu tanam optimal berdasarkan prediksi curah hujan, suhu, dan kelembaban.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Pencegahan Hama</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Deteksi dini kondisi cuaca yang berpotensi memicu serangan hama dan penyakit tanaman.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Manajemen Irigasi</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Optimasi penggunaan air dengan prediksi curah hujan dan evapotranspirasi.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Aviation Service */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plane className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Penerbangan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Meningkatkan keselamatan dan efisiensi operasi penerbangan dengan informasi cuaca real-time dan prediktif.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-xs">Cuaca Ekstrem</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Peringatan dini untuk turbulensi, badai petir, dan kondisi cuaca berbahaya lainnya.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-xs">Optimasi Rute</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rekomendasi rute penerbangan yang efisien berdasarkan kondisi angin dan cuaca.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-xs">Keselamatan Bandara</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Informasi visibilitas, arah angin, dan kondisi runway untuk operasi yang aman.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mining Service */}
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 gradient-card border-0">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Mountain className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Pertambangan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Memastikan keselamatan pekerja dan efisiensi operasi pertambangan dengan monitoring cuaca yang akurat.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Keselamatan Kerja</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Peringatan cuaca berbahaya untuk aktivitas outdoor dan operasi alat berat.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Efisiensi Operasional</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perencanaan operasi berdasarkan kondisi cuaca untuk maksimalkan produktivitas.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Mitigasi Risiko</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Antisipasi banjir, tanah longsor, dan dampak cuaca ekstrem lainnya.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-12 text-center">
              Teknologi Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* AI & ML */}
              <Card className="gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
                  <p className="text-muted-foreground mb-4">
                    Menggunakan algoritma Neural Network dan machine learning terdepan untuk analisis 
                    prediktif yang akurat dan pembelajaran berkelanjutan dari pola cuaca historis.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Neural Networks</Badge>
                    <Badge variant="outline" className="ml-2">Deep Learning</Badge>
                    <Badge variant="outline" className="ml-2">Predictive Analytics</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Data Sources */}
              <Card className="gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sumber Data Terpercaya</h3>
                  <p className="text-muted-foreground mb-4">
                    Mengintegrasikan data dari berbagai sumber terpercaya untuk memberikan 
                    analisis yang komprehensif dan akurat.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cloud className="w-5 h-5 text-primary" />
                      <span className="text-sm">BMKG (Badan Meteorologi Indonesia)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Satellite className="w-5 h-5 text-secondary" />
                      <span className="text-sm">Data Satelit Internasional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <span className="text-sm">Radar Cuaca</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-secondary" />
                      <span className="text-sm">Kementerian PUPR</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;