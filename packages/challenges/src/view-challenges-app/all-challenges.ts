import {DeclarativeElementDefinition} from 'element-vir';
import {Vir_2022_08_03} from '../challenges/vir-2022-08-03.element';
import {Vir_2022_08_04} from '../challenges/vir-2022-08-04.element';
import {Vir_2022_08_05} from '../challenges/vir-2022-08-05.element';
import {Vir_2022_08_09} from '../challenges/vir-2022-08-09.element';
import {Vir_2022_08_10} from '../challenges/vir-2022-08-10.element';
import {Vir_2022_08_17} from '../challenges/vir-2022-08-17.element';
import {Vir_2022_08_18} from '../challenges/vir-2022-08-18.element';
import {Vir_2022_09_01} from '../challenges/vir-2022-09-01.element';

/**
 * This file is automatically generated by the combine-challenges-into-app.ts script. If you edit
 * this manually, it will ger overwritten!
 */

export type ChallengeDefinition = {
    element: DeclarativeElementDefinition;
    date: Date;
};

export const allChallenges: readonly Readonly<ChallengeDefinition>[] = [
    {
        element: Vir_2022_08_03,
        date: new Date('2022-08-03'),
    },
    {
        element: Vir_2022_08_04,
        date: new Date('2022-08-04'),
    },
    {
        element: Vir_2022_08_05,
        date: new Date('2022-08-05'),
    },
    {
        element: Vir_2022_08_09,
        date: new Date('2022-08-09'),
    },
    {
        element: Vir_2022_08_10,
        date: new Date('2022-08-10'),
    },
    {
        element: Vir_2022_08_17,
        date: new Date('2022-08-17'),
    },
    {
        element: Vir_2022_08_18,
        date: new Date('2022-08-18'),
    },
    {
        element: Vir_2022_09_01,
        date: new Date('2022-09-01'),
    },
] as const;
