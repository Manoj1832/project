/**
 * Verified company configuration for Adithya Constructions & Architects.
 * Only verified details from the repository are included here.
 * Missing details are explicitly marked with TODO placeholders—never fabricated.
 */

export const SITE_CONFIG = {
  name: "Adithya Constructions & Architects",
  shortName: "Adithya Constructions",
  tagline: "We build your dreams",
  domain: "https://adithyaconstructionscbe.com",
  serviceRegions: ["Coimbatore", "Salem"],
  state: "Tamil Nadu",
  country: "India",

  contact: {
    primaryPhoneDisplay: "63745 07535",
    primaryPhoneTel: "+916374507535",
    secondaryPhoneDisplay: "75388 80504",
    secondaryPhoneTel: "+917538880504",
    whatsappNumber: "916374507535",
    email: "adithyaconstructionscbe@gmail.com",
    instagramHandle: "@_adithya_constructions",
    instagramUrl: "https://instagram.com/_adithya_constructions",
    // TODO: Add verified street address and PIN code for Coimbatore office
    officeAddress: "Coimbatore & Salem, Tamil Nadu, India",
    // TODO: Verify official working hours
    workingHours: "Mon–Sat, 9:00 AM – 6:00 PM",
  },

  leadership: [
    {
      name: "Er. BOOBALAN .V, B.E.",
      role: "Founder & Proprietor",
      image: "/assets/owner.png",
      bio: "Civil Engineer leading Adithya Constructions & Architects with a focus on structural integrity, transparent execution, and client-first delivery.",
    },
    {
      name: "Er. Premi T, B.E.",
      role: "Proprietor • Operations & Client Relations",
      image: "/assets/owner2.jpg",
      bio: "Oversees client consultation, project scheduling, regulatory approvals, and on-site quality coordination across residential and commercial works.",
    },
  ],

  // TODO: Replace with verified registration numbers when available
  credentials: {
    reraNumber: "", // TODO: Add verified RERA registration if applicable
    gstNumber: "",  // TODO: Add verified GSTIN if applicable
  },
} as const;
