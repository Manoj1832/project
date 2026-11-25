import type { BrandIconName } from "@/components/common/BrandIcon";

export interface ServiceEntry {
  id: string;
  icon: BrandIconName;
  title: string;
  shortDesc: string;
  detailDesc: string;
  image: string;
  features: string[];
  href: string;
}

export const SITE_CONTENT = {
  hero: {
    eyebrow: "Coimbatore • Salem • Tamil Nadu",
    headline: "Built for generations. Engineered to the last brick.",
    mobileSubhead: "Turnkey homes, commercial builds & DTCP approvals.",
    desktopSubhead:
      "Engineer-led residential homes, commercial complexes, Vaastu-aligned plans, and DTCP approvals delivered with stage-wise transparency.",
    capabilities: [
      "Turnkey Homes",
      "Commercial & PEB",
      "Vaastu & Structural",
      "DTCP Approvals",
    ],
  },

  home: {
    servicesEyebrow: "What We Build",
    servicesTitle: "One accountable team from soil test to grihapravesam.",
    servicesSubtitle:
      "Clear BOQ rates, ISI-grade steel & cement, and daily engineer supervision across Coimbatore and Salem.",
    servicesCta: "All services",
    bannerEyebrow: "Fixed-Rate Packages",
    bannerTitle: "Transparent per-sq.ft pricing. Zero hidden extras.",
    processEyebrow: "How We Work",
    processTitle: "Six clear stages. Zero site surprises.",
    processSubtitle:
      "Every milestone is inspected, photographed, and signed off before the next payment stage.",
    projectsEyebrow: "Selected Works",
    projectsTitle: "Homes & spaces built across Tamil Nadu.",
    projectsCta: "Full Portfolio",
    fiveSEyebrow: "Site Discipline",
    fiveSTitle: "5S Clean-Site Practice",
    fiveSDesc:
      "Organized materials, zero wastage, and safe daily site checks—rare in residential construction.",
    leadershipEyebrow: "Civil Engineers at the Helm",
    leadershipTitle: "Led by B.E. Civil Engineers",
    leadershipCta: "Meet the studio",
  },

  services: [
    {
      id: "turnkey",
      icon: "residential-construction",
      title: "Residential House Construction",
      shortDesc:
        "Complete turnkey homes with ISI-grade materials, Vaastu-smart layouts, and stage-wise billing.",
      detailDesc:
        "From soil testing and borewell coordination to woodwork and handover—one fixed-scope contract built for Tamil Nadu families.",
      image: "/assets/residential service.jpg",
      features: [
        "Single-point engineer supervision",
        "UltraTech / Ramco cement & Tata / JSW TMT steel",
        "70-point stage inspection before every slab & pour",
        "Transparent stage-linked payment schedule",
        "As-built drawings & post-handover support",
      ],
      href: "/services#turnkey",
    },
    {
      id: "commercial",
      icon: "commercial-construction",
      title: "Commercial & PEB Construction",
      shortDesc:
        "Offices, showrooms, rental complexes, and Pre-Engineered Steel Buildings built for ROI.",
      detailDesc:
        "High-utility commercial buildings and fast-track PEB sheds engineered for heavy loads, clear spans, and low maintenance.",
      image: "/assets/project5(commercial).jpg",
      features: [
        "Showrooms, offices & commercial complexes",
        "Industrial sheds & PEB steel structures",
        "High-load RCC & MEP coordination",
        "Fire, setback & parking bye-law compliance",
      ],
      href: "/services#commercial",
    },
    {
      id: "architectural",
      icon: "architectural-design",
      title: "Architectural & Vaastu Design",
      shortDesc:
        "Breezy, daylight-rich floor plans and modern elevations tailored to your plot orientation.",
      detailDesc:
        "Climate-smart Tamil Nadu home designs that balance Vaastu principles, cross-ventilation, and practical everyday living.",
      image: "/assets/int1.jpg",
      features: [
        "Vaastu-compliant 2D floor plans",
        "Photorealistic 3D front elevations",
        "Cross-ventilation & heat-reduction planning",
        "Interior furniture & electrical layout coordination",
      ],
      href: "/services#architectural",
    },
    {
      id: "structural",
      icon: "structural-design",
      title: "Structural Engineering",
      shortDesc:
        "IS-code compliant RCC and steel structural drawings engineered for safety and steel economy.",
      detailDesc:
        "Precision foundation, column, beam, and slab detailing tailored to local black-cotton or red-soil conditions.",
      image: "/assets/structural design.jpg",
      features: [
        "Soil-matched isolated, combined & raft foundations",
        "IS 456 / IS 1893 seismic-safe RCC framing",
        "Pre-Engineered Building (PEB) steel detailing",
        "Bar Bending Schedules (BBS) to cut steel waste",
      ],
      href: "/services#structural",
    },
    {
      id: "approval",
      icon: "building-approval",
      title: "DTCP & Corporation Approvals",
      shortDesc:
        "Hassle-free sanction drawings and liaison for DTCP, Panchayat, Municipality, and Corporation.",
      detailDesc:
        "We prepare accurate FSI, setback, and rainwater-harvesting drawings so your plan sanction moves smoothly.",
      image: "/assets/project15(commercial).jpg",
      features: [
        "DTCP & Local Planning Authority (LPA) drawings",
        "Coimbatore / Salem Corporation & Panchayat sanctions",
        "FSI, setback & rainwater harvesting compliance",
        "Complete documentation & submission follow-up",
      ],
      href: "/services#approval",
    },
  ] satisfies ServiceEntry[],

  processSteps: [
    {
      step: "01",
      icon: "process-01-consultation" as BrandIconName,
      title: "Site Visit & Brief",
      detail: "Inspect plot, road width, soil & Vaastu orientation.",
    },
    {
      step: "02",
      icon: "process-02-planning" as BrandIconName,
      title: "Plans & Approvals",
      detail: "2D floor plans, 3D elevation, structural & DTCP sanction.",
    },
    {
      step: "03",
      icon: "process-03-estimation" as BrandIconName,
      title: "Locked BOQ & Brands",
      detail: "Written material brand list and stage-wise payment milestones.",
    },
    {
      step: "04",
      icon: "process-04-construction" as BrandIconName,
      title: "5S Site Execution",
      detail: "Engineer-supervised civil, waterproofing, MEP & finishing.",
    },
    {
      step: "05",
      icon: "process-05-inspection" as BrandIconName,
      title: "70-Point Quality Audit",
      detail: "Cube testing, line-level checks & plumbing pressure tests.",
    },
    {
      step: "06",
      icon: "process-06-handover" as BrandIconName,
      title: "Key Handover",
      detail: "Final snag clearance, as-built drawings & post-handover care.",
    },
  ],

  about: {
    eyebrow: "About the Studio",
    headline: "Adithya Constructions & Architects",
    subtitle:
      "Engineer-founded residential and commercial builders serving Coimbatore and Salem.",
    practiceEyebrow: "Our Practice",
    practiceTitle: "Honest engineering. Zero shortcuts.",
    paragraphs: [
      "Building a home in Tamil Nadu is often a once-in-a-lifetime investment. We eliminate contractor guesswork by putting B.E. Civil Engineers in charge of design, approvals, material procurement, and daily site execution.",
      "From independent duplex homes and commercial complexes to PEB industrial sheds, every square foot is built to IS standards with verified brand materials.",
      "Our 5S clean-site discipline and 70-point quality checklist ensure your site stays organized, safe, and on schedule from bhoomi pooja to grihapravesam.",
    ],
    leadershipEyebrow: "Leadership",
    leadershipTitle: "Proprietors & Civil Engineers",
    principlesEyebrow: "Core Standards",
    principlesTitle: "What We Never Compromise On",
    values: [
      {
        code: "01",
        title: "Engineered Structure",
        description:
          "Soil-informed foundations, IS-code RCC detailing, and genuine Tata/JSW steel—never under-designed.",
      },
      {
        code: "02",
        title: "Written Brand Clarity",
        description:
          "Cement, steel, wire, pipe, and tile brands are locked in writing before excavation begins.",
      },
      {
        code: "03",
        title: "70-Point Verification",
        description:
          "Anti-termite treatment, 28-day curing, waterproofing pond tests, and pressure-tested plumbing.",
      },
    ],
  },

  servicesPage: {
    eyebrow: "Services",
    headline: "Architecture, Engineering & Turnkey Execution",
    subtitle:
      "End-to-end design, statutory approvals, and quality-audited construction across Coimbatore and Salem.",
  },

  projectsPage: {
    eyebrow: "Portfolio",
    headline: "Built Across Coimbatore & Salem",
    subtitle:
      "Residential homes, commercial buildings, PEB steel structures, interiors, and renovations.",
  },

  packagesPage: {
    eyebrow: "Turnkey Packages",
    headline: "Clear Per-Sq.Ft Packages",
    subtitle:
      "Compare Standard, Premium, and Luxury specifications—every brand and thickness stated upfront.",
    ctaTitle: "Unsure which package fits your plot?",
    ctaSubtitle:
      "Talk to our civil engineers for a free plot review and itemized estimate.",
  },

  contactPage: {
    eyebrow: "Contact",
    headline: "Talk to Our Engineers",
    subtitle:
      "Discuss your plot dimensions, DTCP sanction, or turnkey budget with our Coimbatore & Salem team.",
    formTitle: "Quick Inquiry",
    formSubtitle: "Send your plot details via WhatsApp or Email.",
  },

  appointmentPage: {
    eyebrow: "Site Consultation",
    headline: "Book a Free Site Visit",
    subtitle:
      "Meet our civil engineers in Coimbatore or Salem to review your plot, Vaastu layout, and build budget.",
    panelEyebrow: "Direct Studio Access",
    panelTitle: "Studio & Site Visits",
    panelDesc:
      "Pick a preferred slot, or call us directly during working hours.",
    formTitle: "Schedule Consultation",
  },
} as const;
