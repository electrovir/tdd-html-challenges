import {readFile, writeFile} from 'fs/promises';
import {basename, join} from 'path';
import {
    actualChallengeFilesDirPath,
    baseChallengeFilePath,
    baseChallengeTestFilePath,
} from '../file-paths';

type DateParts = {year: string; month: string; day: string};

function getSplitDateParts(): DateParts {
    const today = new Date();
    return {
        day: String(today.getDate()).padStart(2, '0'),
        month: String(today.getMonth() + 1).padStart(2, '0'),
        year: String(today.getFullYear()),
    };
}

async function createNewChallengeForToday() {
    await createNewChallengeFile(baseChallengeFilePath);
    await createNewChallengeFile(baseChallengeTestFilePath);
}

async function createNewChallengeFile(filePath: string) {
    const dateParts = getSplitDateParts();

    const baseChallengeFileContents = (await readFile(filePath)).toString();

    const newChallengeContents = replaceWithDate(dateParts, baseChallengeFileContents);

    const newFileName = replaceWithDate(dateParts, basename(filePath));

    const newChallengeFilePath = join(actualChallengeFilesDirPath, newFileName);

    await writeFile(newChallengeFilePath, newChallengeContents);
}

function replaceWithDate(dateParts: DateParts, originalString: string): string {
    return originalString.replace(
        /put([-_])date[-_]here/g,
        `${dateParts.year}$1${dateParts.month}$1${dateParts.day}`,
    );
}

if (require.main === module) {
    createNewChallengeForToday().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
