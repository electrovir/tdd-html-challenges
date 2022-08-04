import {defineFunctionalElement, html} from 'element-vir';
import {Vir_2022_08_04} from '../challenges/vir-2022-08-04.element';

export const VirChallengesApp = defineFunctionalElement({
    tagName: 'vir-challenges-app',
    renderCallback: () => {
        return html`<${Vir_2022_08_04}></${Vir_2022_08_04}>`;
    },
});
