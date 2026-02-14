import { readFile } from "fs/promises";

import { getEslintConfig } from "@ezez/eslint";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const packageJson = JSON.parse(String(await readFile("./package.json")));
const react = Boolean(packageJson.libraryTemplate?.jsx);

const config = getEslintConfig({ react });

// eslint-disable-next-line import/no-anonymous-default-export,import/no-default-export
export default [
    ...config,
    // disable import/no-default-export for story files:
    {
        files: ["**/*.stories.@(js|jsx|ts|tsx|mjs)"],
        rules: {
            "react-hooks/rules-of-hooks": "off",
            "max-lines-per-function": "off",
            "import/no-default-export": "off",
            "react/no-multi-comp": "off",
            "react/jsx-no-bind": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-unsafe-type-assertion": "off",
            "@typescript-eslint/no-magic-numbers": "off",
        },
    },
    {
        files: ["src/components/icons/*.tsx"],
        rules: {
            "@stylistic/max-len": "off",
        },
    },
    {
        files: [
            "src/**/*.styled.*",
            "src/**/*.css.*",
            "src/*.css.*",
        ],
        rules: {
            "@typescript-eslint/no-magic-numbers": "off",
        },
    },
    {
        files: ["src/**/*.tsx"],
        rules: {
            // TODO disable when TS + React in the ezlint
            "react/prop-types": "off",
        },
    },
];
