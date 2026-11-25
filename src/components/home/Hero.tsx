import { SITE_CONTENT } from "@/data/site-content";

const Hero = () => {
  const { hero } = SITE_CONTENT;

  return (
    <section className="relative w-full pt-16 bg-[#F5F5F5] border-b border-[#EAEAEA] overflow-hidden">
      <div className="relative min-h-[50vh] md:min-h-[78vh] flex flex-col justify-between">
        {/* Art-directed responsive architectural photography */}
        <picture className="absolute inset-0 w-full h-full pointer-events-none select-none">
          <source
            media="(min-width: 768px)"
            srcSet="/assets/hero/hero-desktop.webp"
            type="image/webp"
          />
          <img
            src="/assets/hero/hero-mobile.webp"
            alt="Minimalist concrete residence designed and built by Adithya Constructions"
            className="w-full h-full object-cover object-bottom md:object-right"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </picture>

        {/* Subtle top-left legibility scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/90 via-[#FFFFFF]/65 to-[#FFFFFF]/10 md:bg-gradient-to-r md:from-[#F5F5F5]/90 md:via-[#F5F5F5]/45 md:to-transparent pointer-events-none"
        />

        {/* Editorial Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-8 pb-6 md:py-20 flex-1 flex flex-col justify-start md:justify-center">
          <div className="max-w-xl">
            <p className="eyebrow text-[#444444] mb-2 md:mb-3">
              {hero.eyebrow}
            </p>
            <h1
              className="font-display font-semibold text-[#111111] tracking-[-0.03em] leading-[1.08] mb-3 md:mb-4"
              style={{ fontSize: "var(--text-hero)" }}
            >
              {hero.headline}
            </h1>
            <p className="text-[#444444] text-sm md:text-base leading-relaxed max-w-lg">
              <span className="md:hidden">{hero.mobileSubhead}</span>
              <span className="hidden md:inline">{hero.desktopSubhead}</span>
            </p>
          </div>
        </div>

        {/* Bottom Capability Bar */}
        <div className="relative z-10 bg-[#FFFFFF]/95 backdrop-blur-sm border-t border-[#EAEAEA]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Mobile: single scrollable row */}
            <div className="flex lg:hidden overflow-x-auto scrollbar-hide gap-0 -mx-4 px-4">
              {hero.capabilities.map((item, idx) => (
                <div
                  key={item}
                  className="shrink-0 py-2.5 pr-5 flex items-center gap-2 border-r border-[#EAEAEA] last:border-r-0"
                >
                  <span className="text-[10px] font-mono text-[#777777] tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-medium text-[#111111] whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            {/* Desktop: 4-col grid */}
            <div className="hidden lg:grid grid-cols-4 divide-x divide-[#EAEAEA]">
              {hero.capabilities.map((item, idx) => (
                <div key={item} className="py-3 px-6 flex items-center gap-3">
                  <span className="text-xs font-mono text-[#777777] tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-[#111111]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
