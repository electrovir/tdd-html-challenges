import {dirname, join} from 'path';

export const repoRootDirPath = dirname(dirname(dirname(__dirname)));
export const challengesPackageSrcDirPath = join(repoRootDirPath, 'packages', 'challenges', 'src');

export const baseChallengeFilePath = join(
    challengesPackageSrcDirPath,
    'vir-put-date-here.element.ts',
);
export const baseChallengeTestFilePath = join(
    challengesPackageSrcDirPath,
    'vir-put-date-here.element.test.ts',
);
export const actualChallengeFilesDirPath = join(challengesPackageSrcDirPath, 'challenges');

export const allChallengesFilePath = join(
    challengesPackageSrcDirPath,
    'view-challenges-app',
    'all-challenges.ts',
);
