import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // === OPTION A: HOSTINGER SHARED / CLOUD HOSTING (Static Export - Recommended) ===
  // Compiles the website into a static folder 'out/' that you upload to public_html.
  // Super fast, zero-maintenance, and works on standard shared web hosting.
  output: "export",
  trailingSlash: true, // Generates /about/index.html instead of /about.html (highly recommended for Apache URL matching)
  images: {
    unoptimized: true, // Required for static HTML export compatibility
  },

  // === OPTION B: HOSTINGER VPS HOSTING (Node.js Server) ===
  // If you are hosting on a VPS Node.js server, COMMENT OUT the lines above ('output', 'trailingSlash', and 'images')
  // and UNCOMMENT the redirects config below.
  /*
  async redirects() {
    return [
      {
        source: "/compression-springs",
        destination: "/products/compression-spring",
        permanent: true,
      },
      {
        source: "/extension-springs",
        destination: "/products/extension-tension-spring",
        permanent: true,
      },
      {
        source: "/torsion-springs",
        destination: "/products/torsion-spring",
        permanent: true,
      },
      {
        source: "/wire-forms",
        destination: "/products/wire-forms",
        permanent: true,
      },
      {
        source: "/custom-springs",
        destination: "/products/custom-spring",
        permanent: true,
      },
    ];
  }
  */
};

export default nextConfig;
