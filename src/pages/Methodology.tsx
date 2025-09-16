import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Satellite, 
  BarChart3, 
  Brain, 
  Smartphone, 
  Monitor,
  Cloud,
  Radio
} from "lucide-react";
import db from "@/assets/dashboard.png";
import wa from "@/assets/whatsapp.png";

const Methodology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-sky py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Metodologi</span> Kami
            </h1>
            <p className="text-lg text-muted-foreground">
              Proses analisis cuaca berbasis AI dengan teknologi terdepan dan sumber data terpercaya
            </p>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-12 text-center">
              Sumber Data Kami
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* BMKG */}
              <Card className="text-center gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">BMKG</h3>
                  <p className="text-sm text-muted-foreground">
                    Data stasiun cuaca resmi dari Badan Meteorologi, Klimatologi, dan Geofisika Indonesia
                  </p>
                </CardContent>
              </Card>

              {/* Satellite */}
              <Card className="text-center gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Satellite className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Satelit</h3>
                  <p className="text-sm text-muted-foreground">
                    Citra satelit internasional untuk monitoring awan, suhu permukaan, dan kondisi atmosfer
                  </p>
                </CardContent>
              </Card>

              {/* Radar */}
              <Card className="text-center gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Radio className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Radar Cuaca</h3>
                  <p className="text-sm text-muted-foreground">
                    Data radar untuk deteksi real-time presipitasi, intensitas hujan, dan pergerakan badai
                  </p>
                </CardContent>
              </Card>

              {/* PUPR */}
              <Card className="text-center gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Kementerian PUPR</h3>
                  <p className="text-sm text-muted-foreground">
                    Data hidrologi dan klimatologi untuk analisis ketersediaan air dan curah hujan
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Methods Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-12 text-center">
              Metode Analisis
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Numerical WRF */}
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Model Numerik WRF</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Weather Research and Forecasting (WRF) adalah model prediksi cuaca numerik yang digunakan 
                    untuk simulasi dan prediksi kondisi atmosfer dengan resolusi tinggi.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium mb-1">Resolusi Spasial Tinggi</h4>
                        <p className="text-sm text-muted-foreground">Simulasi dengan grid hingga 1km untuk akurasi lokal yang optimal</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium mb-1">Multi-Physics</h4>
                        <p className="text-sm text-muted-foreground">Berbagai skema fisika untuk berbagai kondisi geografis Indonesia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium mb-1">Ensemble Forecasting</h4>
                        <p className="text-sm text-muted-foreground">Multiple runs untuk mengukur tingkat kepercayaan prediksi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Machine Learning */}
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Brain className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Machine Learning & Neural Networks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Algoritma pembelajaran mesin dan jaringan saraf untuk analisis pola cuaca kompleks 
                    dan peningkatan akurasi prediksi berdasarkan data historis.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium mb-1">Deep Learning Networks</h4>
                        <p className="text-sm text-muted-foreground">LSTM dan CNN untuk analisis time series dan pattern recognition</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium mb-1">Ensemble Methods</h4>
                        <p className="text-sm text-muted-foreground">Random Forest dan Gradient Boosting untuk prediksi ensemble</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium mb-1">Continuous Learning</h4>
                        <p className="text-sm text-muted-foreground">Model terus belajar dari data baru untuk peningkatan akurasi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Output Examples Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-12 text-center">
              Contoh Output
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Dashboard */}
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Monitor className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Dashboard Interaktif</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center mb-4">
                    <div className="aspect-video overflow-hidden">
                      <img
                      src={db}
                      alt="dashboard"
                      className="w-full h-full object-cover"
                      />
                      {/* <Monitor className="w-12 h-12 text-primary/60 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Dashboard Preview</p> */}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Dashboard real-time yang menampilkan kondisi cuaca terkini, prediksi jangka pendek dan menengah, 
                    serta rekomendasi actionable untuk setiap sektor industri.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Visualisasi peta interaktif</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Grafik trend cuaca</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">Alert dan notifikasi</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Bot */}
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Smartphone className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">WhatsApp Bot</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <div className="aspect-video overflow-hidden">
                      <img
                      src={wa}
                      alt="whatsapp"
                      className="w-full h-full object-cover"
                      />
                      {/* <Smartphone className="w-12 h-12 text-secondary/60 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">WhatsApp Bot Interface</p> */}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Bot WhatsApp yang memberikan update cuaca real-time, peringatan dini, dan rekomendasi 
                    berdasarkan lokasi dan kebutuhan spesifik pengguna.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-sm">Notifikasi push otomatis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-sm">Query cuaca by location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-sm">Personalized recommendations</span>
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

export default Methodology;