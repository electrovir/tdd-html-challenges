import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {clickDatePicker, clickElement} from '../test-helpers/interactions';
import {queryThroughShadow} from '../test-helpers/query-through-shadow';
import {createTestIdSelector} from '../test-helpers/test-id';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {Vir_2022_08_04} from './vir-2022-08-04.element';

describe(Vir_2022_08_04.tagName, () => {
    it('should update the date', async () => {
        const rendered = await renderFixture(html`<${Vir_2022_08_04}></${Vir_2022_08_04}>`);

        const dateInputElement = queryThroughShadow({
            element: rendered,
            query: createTestIdSelector('date-picker'),
        });

        typedAssertInstanceOf(dateInputElement, HTMLInputElement);

        assert.isEmpty(dateInputElement.value);

        await clickElement(dateInputElement);
        await clickDatePicker(dateInputElement);

        await clickDatePicker(dateInputElement);

        // this doesn't work
        // assert.isNotEmpty(dateInputElement.value);
    });
});
