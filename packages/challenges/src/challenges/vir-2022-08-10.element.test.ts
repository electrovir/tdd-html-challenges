import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {Vir_2022_08_10} from './vir-2022-08-10.element';

describe(Vir_2022_08_10.tagName, () => {
    it('should something', async () => {
        const rendered = await renderFixture(html`
            <${Vir_2022_08_10}></${Vir_2022_08_10}>
        `);

        // // this command doesn't exist yet
        // const result = await executeServerCommand('take-screenshot', {
        //     derp: 5,
        // });
        // console.log({result});
    });
});
