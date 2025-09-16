import { Link } from "react-router-dom";
import { Cloud, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Bajak Langit
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Layanan analisis cuaca berbasis AI untuk mendukung pertanian, penerbangan, dan pertambangan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi Cepat</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Tentang Kami
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Layanan
              </Link>
              <Link to="/methodology" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Metodologi
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Pertanian</p>
              <p className="text-sm text-muted-foreground">Penerbangan</p>
              <p className="text-sm text-muted-foreground">Pertambangan</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@bajaklangit.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Bajak Langit. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;