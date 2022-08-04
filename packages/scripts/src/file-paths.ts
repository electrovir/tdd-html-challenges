import {dirname, join} from 'path';

export const repoRootDirPath = dirname(dirname(dirname(__dirname)));
export const challengesSrcDirPath = join(repoRootDirPath, 'packages', 'challenges', 'src');

export const baseChallengeFilePath = join(challengesSrcDirPath, 'vir-put-date-here.element.ts');
export const baseChallengeTestFilePath = join(
    challengesSrcDirPath,
    'vir-put-date-here.element.test.ts',
);
export const actualChallengeFilesDirPath = join(challengesSrcDirPath, 'challenges');
