import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Basic client-side validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        toast({
          title: "Error",
          description: "Semua field harus diisi.",
          variant: "destructive"
        });
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Error",
          description: "Format email tidak valid.",
          variant: "destructive"
        });
        return;
      }

      // Check rate limiting
      const { data: rateLimitOk } = await supabase.rpc('check_contact_rate_limit', {
        _email: formData.email.toLowerCase()
      });

      if (!rateLimitOk) {
        toast({
          title: "Terlalu Banyak Permintaan",
          description: "Anda telah mengirim terlalu banyak pesan. Silakan coba lagi dalam 1 jam.",
          variant: "destructive"
        });
        return;
      }

      // Sanitize input data
      const sanitizedData = {
        name: formData.name.trim().slice(0, 100),
        email: formData.email.toLowerCase().trim().slice(0, 255),
        message: formData.message.trim().slice(0, 5000)
      };

      const { error } = await supabase
        .from("contacts")
        .insert([sanitizedData]);

      if (error) throw error;

      // Show success message
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih! Kami akan segera menghubungi Anda.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-sky py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              Hubungi <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kami</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Siap membantu Anda dengan layanan analisis cuaca berbasis AI. Mari diskusikan kebutuhan bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Mari Berkolaborasi</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tim ahli kami siap membantu Anda mengoptimalkan operasional bisnis dengan 
                  teknologi analisis cuaca terdepan. Konsultasi gratis tersedia!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <Card className="gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          <a 
                          href="mailto:info@bajaklangit.com" 
                          className="text-sm text-muted-foreground hover:underline"
                          >
                            info@bajaklangit.com
                          </a>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <a 
                          href="mailto:support@bajaklangit.com" 
                          className="text-sm text-muted-foreground hover:underline"
                          >
                            support@bajaklangit.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telepon</h3>
                        <p className="text-muted-foreground">
                        <a 
                        href="tel:+6285797192870" 
                        className="text-sm text-muted-foreground hover:underline"
                        >
                        +62 85797192870
                        </a>
                        </p>
                        <p className="text-sm text-muted-foreground">Senin - Jumat, 08:00 - 17:00 WIB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="text-muted-foreground">
                         <a 
                          href="https://wa.me/6285797192870" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-muted-foreground hover:underline"
                          >
                          +62 812 3456 7890
                          </a>
                        </p>
                        <p className="text-sm text-muted-foreground">Support 24/7 tersedia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office */}
                <Card className="gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Kantor Pusat</h3>
                        <p className="text-muted-foreground">
                          <a 
                          href="https://maps.app.goo.gl/xYVtehEscvYTYPTTA" 
                          className="text-sm text-muted-foreground hover:underline"
                          >
                          JL. Jenderal Gatot Subroto No. 170 Kelurahan <br/>
                          Gumuruh Kecamatan Batununggal Kota Bandung
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Business Hours */}
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">Jam Operasional</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="text-muted-foreground">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="text-muted-foreground">09:00 - 14:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="text-muted-foreground">Tutup</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">Emergency support 24/7 via WhatsApp</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                  <p className="text-muted-foreground">
                    Ceritakan kebutuhan Anda dan tim kami akan merespons dalam 24 jam
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nama Lengkap *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap Anda"
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Pesan *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Ceritakan kebutuhan bisnis Anda atau pertanyaan tentang layanan kami..."
                        rows={6}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full shadow-primary"
                    >
                      {isSubmitting ? (
                        "Mengirim..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Dengan mengirim pesan ini, Anda menyetujui bahwa kami dapat menghubungi Anda 
                      untuk memberikan informasi lebih lanjut tentang layanan kami.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;