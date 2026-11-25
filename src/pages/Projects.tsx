import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SITE_CONTENT } from "@/data/site-content";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Commercial", "PEB", "Interior", "Renovation"] as const;

const projects = [
  { id: 2, title: "Residential Project 01", category: "Residential", image: "/assets/project2(residential).jpg", location: "Coimbatore" },
  { id: 3, title: "Residential Project 02", category: "Residential", image: "/assets/project3(residential).jpg", location: "Coimbatore" },
  { id: 4, title: "Residential Project 03", category: "Residential", image: "/assets/project4(residential).jpg", location: "Coimbatore" },
  { id: 5, title: "Commercial Project 01", category: "Commercial", image: "/assets/project5(commercial).jpg", location: "Coimbatore" },
  { id: 6, title: "Residential Project 04", category: "Residential", image: "/assets/project6(residential).jpg", location: "Coimbatore" },
  { id: 22, title: "Residential Project 05", category: "Residential", image: "/assets/project10(residential).jpg", location: "Coimbatore" },
  { id: 23, title: "Residential Project 06", category: "Residential", image: "/assets/project11(residential).jpg", location: "Coimbatore" },
  { id: 24, title: "Residential Project 07", category: "Residential", image: "/assets/project12(residential).jpg", location: "Coimbatore" },
  { id: 25, title: "Residential Project 08", category: "Residential", image: "/assets/project13(residential).jpg", location: "Coimbatore" },
  { id: 26, title: "Residential Project 09", category: "Residential", image: "/assets/project14(residential).jpg", location: "Coimbatore" },
  { id: 27, title: "Commercial Project 02", category: "Commercial", image: "/assets/project15(commercial).jpg", location: "Coimbatore" },
  { id: 28, title: "Commercial Project 03", category: "Commercial", image: "/assets/project16(commercial).jpg", location: "Coimbatore" },
  { id: 29, title: "Commercial Project 04", category: "Commercial", image: "/assets/project17(commercial).jpg", location: "Coimbatore" },
  { id: 30, title: "Commercial Project 05", category: "Commercial", image: "/assets/project18(commercial).jpg", location: "Coimbatore" },
  { id: 31, title: "PEB Structure 01", category: "PEB", image: "/assets/peb1.jpg", location: "Coimbatore" },
  { id: 32, title: "PEB Structure 02", category: "PEB", image: "/assets/peb2.jpg", location: "Coimbatore" },
  { id: 33, title: "PEB Structure 03", category: "PEB", image: "/assets/peb3.jpg", location: "Coimbatore" },
  { id: 34, title: "PEB Structure 04", category: "PEB", image: "/assets/peb4.jpg", location: "Coimbatore" },
  { id: 10, title: "Interior Fit-Out 01", category: "Interior", image: "/assets/int1.jpg", location: "Coimbatore" },
  { id: 11, title: "Interior Fit-Out 02", category: "Interior", image: "/assets/int2.jpg", location: "Coimbatore" },
  { id: 12, title: "Interior Fit-Out 03", category: "Interior", image: "/assets/int3.jpg", location: "Coimbatore" },
  { id: 13, title: "Interior Fit-Out 04", category: "Interior", image: "/assets/int5.jpg", location: "Coimbatore" },
  { id: 14, title: "Interior Fit-Out 05", category: "Interior", image: "/assets/int6.jpg", location: "Coimbatore" },
  { id: 15, title: "Interior Fit-Out 06", category: "Interior", image: "/assets/int7.jpg", location: "Coimbatore" },
  { id: 16, title: "Interior Fit-Out 07", category: "Interior", image: "/assets/int8.jpg", location: "Coimbatore" },
  { id: 17, title: "Interior Fit-Out 08", category: "Interior", image: "/assets/int9.jpg", location: "Coimbatore" },
  { id: 18, title: "Interior Fit-Out 09", category: "Interior", image: "/assets/int10.jpg", location: "Coimbatore" },
  { id: 19, title: "Renovation Project 01", category: "Renovation", image: "/assets/renovation1.jpg", location: "Coimbatore" },
  { id: 20, title: "Renovation Project 02", category: "Renovation", image: "/assets/renovation2.jpg", location: "Coimbatore" },
  { id: 21, title: "Renovation Project 03", category: "Renovation", image: "/assets/renovation3.webp", location: "Coimbatore" },
];

type Project = (typeof projects)[number];

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (id: number) => void;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      className="group text-left bg-[#FFFFFF] border border-[#EAEAEA] hover:border-[#111111] transition-colors overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
    >
      <div className="aspect-[16/10] overflow-hidden relative bg-[#F5F5F5]">
        {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}
        <img
          src={project.image}
          alt={`${project.title} — ${project.category} in ${project.location}`}
          className={cn(
            "w-full h-full object-cover editorial-photo group-hover:scale-[1.02]",
            loaded ? "opacity-100" : "opacity-0"
          )}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="p-5 border-t border-[#EAEAEA] flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-[#777777] mb-1">
            {project.category} • {project.location}
          </p>
          <h2 className="font-display font-medium text-base text-[#111111]">
            {project.title}
          </h2>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[#111111] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </button>
  );
};

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewerId, setViewerId] = useState<number | null>(null);

  const normalizedCategories = useMemo(
    () => categories.map((c) => c.toLowerCase()),
    []
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const typeParam = params.get("type")?.toLowerCase();
    const hash = location.hash.replace("#", "").toLowerCase();
    const desired = typeParam || (hash ? hash : undefined);
    if (desired) {
      const idx = normalizedCategories.indexOf(desired);
      if (idx !== -1) {
        setSelectedCategory(categories[idx]);
        return;
      }
    }
    setSelectedCategory("All");
  }, [location.search, location.hash, normalizedCategories]);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  const activeIndex = useMemo(
    () => filteredProjects.findIndex((p) => p.id === viewerId),
    [filteredProjects, viewerId]
  );
  const activeProject = activeIndex >= 0 ? filteredProjects[activeIndex] : null;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const search = category !== "All" ? `?type=${category.toLowerCase()}` : "";
    navigate({ pathname: "/projects", search }, { replace: true });
  };

  const showPrev = () => {
    if (activeIndex < 0) return;
    const prev = (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setViewerId(filteredProjects[prev].id);
  };

  const showNext = () => {
    if (activeIndex < 0) return;
    const next = (activeIndex + 1) % filteredProjects.length;
    setViewerId(filteredProjects[next].id);
  };

  return (
    <div className="pt-16 min-h-screen bg-[#FFFFFF]">
      {/* Header */}
      <section className="py-10 md:py-16 bg-[#F5F5F5] border-b border-[#EAEAEA]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">{SITE_CONTENT.projectsPage.eyebrow}</p>
            <h1
              className="font-display font-semibold text-[#111111] mb-3"
              style={{ fontSize: "var(--text-hero)" }}
            >
              {SITE_CONTENT.projectsPage.headline}
            </h1>
            <p className="text-sm md:text-base text-[#444444] leading-relaxed">
              {SITE_CONTENT.projectsPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-[#EAEAEA] bg-[#FFFFFF] sticky top-16 z-30">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleCategorySelect(category)}
                  className={cn(
                    "px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] border transition-colors",
                    active
                      ? "bg-[#111111] text-[#FFFFFF] border-[#111111]"
                      : "bg-[#FFFFFF] text-[#444444] border-[#EAEAEA] hover:border-[#111111] hover:text-[#111111]"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-[#777777] tabular-nums">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setViewerId} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#F5F5F5] border-t border-[#EAEAEA]">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-semibold text-2xl text-[#111111] mb-1">
              Have a plot or commercial project in mind?
            </h2>
            <p className="text-sm text-[#444444]">
              Schedule a site discussion with our civil engineering team.
            </p>
          </div>
          <Button asChild>
            <Link to="/appointment">
              Book Free Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={activeProject !== null} onOpenChange={(open) => !open && setViewerId(null)}>
        <DialogContent className="max-w-4xl p-0 bg-[#111111] text-[#FFFFFF] border border-[#2E2E2E] rounded-none overflow-hidden">
          {activeProject && (
            <div>
              <div className="px-6 py-4 pr-12 border-b border-[#2E2E2E]">
                <DialogTitle className="text-base font-display font-medium text-[#FFFFFF]">
                  {activeProject.title} — {activeProject.category} ({activeProject.location})
                </DialogTitle>
              </div>
              <div className="relative bg-[#000000]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full max-h-[72vh] object-contain mx-auto"
                />
                {filteredProjects.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Previous project"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111111]/85 border border-[#2E2E2E] text-[#FFFFFF] flex items-center justify-center hover:bg-[#222222]"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Next project"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#111111]/85 border border-[#2E2E2E] text-[#FFFFFF] flex items-center justify-center hover:bg-[#222222]"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
