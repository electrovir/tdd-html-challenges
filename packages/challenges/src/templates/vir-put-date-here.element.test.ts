import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {Vir_put_date_here} from './vir-put-date-here.element';

describe(Vir_put_date_here.tagName, () => {
    async function renderElement() {
        const rendered = await renderFixture(html`
            <${Vir_put_date_here}></${Vir_put_date_here}>
        `);
        typedAssertInstanceOf(rendered, HTMLElement);
        return rendered;
    }

    it('should render an element', async () => {
        await renderElement();
    });
});
