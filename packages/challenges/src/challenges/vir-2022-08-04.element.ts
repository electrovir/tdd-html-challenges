import {defineFunctionalElement, html} from 'element-vir';
import {assignTestId} from '../test-helpers/test-id';

export const Vir_2022_08_04 = defineFunctionalElement({
    tagName: 'vir-2022-08-04',
    props: {},
    renderCallback: () => {
        return html`
            <input type="date" ${assignTestId('date-picker')} />
        `;
    },
});
