import {visualRegressionPlugin} from '@web/test-runner-visual-regression/plugin';
import {dirname, join, relative} from 'path';
import {fileURLToPath} from 'url';
import baseConfig from './web-test-runner-base.mjs';

const testFiles = 'packages/**/!(*.type).test.ts?(x)';
const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));

function getTestFileName(args, type) {
    const screenshotDir = relative(
        join(rootDir, 'packages', 'challenges', 'src'),
        args.testFile.replace(/\.[jt]sx?$/, ''),
    );
    const extension = `${type ? `${type}.` : ''}png`;
    const screenshotName = `${args.name}.${args.browser.toLowerCase()}.${extension}`;
    const dirs = [
        screenshotDir,
        args.name,
        type === 'diff' ? 'failure-diff' : '',
    ].filter((a) => a);
    return join(...dirs, screenshotName);
}

/** @type {import('@web/test-runner').TestRunnerConfig} */
const webTestRunnerConfig = {
    ...baseConfig,
    ...(baseConfig.files.length ? {files: [testFiles]} : {}),
    plugins: [
        ...baseConfig.plugins,
        visualRegressionPlugin({
            update: false,
            baseDir: 'test-screenshots',
            getBaselineName: (args) => {
                return getTestFileName(args, '');
            },
            getDiffName: (args) => {
                return getTestFileName(args, 'diff');
            },
            getFailedName: (args) => {
                return getTestFileName(args, '');
            },
            saveDiff: () => {},
        }),
    ],
    testFramework: {
        config: {
            timeout: 10_000,
        },
    },
};

export default webTestRunnerConfig;
