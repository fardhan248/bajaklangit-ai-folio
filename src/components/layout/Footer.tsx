import { Link } from "react-router-dom";
import { Cloud, Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo_transparan.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <div className="w-8 h-8 items-center justify-center">
                <img
                  src={logo}
                  alt="logo_transparan"
                  className="w-8 h-8 object-contain"
                />
                {/* <Cloud className="w-5 h-5 text-white" /> */}
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
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                <p>Pertanian</p>
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                <p>Penerbangan</p>
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                <p>Pertambangan</p>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a 
                  href="mailto:info@bajaklangit.com" 
                  className="text-sm text-muted-foreground hover:underline"
                >
                  info@bajaklangit.com
                </a>
                {/* <span className="text-sm text-muted-foreground">info@bajaklangit.com</span> */}
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a 
                href="tel:+6285797192870" 
                className="text-sm text-muted-foreground hover:underline"
                >
                +62 857 9719 2870
                </a>
                {/* <span className="text-sm text-muted-foreground">+62 85797192870</span> */}
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <a 
                href="https://wa.me/6285797192870" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-muted-foreground hover:underline"
                >
                WhatsApp Support
                </a>
                {/* <span className="text-sm text-muted-foreground">WhatsApp Support</span> */}
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