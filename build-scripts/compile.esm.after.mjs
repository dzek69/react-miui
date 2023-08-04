import fs from "fs-extra";
import glob from "fast-glob";

import {run} from "./utils.mjs";

(async () => {
    console.info("[ESM compile post-processing started]");
    await run("resolve-tspaths", ["--project", "tsconfig.esm.json"]);
    console.info("Resolved TypeScript import paths");

    const list = await glob("./src/**/*.scss");
    const p = list.map(file => {
        const target = file.replace(/^\.\/src/, "./esm");
        return fs.copy(file, target);
    })
    await Promise.all(p)
    console.info("Copied", ...list);

    console.info("[ESM compile post-processing ended]");
})();
