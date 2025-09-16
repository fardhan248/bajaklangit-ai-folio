import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Leaf, Plane, Mountain, Calendar, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  sector: string;
  description: string;
  image_url: string;
  created_at: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Placeholder projects (will be replaced by Supabase data when available)
  const placeholderProjects: Project[] = [
    {
      id: "1",
      title: "Optimasi Jadwal Tanam Padi - Karawang",
      sector: "Pertanian",
      description: "Implementasi sistem prediksi cuaca untuk optimasi jadwal tanam padi di wilayah Karawang, Jawa Barat. Proyek ini berhasil meningkatkan produktivitas petani sebesar 25% dengan mengurangi risiko gagal panen akibat cuaca ekstrem. Sistem menganalisis pola curah hujan, suhu, dan kelembaban untuk memberikan rekomendasi waktu tanam yang optimal.",
      image_url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop",
      created_at: "2024-01-15"
    },
    {
      id: "2", 
      title: "Sistem Peringatan Cuaca Bandara Soekarno-Hatta",
      sector: "Penerbangan",
      description: "Pengembangan sistem peringatan dini cuaca ekstrem untuk Bandara Soekarno-Hatta. Sistem ini memberikan notifikasi real-time tentang kondisi cuaca yang berpotensi membahayakan operasi penerbangan, termasuk deteksi turbulensi, badai petir, dan angin kencang. Hasilnya mengurangi delay penerbangan sebesar 30%.",
      image_url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop",
      created_at: "2024-02-20"
    },
    {
      id: "3",
      title: "Monitoring Cuaca Tambang Batubara - Kalimantan",
      sector: "Pertambangan", 
      description: "Implementasi sistem monitoring cuaca untuk operasi tambang batubara di Kalimantan Timur. Sistem memberikan peringatan dini untuk kondisi cuaca yang dapat mengganggu operasi dan membahayakan keselamatan pekerja. Termasuk prediksi curah hujan tinggi yang berpotensi menyebabkan banjir di area tambang.",
      image_url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
      created_at: "2024-03-10"
    }
  ];

  useEffect(() => {
    // TODO: Fetch from Supabase when available
    // For now, use placeholder data
    setProjects(placeholderProjects);
  }, []);

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case "Pertanian":
        return <Leaf className="w-5 h-5" />;
      case "Penerbangan":
        return <Plane className="w-5 h-5" />;
      case "Pertambangan":
        return <Mountain className="w-5 h-5" />;
      default:
        return <Leaf className="w-5 h-5" />;
    }
  };

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-sky py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              Proyek <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kami</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Berbagai proyek analisis cuaca yang telah berhasil kami implementasikan untuk mendukung berbagai sektor industri
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Proyek sedang dimuat atau belum tersedia.
              </p>
              <p className="text-sm text-muted-foreground">
                Silakan hubungi kami untuk informasi lebih lanjut tentang proyek-proyek kami.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-hover transition-all duration-300 overflow-hidden gradient-card border-0">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={getSectorColor(project.sector) as any} className="flex items-center gap-1">
                        {getSectorIcon(project.sector)}
                        {project.sector}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                        <Calendar className="w-4 h-4" />
                        {formatDate(project.created_at)}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <Button 
                      onClick={() => openProjectDetails(project)}
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image_url}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <Badge variant={getSectorColor(selectedProject.sector) as any} className="flex items-center gap-1">
                    {getSectorIcon(selectedProject.sector)}
                    {selectedProject.sector}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {formatDate(selectedProject.created_at)}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Deskripsi Proyek</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projects;