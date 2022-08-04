import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {Vir_put_date_here} from './vir-put-date-here.element';

describe(Vir_put_date_here.tagName, () => {
    it('should something', async () => {
        const rendered = await renderFixture(html`
            <${Vir_put_date_here}
            
            >
            </${Vir_put_date_here}>`);
    });
});
