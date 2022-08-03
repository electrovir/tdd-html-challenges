import baseConfig from './web-test-runner-base.mjs';

const testFiles = 'packages/**/!(*.type).test.ts?(x)';

/** @type {import('@web/test-runner').TestRunnerConfig} */
const webTestRunnerConfig = {
    ...baseConfig,
    ...(baseConfig.files.length ? {files: [testFiles]} : {}),
    testFramework: {
        config: {
            timeout: 10_000,
        },
    },
};

export default webTestRunnerConfig;
