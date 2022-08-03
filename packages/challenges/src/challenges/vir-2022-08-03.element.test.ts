import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {html} from 'element-vir';
import {extractText} from '../test-helpers/element-text';
import {Vir_2022_08_03} from './vir-2022-08-03.element';

describe(Vir_2022_08_03.tagName, () => {
    it('should render a greeting', async () => {
        const originalGreeting = 'hello there';
        const updatedGreeting = 'This greeting has been updated!';

        const rendered = await renderFixture(html`<${Vir_2022_08_03}></${Vir_2022_08_03}>`);

        assert.strictEqual(extractText(rendered), originalGreeting);

        const startWaitingTime: number = Date.now();

        await waitUntil(
            () => {
                return extractText(rendered) === updatedGreeting;
            },
            'The greeting did not change!',
            {
                timeout: 2_000,
                interval: 100,
            },
        );

        const endWaitingTime: number = Date.now();
        const waitDuration = endWaitingTime - startWaitingTime;

        assert.isAtMost(waitDuration, 1200, 'wait duration was longer than expected');

        assert.strictEqual(extractText(rendered), updatedGreeting);
    });
});
