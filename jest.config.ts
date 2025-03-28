import type { Config } from "jest";

const jestConfig = async (): Promise<Config> => {
  return {
    modulePathIgnorePatterns: ["<rootDir>/.build/", "<rootDir>/.esbuild/", "<rootDir>/node_modules/"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1",
    },
    maxWorkers: "40%",
    transform: {
      "^.+\\.ts?$": [
        'ts-jest',
        {
          tsconfig: "./tsconfig.json",
        },
      ]
    }
  };
};

export default jestConfig