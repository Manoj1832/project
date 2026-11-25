import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Hero from "@/components/home/Hero";
import ClientLogosMarquee from "@/components/lead/ClientLogosMarquee";
import { BrandIcon } from "@/components/common/BrandIcon";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { SITE_CONTENT } from "@/data/site-content";

const featuredProjects = [
  {
    title: "Contemporary Residence",
    category: "Residential",
    location: "Coimbatore",
    image: "/assets/thumb-residential.webp",
    href: "/projects?type=residential",
  },
  {
    title: "Commercial Complex",
    category: "Commercial",
    location: "Coimbatore",
    image: "/assets/thumb-commercial.webp",
    href: "/projects?type=commercial",
  },
  {
    title: "Interior Architecture",
    category: "Interior",
    location: "Coimbatore",
    image: "/assets/thumb-interior.webp",
    href: "/projects?type=interior",
  },
  {
    title: "Structural Steel (PEB)",
    category: "PEB",
    location: "Coimbatore",
    image: "/assets/thumb-peb.webp",
    href: "/projects?type=peb",
  },
];

/** Expandable process step for mobile compact list */
const ProcessStep = ({
  item,
}: {
  item: (typeof SITE_CONTENT.processSteps)[number];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      className="w-full text-left py-3 border-b border-[#2E2E2E] last:border-b-0"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xs font-mono text-[#777777] tabular-nums shrink-0">
            {item.step}
          </span>
          <span className="text-sm font-medium text-[#FFFFFF] truncate">
            {item.title}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-[#777777] shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && (
        <p className="text-xs text-[#B5B5B5] leading-relaxed mt-2 pl-7">
          {item.detail}
        </p>
      )}
    </button>
  );
};

const Index = () => {
  const { home, services, processSteps } = SITE_CONTENT;
  const MOBILE_SERVICE_LIMIT = 3;

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Hero />

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-[#FFFFFF] border-b border-[#EAEAEA]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-end mb-8 md:mb-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-2">{home.servicesEyebrow}</p>
              <h2
                className="font-display font-semibold text-[#111111]"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {home.servicesTitle}
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3">
              <p className="text-[#444444] text-sm md:text-base leading-relaxed lg:text-right">
                {home.servicesSubtitle}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#444444] transition-colors"
              >
                {home.servicesCta}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Art-directed Studio Architectural Banner */}
          <div className="relative mb-8 md:mb-10 border border-[#EAEAEA] bg-[#F5F5F5] overflow-hidden">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/assets/services/service-desktop.webp"
                type="image/webp"
              />
              <img
                src="/assets/services/service-mobile.webp"
                alt="Commercial architectural facade in concrete and glass"
                className="w-full h-[190px] sm:h-[260px] md:h-[340px] object-cover object-bottom md:object-right"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="p-4 md:p-6 bg-[#FFFFFF] border-t border-[#EAEAEA] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <p className="eyebrow mb-1">{home.bannerEyebrow}</p>
                <p className="text-sm md:text-base font-medium text-[#111111]">
                  {home.bannerTitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline-gold" size="sm" asChild>
                  <Link to="/packages">View Packages</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/projects">Explore Projects</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Core Services Grid — 3 visible on mobile, all on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#EAEAEA]">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                to={service.href}
                className={`group p-5 md:p-7 bg-[#FFFFFF] border-r border-b border-[#EAEAEA] hover:bg-[#F5F5F5] transition-colors flex flex-col justify-between ${
                  idx >= MOBILE_SERVICE_LIMIT ? "hidden md:flex" : "flex"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className="w-10 h-10 border border-[#EAEAEA] bg-[#F5F5F5] group-hover:bg-[#FFFFFF] flex items-center justify-center transition-colors">
                      <BrandIcon name={service.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#595959] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3
                    className="font-display font-semibold text-[#111111] mb-2"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#444444] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EAEAEA] flex items-center justify-between text-xs font-medium uppercase tracking-[0.1em] text-[#111111]">
                  <span>View Scope</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}

            {/* 6th Grid Cell: Quality Assurance */}
            <Link
              to="/quality-checklist"
              className="group p-5 md:p-7 bg-[#F5F5F5] border-r border-b border-[#EAEAEA] hover:bg-[#EAEAEA]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="w-10 h-10 border border-[#EAEAEA] bg-[#FFFFFF] flex items-center justify-center">
                    <BrandIcon name="quality-assurance" className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#595959]">70-PT</span>
                </div>
                <h3
                  className="font-display font-semibold text-[#111111] mb-2"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  70-Point Quality Audit
                </h3>
                <p className="text-xs md:text-sm text-[#444444] leading-relaxed">
                  Stage-wise checks across foundation, concrete cubes, waterproofing, wiring, and plumbing pressure.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#EAEAEA] flex items-center justify-between text-xs font-medium uppercase tracking-[0.1em] text-[#111111]">
                <span>Inspect Standards</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>

          <div className="md:hidden mt-4 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#444444] transition-colors"
            >
              See all services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Section: 6-Step Execution Process */}
      <section className="py-12 md:py-20 bg-[#111111] text-[#FFFFFF]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12 pb-6 border-b border-[#2E2E2E]">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#B5B5B5] mb-2">
                {home.processEyebrow}
              </p>
              <h2
                className="font-display font-semibold text-[#FFFFFF]"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {home.processTitle}
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[#B5B5B5] max-w-md leading-relaxed">
              {home.processSubtitle}
            </p>
          </div>

          {/* Mobile: compact expandable list */}
          <div className="md:hidden px-1">
            {processSteps.map((item) => (
              <ProcessStep key={item.step} item={item} />
            ))}
          </div>

          {/* Desktop: card grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2E2E2E] border border-[#2E2E2E]">
            {processSteps.map((item) => (
              <div key={item.step} className="bg-[#111111] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <BrandIcon name={item.icon} invert className="w-5 h-5" />
                    <span className="text-xs font-mono text-[#777777] tabular-nums">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-base text-[#FFFFFF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#B5B5B5] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects Showcase */}
      <section className="py-12 md:py-20 bg-[#F5F5F5] border-b border-[#EAEAEA]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
            <div>
              <p className="eyebrow mb-2">{home.projectsEyebrow}</p>
              <h2
                className="font-display font-semibold text-[#111111]"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {home.projectsTitle}
              </h2>
            </div>
            <Button variant="outline-gold" size="sm" className="md:h-10 md:px-5" asChild>
              <Link to="/projects">
                {home.projectsCta}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                to={project.href}
                className="group bg-[#FFFFFF] border border-[#EAEAEA] overflow-hidden block"
              >
                <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#EAEAEA]">
                  <img
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    width={640}
                    height={480}
                    className="w-full h-full object-cover editorial-photo group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3 md:p-5 flex items-center justify-between border-t border-[#EAEAEA]">
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.12em] text-[#595959] mb-0.5 truncate">
                      {project.category} • {project.location}
                    </p>
                    <h3 className="font-display font-medium text-sm md:text-base text-[#111111] truncate">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#111111] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Material Partners */}
      <ClientLogosMarquee />

      {/* 5S Quality & Studio Leadership */}
      <section className="py-12 md:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* 5S Site Discipline */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#EAEAEA] flex flex-col justify-between overflow-hidden">
              <div className="bg-[#FFFFFF] p-3 sm:p-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/5S.webp"
                  alt="5S Quality Practice on construction site"
                  width={600}
                  height={500}
                  className="w-full max-h-[260px] md:max-h-[360px] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-7 border-t border-[#EAEAEA]">
                <p className="eyebrow mb-1">{home.fiveSEyebrow}</p>
                <h3 className="font-display font-semibold text-lg md:text-xl text-[#111111] mb-1.5">
                  {home.fiveSTitle}
                </h3>
                <p className="text-xs md:text-sm text-[#444444]">
                  {home.fiveSDesc}
                </p>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#EAEAEA] p-5 md:p-7 flex flex-col justify-between">
              <div>
                <p className="eyebrow mb-1">{home.leadershipEyebrow}</p>
                <h3 className="font-display font-semibold text-lg md:text-xl text-[#111111] mb-4 md:mb-5">
                  {home.leadershipTitle}
                </h3>
                <div className="space-y-4">
                  {SITE_CONFIG.leadership.map((leader) => (
                    <div
                      key={leader.name}
                      className="flex items-start gap-3 pb-4 border-b border-[#EAEAEA] last:border-b-0 last:pb-0"
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        width={56}
                        height={56}
                        className="w-12 h-12 md:w-14 md:h-14 object-cover border border-[#EAEAEA] shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <h4 className="font-display font-semibold text-sm md:text-base text-[#111111]">
                          {leader.name}
                        </h4>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-[#595959] mt-0.5 mb-1">
                          {leader.role}
                        </p>
                        <p className="text-xs md:text-sm text-[#444444] leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EAEAEA]">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:text-[#444444] transition-colors"
                >
                  {home.leadershipCta}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
