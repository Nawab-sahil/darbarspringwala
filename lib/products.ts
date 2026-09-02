export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  applicationTag: string;
  materials: string[];
  finishes: string[];
  process: string;
  applications: string[];
  images: string[];
};

export type Category = {
  id: string;
  name: string;
  seoPath: string;
  productSlug: string;
};

export const products: Product[] = [
  {
    slug: "compression-spring",
    name: "Compression Springs",
    shortDescription:
      "Open-coil helical springs engineered to resist axial compressive loads and return to free length.",
    description:
      'Compression springs are engineered to absorb and push back against compressive force in "push mode." Variable pitch between coils reduces solid height and buckling risk while managing load-deflection behaviour.',
    applicationTag: "Load-Bearing Assemblies",
    materials: ["Stainless Steel (302/304/316)", "Carbon Steel", "Alloy Steel", "Music Wire", "Phosphor Bronze"],
    finishes: ["Zinc Plating", "Galvanizing", "Powder Coating", "Black Oxide", "Passivation"],
    process:
      "Manufactured on CNC spring-coiling machines with in-line statistical process control and free-length sorting for critical load applications.",
    applications: ["Automobile components", "Consumer hardware", "Writing instruments", "Switches and switchgear", "General industrial assemblies"],
    images: ["/products/Compression Springs.jpg", "/products/compression-2.png", "/products/compression-3.png"],
  },
  {
    slug: "extension-tension-spring",
    name: "Extension / Tension Springs",
    shortDescription:
      "Close-wound springs with end hooks or loops, designed to absorb and resist pulling forces.",
    description:
      "Extension springs are tightly wound so they resist and store energy from pulling forces, returning to their original length once tension is released.",
    applicationTag: "Pulling and Return Mechanisms",
    materials: ["Stainless Steel", "Carbon Steel", "Alloy Steel", "Music Wire"],
    finishes: ["Zinc Plating", "Black Oxide", "Powder Coating", "Passivation"],
    process:
      "Coiled and end-formed on precision wire-forming equipment with load testing performed on sample batches for consistent spring rate.",
    applications: ["Agricultural equipment", "Garage door assemblies", "Trampolines", "Automotive components", "Industrial machinery"],
    images: ["/products/ExtensionTension Springs.jpg"],
  },
  {
    slug: "torsion-spring",
    name: "Torsion Springs",
    shortDescription: "Coiled wire components that exert rotational force when twisted.",
    description:
      "Torsion springs store and release angular energy when twisted around their axis. Formed legs transmit torque to mating parts.",
    applicationTag: "Rotational and Return Force",
    materials: ["Music Wire", "Stainless Steel", "Chrome Silicon", "Carbon Steel"],
    finishes: ["Zinc Plating", "Black Oxide", "Passivation"],
    process:
      "Formed on CNC coilers with leg-angle and torque verification against drawing specification before dispatch.",
    applications: ["Clothes pins and clips", "Hinges", "Automotive levers", "Garage doors", "Electrical switchgear"],
    images: ["/products/orsion Springs.jpg"],
  },
  {
    slug: "conical-spring",
    name: "Conical Springs",
    shortDescription: "Tapered compression springs offering low solid height and progressive spring rate.",
    description:
      "Conical springs reduce to low solid height because each coil nests within the next while delivering progressive load behaviour.",
    applicationTag: "Compact Load Applications",
    materials: ["Carbon Steel", "Stainless Steel", "Alloy Steel"],
    finishes: ["Powder Coating", "Zinc Plating", "Black Oxide"],
    process:
      "Precision-coiled with pitch and taper angle controlled to specification, then quality-checked for nesting and solid height.",
    applications: ["Vibration mounts", "Seating and upholstery", "Electrical contacts", "Valve assemblies"],
    images: ["/products/canoniacal.jpg"],
  },
  {
    slug: "wire-forms",
    name: "Wire Forms & Clips",
    shortDescription: "Custom-bent wire components engineered to exact geometric specification.",
    description:
      "Wire forms are shaped rather than coiled - clips, brackets, hooks, and retaining components bent to precise geometry.",
    applicationTag: "Custom Retention and Support",
    materials: ["Stainless Steel", "Carbon Steel", "Galvanized Wire"],
    finishes: ["Zinc Plating", "Powder Coating", "Black Oxide"],
    process:
      "CNC wire-bending with dimensional verification against customer drawings for tight-tolerance geometry.",
    applications: ["Retail fixtures", "Automotive clips", "Appliance components", "Furniture hardware"],
    images: ["/products/Wire Forms.jpg"],
  },
  {
    slug: "garter-spring",
    name: "Garter Springs",
    shortDescription: "Circular endless-loop springs used to apply constant radial force around shafts or seals.",
    description:
      "A garter spring is an extension spring joined end-to-end into a closed loop, applying uniform radial force.",
    applicationTag: "Sealing and Radial Force",
    materials: ["Stainless Steel", "Carbon Steel", "Music Wire"],
    finishes: ["Zinc Plating", "Passivation"],
    process:
      "Coiled, joined, and calibrated for consistent radial force across the full loop diameter.",
    applications: ["Oil seals", "O-rings and gaskets", "Hydraulic seals", "Rotary shaft seals"],
    images: ["/products/Garter Springs.jpg"],
  },
  {
    slug: "spiral-spring",
    name: "Spiral Springs",
    shortDescription: "Flat wound springs that store rotational energy in compact form.",
    description:
      "Spiral springs are wound in a flat plane around a central arbor, storing energy as they are wound and releasing controlled torque.",
    applicationTag: "Compact Rotational Energy Storage",
    materials: ["Carbon Steel", "Stainless Steel", "Spring Steel Strip"],
    finishes: ["Black Oxide", "Zinc Plating", "Powder Coating"],
    process: "Precision flat-strip winding with torque and cycle-life testing to specification.",
    applications: ["Retractable mechanisms", "Timers", "Cable reels", "Consumer devices"],
    images: ["/products/spiral-spring-1.jpg"],
  },
  {
    slug: "die-spring",
    name: "Die Springs",
    shortDescription: "Heavy-duty rectangular-wire compression springs for high-load tooling applications.",
    description:
      "Die springs are wound from rectangular-section wire for higher load capacity in compact footprints and demanding cycle conditions.",
    applicationTag: "Heavy-Duty Tooling",
    materials: ["Chrome Vanadium", "Alloy Steel", "Music Wire"],
    finishes: ["Powder Coating", "Black Oxide"],
    process: "Rectangular-wire coiling with load-rating verification and high-cycle fatigue testing.",
    applications: ["Stamping dies", "Injection moulds", "Press tooling", "Heavy machinery"],
    images: ["/products/Die Springs.jpg"],
  },
  {
    slug: "custom-spring",
    name: "Custom Springs",
    shortDescription:
      "Application-specific spring solutions developed to requirement across industrial use cases.",
    description:
      "Custom springs are developed around your application, dimensions, load conditions, and material preferences to support intended product performance.",
    applicationTag: "Application-Specific Design",
    materials: ["Available to Requirement"],
    finishes: ["Available to Requirement"],
    process:
      "Production planning is aligned to customer requirement, spring type, and application use-case, with quality checks through each stage.",
    applications: ["OEM applications", "Engineering components", "Machinery assemblies", "Industrial equipment"],
    images: ["/products/Custom Springs.jpg"],
  },
];

export const categories: Category[] = [
  { id: "all", name: "All Products", seoPath: "/products", productSlug: "" },
  { id: "compression", name: "Compression Springs", seoPath: "/products/compression-spring", productSlug: "compression-spring" },
  { id: "extension", name: "Extension / Tension", seoPath: "/products/extension-tension-spring", productSlug: "extension-tension-spring" },
  { id: "torsion", name: "Torsion Springs", seoPath: "/products/torsion-spring", productSlug: "torsion-spring" },
  { id: "conical", name: "Conical Springs", seoPath: "/products/conical-spring", productSlug: "conical-spring" },
  { id: "wire-forms", name: "Wire Forms & Clips", seoPath: "/products/wire-forms", productSlug: "wire-forms" },
  { id: "garter", name: "Garter Springs", seoPath: "/products/garter-spring", productSlug: "garter-spring" },
  { id: "spiral", name: "Spiral Springs", seoPath: "/products/spiral-spring", productSlug: "spiral-spring" },
  { id: "die", name: "Die Springs", seoPath: "/products/die-spring", productSlug: "die-spring" },
  { id: "custom", name: "Custom Springs", seoPath: "/products/custom-spring", productSlug: "custom-spring" },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
