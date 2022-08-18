import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {clickElement} from '../test-helpers/interactions';
import {assertVisible} from '../test-helpers/test-element';
import {queryByTestId} from '../test-helpers/test-id';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {Vir_2022_08_18} from './vir-2022-08-18.element';

describe(Vir_2022_08_18.tagName, () => {
    async function renderElementToTest() {
        const rendered = await renderFixture(html`
            <${Vir_2022_08_18}></${Vir_2022_08_18}>
        `);

        typedAssertInstanceOf(rendered, HTMLElement);
        return rendered;
    }

    it('should render the element', async () => {
        await renderElementToTest();
    });

    it('should not show the element before clicking', async () => {
        const rendered = await renderElementToTest();
        const hiddenElement = queryByTestId(rendered, 'hidden-element');

        typedAssertInstanceOf(hiddenElement, HTMLElement);
        assertVisible(hiddenElement, false, "hidden element shouldn't be visible before clicking");
    });

    it('should show the element after clicking', async () => {
        const rendered = await renderElementToTest();
        const buttonElement = queryByTestId(rendered, 'trigger-button');
        typedAssertInstanceOf(buttonElement, HTMLElement);
        const hiddenElement = queryByTestId(rendered, 'hidden-element');
        typedAssertInstanceOf(hiddenElement, HTMLElement);

        await clickElement(buttonElement);

        assertVisible(hiddenElement, true, 'hidden element should be visible after clicking');
    });

    it('should hide the element again after clicking twice', async () => {
        const rendered = await renderElementToTest();
        const buttonElement = queryByTestId(rendered, 'trigger-button');
        typedAssertInstanceOf(buttonElement, HTMLElement);
        const hiddenElement = queryByTestId(rendered, 'hidden-element');
        typedAssertInstanceOf(hiddenElement, HTMLElement);

        await clickElement(buttonElement);
        await clickElement(buttonElement);

        assertVisible(hiddenElement, false, 'hidden element should be hidden after clicking twice');
    });
});
