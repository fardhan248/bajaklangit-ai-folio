import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import bajakLangitLogo from "@/assets/logo_transparan.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, userRole, signOut, loading } = useAuth();

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Layanan", path: "/services" },
    { name: "Proyek", path: "/projects" },
    { name: "Metodologi", path: "/methodology" },
    { name: "Testimoni", path: "/testimonials" },
    { name: "Kontak", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 font-bold text-xl">
          <img 
            src={bajakLangitLogo} 
            alt="Bajak Langit Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bajak Langit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {!loading && (
            <div className="flex items-center space-x-2">
              {user ? (
                <>
                  {userRole === 'admin' && (
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/admin">
                        <Settings className="h-4 w-4 mr-1" />
                        Admin
                      </Link>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-1" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button variant="default" size="sm" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {!loading && (
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  {user ? (
                    <>
                      {userRole === 'admin' && (
                        <Button variant="outline" size="sm" asChild>
                          <Link to="/admin" onClick={() => setIsOpen(false)}>
                            <Settings className="h-4 w-4 mr-1" />
                            Admin Dashboard
                          </Link>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" onClick={handleSignOut}>
                        <LogOut className="h-4 w-4 mr-1" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button variant="default" size="sm" asChild>
                      <Link to="/auth" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
export default Navigation;