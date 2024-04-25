import esbuildServe from "esbuild-serve";
import inlineImage from "esbuild-plugin-inline-image";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/main.ts"],
    bundle: true,
    minify: true,
    outfile: "public/bundle.min.js",
    plugins: [inlineImage()],
    define: { isDev: true },
  },
  { root: "public", port: 8080 },
);
