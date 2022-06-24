import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "DvStyleInject",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [typescript(), terser()],
};
