import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{ts,tsx}"],

        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            import: importPlugin,
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            /**
             * Formatting
             */
            indent: ["error", 4, {SwitchCase: 1}],

            /**
             * Empty lines control
             */
            "no-multiple-empty-lines": [
                "error",
                {
                    max: 1,
                    maxEOF: 0,
                    maxBOF: 0
                }
            ],

            "padded-blocks": ["error", "never"],
            
            /**
             * React
             */
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",

            /**
             * React hooks
             */
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            /**
             * Imports
             */
            "import/no-duplicates": "error",
            "import/order": [
                "warn",
                {
                    groups: ["builtin", "external", "internal"],
                    alphabetize: {order: "asc", caseInsensitive: true},
                },
            ],

            /**
             * TypeScript
             */
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {argsIgnorePattern: "^_"},
            ],

            "@typescript-eslint/consistent-type-imports": "warn",

            /**
             * Code quality
             */
            "no-console": ["warn", {allow: ["warn", "error"]}],
            "no-debugger": "error",
        },
    },

    prettier,
];