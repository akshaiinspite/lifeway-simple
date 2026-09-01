import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function nonRenderBlockingCss() {
  return {
    name: "non-render-blocking-css",
    enforce: "post" as const,
    transformIndexHtml(html: string) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?\bhref="[^"]+\.css"[^>]*?)>/gi,
        (match, p1) => {
          const hrefMatch = p1.match(/href="([^"]+)"/);
          if (!hrefMatch) return match;
          const href = hrefMatch[1];
          // Do not transform external fonts or google font links, only local build CSS
          if (href.includes("fonts.googleapis.com")) return match;
          return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' &&
    nonRenderBlockingCss(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssMinify: true,
    minify: "esbuild",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-slot",
            "@radix-ui/react-tooltip",
            "lucide-react",
          ],
          "query-vendor": ["@tanstack/react-query"],
        },
      },
    },
  },
  esbuild: {
    drop: mode === "production" ? ["console", "debugger"] : [],
  },
}));
