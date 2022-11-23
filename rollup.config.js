import dts from "rollup-plugin-dts";
import esbuild from 'rollup-plugin-esbuild';


const config = [
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
        },
        plugins: [
            esbuild()
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.mjs",
            format: "esm",
            sourcemap: true,
        },
        plugins: [
            esbuild()
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: "dist/index.d.ts",
            format: "es",
        },
        plugins: [
            dts(),
        ],
    },
];

export default config;
