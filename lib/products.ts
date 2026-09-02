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
      "Precision open-coil helical compression springs manufactured in Jamnagar, Gujarat for heavy industrial and automotive load applications.",
    description:
      "Darbar Springwala is a leading Compression Springs manufacturer in Jamnagar, Gujarat. Our open-coil helical compression springs are precision-engineered to absorb axial compressive push forces and return to exact free lengths. Manufactured on high-speed CNC coiling machinery with controlled coil pitch to minimize solid height and prevent buckling under heavy cycle loads.",
    applicationTag: "Heavy Industrial & Automotive Assemblies",
    materials: ["Stainless Steel (302/304/316)", "High Carbon Spring Steel", "Alloy Steel", "Music Wire", "Phosphor Bronze"],
    finishes: ["Zinc Electroplating", "Hot-Dip Galvanizing", "Electrostatic Powder Coating", "Black Oxide", "Passivation"],
    process:
      "Produced on multi-axis CNC spring-coiling machines in Jamnagar GIDC, followed by automated heat treatment, stress relieving, end-grinding, and 100% load testing.",
    applications: ["Automotive suspension & engine valves", "Industrial valves & pumps", "Electrical switchgear & breakers", "Precision writing instruments", "Agricultural machinery"],
    images: ["/products/Compression Springs.png"],
  },
  {
    slug: "extension-tension-spring",
    name: "Extension / Tension Springs",
    shortDescription:
      "High-tensile extension tension springs manufactured in Jamnagar with custom machine hooks, loops, and calibrated pull resistance.",
    description:
      "Manufactured at our Jamnagar spring factory, our extension springs are tightly coiled to store and absorb tensile energy. Equipped with customized crossover loops, machine hooks, or extended side-eyes, these springs provide uniform return force across high-cycle industrial machinery, garage doors, and agricultural implements.",
    applicationTag: "Tensile Force & Return Mechanisms",
    materials: ["Stainless Steel", "High Carbon Steel Wire", "Alloy Steel", "Music Wire"],
    finishes: ["Zinc Plating", "Black Oxide Coating", "Yellow Chrome", "Passivation"],
    process:
      "Formed on high-speed CNC coiling and hook-forming equipment in Jamnagar, subjected to stress-relief tempering and digital spring rate calibration.",
    applications: ["Agricultural machinery & combines", "Overhead garage doors", "Automotive brake systems", "Industrial trampolines & tensioners", "Heavy equipment linkages"],
    images: ["/products/ExtensionTension Springs.png"],
  },
  {
    slug: "torsion-spring",
    name: "Torsion Springs",
    shortDescription: "Precision CNC torsion springs engineered in Jamnagar, Gujarat to deliver consistent rotational torque and angular force.",
    description:
      "Darbar Springwala produces high-performance Torsion Springs in Jamnagar, Gujarat. Designed to exert rotational torque around an axial shaft, these coiled springs feature customized leg configurations (straight, offset, hinged, or bent) to transmit angular force in automotive hinges, electrical switches, and heavy mechanical doors.",
    applicationTag: "Rotational Torque & Angular Force",
    materials: ["Music Wire", "Stainless Steel (304/316)", "Chrome Silicon Steel", "Carbon Steel"],
    finishes: ["Zinc Plating", "Black Oxide", "Phosphate Coating", "Passivation"],
    process:
      "Wound on automatic CNC torsion coilers in Jamnagar with laser-guided leg angle inspection and automated torque verification prior to dispatch.",
    applications: ["Automotive door hinges & tailgates", "Electrical circuit breakers & switches", "Clothespins & industrial clips", "Overhead industrial doors", "Counterbalance levers"],
    images: ["/products/torsion-avif-transparent.png"],
  },
  {
    slug: "conical-spring",
    name: "Conical Springs",
    shortDescription: "Tapered compression springs manufactured in Jamnagar offering low solid height and progressive spring rate response.",
    description:
      "Engineered at our Jamnagar manufacturing plant, Conical Springs feature a tapered cone geometry that allows each active coil to nest within the adjacent coil. This delivers an ultra-compact solid height and a progressive spring rate ideal for space-restricted electrical contacts and dampening assemblies.",
    applicationTag: "Compact Footprint & Progressive Load",
    materials: ["High Carbon Steel", "Stainless Steel", "Alloy Steel Wire"],
    finishes: ["Powder Coating", "Zinc Plating", "Black Oxide"],
    process:
      "Precision-tapered coiling on CNC spring machines with controlled coil nesting verification and dynamic load-deflection testing.",
    applications: ["Electrical battery contacts", "Vibration damping mounts", "Upholstery & seating assemblies", "Compact pressure relief valves"],
    images: ["/products/canoniacal.png"],
  },
  {
    slug: "wire-forms",
    name: "Wire Forms & Clips",
    shortDescription: "Custom-bent CNC wire components and retaining clips manufactured to exact engineering drawings in Jamnagar, Gujarat.",
    description:
      "As a premier Wire Forms manufacturer in Jamnagar, Darbar Springwala fabricates custom wire shapes, clips, brackets, and retaining rings. Utilizing multi-axis CNC wire benders, we form complex 2D and 3D wire geometry without requiring expensive tooling, serving tier-1 automotive and electrical clients.",
    applicationTag: "Custom Structural Retention & Clips",
    materials: ["Stainless Steel Wire", "Carbon Steel Wire", "Galvanized Spring Wire"],
    finishes: ["Zinc Plating", "Powder Coating", "Electropolishing", "Black Oxide"],
    process:
      "Formed on multi-axis CNC wire benders in Jamnagar GIDC with CMM coordinate inspection against customer STEP and PDF drawings.",
    applications: ["Automotive retaining clips", "Electrical panel brackets", "Appliance wire frameworks", "Retail display hardware", "Industrial fasteners"],
    images: ["/products/Wire Forms.png"],
  },
  {
    slug: "garter-spring",
    name: "Garter Springs",
    shortDescription: "Endless circular loop garter springs manufactured in Jamnagar to exert uniform radial force for oil and rotary seals.",
    description:
      "Manufactured in Jamnagar, Gujarat, Garter Springs are coiled extension springs joined end-to-end into a closed circular ring. They exert continuous inward radial tension around rubber oil seals, hydraulic shaft packings, and rotary mechanical seals to maintain tight fluid containment.",
    applicationTag: "Continuous Radial Radial Force & Sealing",
    materials: ["Stainless Steel (302/316)", "High Carbon Spring Wire", "Music Wire"],
    finishes: ["Zinc Plating", "Chemical Passivation"],
    process:
      "Coiled, joined with inter-locking nibs or plug connectors, and verified for uniform circumferential tension across the full loop diameter.",
    applications: ["Automotive engine oil seals", "Hydraulic & pneumatic seals", "Rotary pump shaft packings", "Heavy marine mechanical seals"],
    images: ["/products/Garter Springs.png"],
  },
  {
    slug: "spiral-spring",
    name: "Spiral Springs",
    shortDescription: "Flat-wound ribbon springs manufactured in Jamnagar for compact rotational energy storage and retracting reels.",
    description:
      "Darbar Springwala manufactures high-quality Spiral Springs in Jamnagar, Gujarat. Formed from flat spring steel strip wound in a single plane, these springs store torque when wound around a central arbor and release smooth, continuous energy in cable retractors and timing devices.",
    applicationTag: "Compact Flat-Strip Energy Storage",
    materials: ["High Carbon Spring Steel Strip", "Stainless Steel Strip", "Textured Spring Steel"],
    finishes: ["Black Oxide", "Zinc Plating", "Protective Oil Coating"],
    process:
      "Flat-strip precision winding in Jamnagar GIDC with torque-versus-turn testing and high-cycle endurance validation.",
    applications: ["Seatbelt retractors & cable reels", "Industrial timers & clocks", "Measuring tape mechanisms", "Counter-balance devices"],
    images: ["/products/spiral-spring-1.png"],
  },
  {
    slug: "die-spring",
    name: "Die Springs",
    shortDescription: "Heavy-duty rectangular-wire die springs manufactured in Jamnagar for high-impact stamping dies and tooling presses.",
    description:
      "Engineered for extreme shock loads and compact press environments, our Die Springs are manufactured in Jamnagar from trapezoidal/rectangular section alloy wire. Designed to ISO 10243 color-code standards to deliver maximum load capacity in metal stamping dies and plastic injection molds.",
    applicationTag: "High-Load Press Tooling & Molds",
    materials: ["Chrome Vanadium Alloy Steel", "Chrome Silicon Steel", "Heavy Duty Music Wire"],
    finishes: ["Color Coded Powder Coating (Green/Blue/Red/Yellow)", "Black Oxide"],
    process:
      "Coiled from rectangular section wire in Jamnagar, heat-treated for maximum toughness, shot-peened for fatigue resistance, and batch load-tested.",
    applications: ["Sheet metal stamping dies", "Plastic injection molding tools", "Heavy industrial press brakes", "Die casting equipment"],
    images: ["/products/Die Springs.png"],
  },
  {
    slug: "custom-spring",
    name: "Custom Springs",
    shortDescription: "Bespoke engineered spring solutions manufactured to customer CAD specifications and samples in Jamnagar, Gujarat.",
    description:
      "Darbar Springwala specializes in prototype-to-mass-production Custom Springs in Jamnagar, Gujarat. Our engineering team works directly from your CAD drawings (STEP, DWG, PDF) or physical samples to design custom wire diameters, coil counts, pitch variations, and specialized surface coatings for your unique machinery.",
    applicationTag: "Bespoke Engineering & Rapid Prototyping",
    materials: ["Custom Alloy Selection", "Inconel & Hastelloy", "Stainless Steel", "Spring Steel Wire"],
    finishes: ["Tailored to Technical Requirement"],
    process:
      "Custom tooling setup, rapid prototyping, metallurgical inspection, load rate calibration, and PPAP documentation in Jamnagar.",
    applications: ["OEM machinery development", "Defense & aerospace prototypes", "Custom valve assemblies", "Specialized medical devices"],
    images: ["/products/customizespring.png"],
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
