const files = [
  { file: "asian paints.jpg", label: "Asian Paints" },
  { file: "finolex pipes.jpg", label: "Finolex Pipes" },
  { file: "gm switches.jpg", label: "GM Switches" },
  { file: "indrola tmt bars.jpg", label: "Indrola TMT Bars" },
  { file: "jaquar.jpg", label: "Jaquar" },
  { file: "jsw steels.jpg", label: "JSW Steel" },
  { file: "kajaria tiles.jpg", label: "Kajaria Tiles" },
  { file: "legrand.jpg", label: "Legrand" },
  { file: "nippon paints.jpg", label: "Nippon Paint" },
  { file: "ramco cements.jpg", label: "Ramco Cements" },
  { file: "somany tiles.jpg", label: "Somany Tiles" },
  { file: "supreme plastic.jpg", label: "Supreme Pipes" },
  { file: "tata steels.jpg", label: "Tata Steel" },
  { file: "ultratech cement.jpg", label: "UltraTech Cement" },
];

const logos = files.map((item) => ({
  src: `/logos/${encodeURIComponent(item.file)}`,
  label: item.label,
}));
const loopLogos = [...logos, ...logos];

const ClientLogosMarquee = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow mb-2">Material Specification</p>
            <h2
              className="font-display font-semibold text-[#111111]"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Certified Materials &amp; Partners
            </h2>
          </div>
          <p className="text-sm text-[#444444] max-w-md">
            We specify ISI-certified steel, cement, electrical, plumbing, and finishing brands across our residential and commercial builds.
          </p>
        </div>

        <div className="relative overflow-hidden border border-[#EAEAEA] bg-[#F5F5F5]">
          <div
            className="flex items-center gap-6 md:gap-8 py-6 px-4 animate-[marquee_28s_linear_infinite]"
            style={{ willChange: "transform" }}
          >
            {loopLogos.map((logo, i) => (
              <div
                key={`${logo.label}-${i}`}
                className="shrink-0 bg-[#FFFFFF] border border-[#EAEAEA] px-5 py-3 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  width={96}
                  height={44}
                  className="h-9 md:h-11 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
