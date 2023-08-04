import fs from "fs-extra";
import glob from "fast-glob";

import { run } from "./utils.mjs";

const contents = `{"type": "commonjs"}`;

(async () => {
    console.info("[CJS compile post-processing started]");
    await fs.writeFile("./dist/package.json", contents);
    console.info("Written dist/package.json with commonjs type fix");
    await run("resolve-tspaths", ["--project", "tsconfig.cjs.json"]);

    const list = await glob("./src/**/*.scss");
    const p = list.map(file => {
        const target = file.replace(/^\.\/src/, "./dist");
        return fs.copy(file, target);
    })
    await Promise.all(p)
    console.info("Copied", ...list);

    console.info("Resolved TypeScript import paths");
    console.info("[CJS compile post-processing ended]");
})();
