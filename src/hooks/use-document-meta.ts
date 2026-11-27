import { useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";

interface RouteMeta {
  title: string;
  description: string;
}

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: `Adithya Construction | Civil Engineer & Builders in Coimbatore`,
    description:
      "Adithya Construction & Architects — Civil engineer-led residential construction, commercial buildings, architecture, and DTCP approvals in Coimbatore & Salem.",
  },
  "/about": {
    title: `Civil Engineers & Studio | ${SITE_CONFIG.shortName} Coimbatore`,
    description:
      "Meet the B.E. Civil Engineers behind Adithya Construction in Coimbatore & Salem—Er. Boobalan V. and Er. Premi T.",
  },
  "/services": {
    title: `Construction, Architecture & Engineering Services | ${SITE_CONFIG.shortName}`,
    description:
      "Budget-friendly and premium residential house construction, commercial buildings, architectural design, structural engineering, and DTCP approvals.",
  },
  "/projects": {
    title: `Buildings & Projects Portfolio | ${SITE_CONFIG.shortName}`,
    description:
      "Completed residential homes, commercial buildings, PEB steel structures, interiors, and renovations in Coimbatore & Salem.",
  },
  "/packages": {
    title: `Low-Budget to Premium Construction Packages | ${SITE_CONFIG.shortName}`,
    description:
      "Compare cost-effective Standard, budget-friendly, Premium, and Luxury turnkey building packages with locked material brands.",
  },
  "/quality-checklist": {
    title: `70-Point Quality Checklist | ${SITE_CONFIG.shortName}`,
    description:
      "Inspect our 70-point construction quality standards across foundation, concrete, waterproofing, electrical, and plumbing.",
  },
  "/appointment": {
    title: `Book Consultation | ${SITE_CONFIG.shortName}`,
    description:
      "Schedule a free site consultation with Adithya Constructions & Architects in Coimbatore or Salem.",
  },
  "/contact": {
    title: `Contact Us | ${SITE_CONFIG.shortName}`,
    description:
      "Contact Adithya Constructions & Architects via phone, WhatsApp, or email for residential and commercial projects.",
  },
  "/careers": {
    title: `Careers | ${SITE_CONFIG.shortName}`,
    description:
      "Explore civil engineering, architecture, and site supervision career opportunities at Adithya Constructions.",
  },
  "/blog": {
    title: `Insights & Guides | ${SITE_CONFIG.shortName}`,
    description:
      "Construction, architectural planning, and building approval guides for homeowners in Coimbatore and Salem.",
  },
};

export function useDocumentMeta(pathname: string) {
  useEffect(() => {
    const meta = ROUTE_META[pathname] ?? {
      title: `${SITE_CONFIG.name}`,
      description:
        "Architectural design, structural engineering, and turnkey construction in Coimbatore & Salem.",
    };

    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute("content", meta.description);
    }

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute("href", `${SITE_CONFIG.domain}${pathname === "/" ? "" : pathname}`);
    }
  }, [pathname]);
}
