import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {Vir_2022_08_19} from './vir-2022-08-19.element';

describe(Vir_2022_08_19.tagName, () => {
    async function renderElement() {
        const rendered = await renderFixture(html`
            <${Vir_2022_08_19}></${Vir_2022_08_19}>
        `);
        typedAssertInstanceOf(rendered, HTMLElement);
        return rendered;
    }

    it('should render an element', async () => {
        await renderElement();
    });
});
