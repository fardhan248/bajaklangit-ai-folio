import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Award, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-sky py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              Tentang <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Bajak Langit</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Memimpin revolusi analisis cuaca berbasis AI untuk masa depan yang lebih baik
            </p>
          </div>
        </div>
      </section>

      {/* About Bajak Langit Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-8 text-center">
              Siapa Kami
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Bajak Langit</strong> adalah layanan analisis cuaca berbasis AI yang memanfaatkan 
                data dari stasiun cuaca, radar, dan kolaborasi dengan berbagai stakeholder. Kami membantu 
                perusahaan dan petani membuat keputusan strategis berdasarkan kondisi cuaca yang akurat dan terprediksi.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Dengan menggabungkan teknologi kecerdasan buatan terdepan dan pemahaman mendalam tentang 
                meteorologi, kami menghadirkan solusi yang tidak hanya akurat, tetapi juga mudah dipahami 
                dan diterapkan dalam operasional sehari-hari.
              </p>
              <p className="text-lg leading-relaxed">
                Tim kami terdiri dari para ahli meteorologi, data scientist, dan engineer berpengalaman 
                yang berkomitmen untuk memberikan layanan terbaik bagi kemajuan berbagai sektor industri di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Menjadi platform analisis cuaca berbasis AI terdepan yang mendukung berbagai sektor 
                  dalam menghadapi ketidakpastian cuaca dengan data yang akurat, tepat waktu, dan mudah diakses.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Meningkatkan efisiensi, keselamatan, dan kepercayaan di berbagai sektor melalui 
                  penyediaan analisis cuaca berbasis AI yang inovatif, akurat, dan dapat diandalkan 
                  untuk mendukung pengambilan keputusan strategis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-12 text-center">
              Nilai-Nilai Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Safety */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Keselamatan</h3>
                <p className="text-muted-foreground">
                  Mengutamakan keselamatan dalam setiap rekomendasi dan analisis yang kami berikan.
                </p>
              </div>

              {/* Efficiency */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efisiensi</h3>
                <p className="text-muted-foreground">
                  Membantu klien mengoptimalkan operasional dengan informasi cuaca yang tepat waktu.
                </p>
              </div>

              {/* Data Quality */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kualitas Data</h3>
                <p className="text-muted-foreground">
                  Komitmen pada akurasi dan keandalan data dari sumber-sumber terpercaya.
                </p>
              </div>

              {/* Trust */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kepercayaan</h3>
                <p className="text-muted-foreground">
                  Membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;