import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {clickElement} from '../test-helpers/interactions';
import {queryByTestId} from '../test-helpers/test-id';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {TestIds, Vir_2022_09_09} from './vir-2022-09-09.element';

describe(Vir_2022_09_09.tagName, () => {
    function getExpandContent(context: HTMLElement) {
        return queryByTestId(context, TestIds.ExpandContent);
    }

    async function renderElement() {
        const rendered = await renderFixture(html`
            <${Vir_2022_09_09}></${Vir_2022_09_09}>
        `);
        typedAssertInstanceOf(rendered, HTMLElement);

        return rendered;
    }

    it('should render an element', async () => {
        await renderElement();
    });

    it('expand content should initially not exist', async () => {
        const rendered = await renderElement();

        assert.isUndefined(getExpandContent(rendered));
    });

    it('should show expand content when it is triggered', async () => {
        const rendered = await renderElement();

        const expandTrigger = queryByTestId(rendered, TestIds.ExpandTrigger);
        typedAssertInstanceOf(expandTrigger, HTMLElement);
        await clickElement(expandTrigger);

        assert.isDefined(getExpandContent(rendered));
    });

    it('should hide expand content again after clicking twice', async () => {
        const rendered = await renderElement();

        const expandTrigger = queryByTestId(rendered, TestIds.ExpandTrigger);
        typedAssertInstanceOf(expandTrigger, HTMLElement);
        await clickElement(expandTrigger);
        await clickElement(expandTrigger);

        assert.isUndefined(getExpandContent(rendered));
    });
});
