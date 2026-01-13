import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Custom plugin to redirect root to base path
const redirectRootPlugin = () => ({
  name: "redirect-root",
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      // Redirect / to /gachapon-machine/
      if (req.url === "/" || req.url === "") {
        res.writeHead(302, { Location: "/gachapon-machine/" });
        res.end();
        return;
      }
      next();
    });
  },
});

export default defineConfig(({ mode }) => {
  return {
    base: "/gachapon-machine/",
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [redirectRootPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
        },
      },
    },
  };
});
