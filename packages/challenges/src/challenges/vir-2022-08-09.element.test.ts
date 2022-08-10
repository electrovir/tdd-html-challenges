import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {moveToElement} from '../test-helpers/interactions';
import {assertVisible} from '../test-helpers/test-element';
import {queryByTestId} from '../test-helpers/test-id';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {Vir_2022_08_09} from './vir-2022-08-09.element';

describe(Vir_2022_08_09.tagName, () => {
    it('should show menu on hover', async () => {
        const rendered = await renderFixture(html`
            <${Vir_2022_08_09}></${Vir_2022_08_09}>
        `);

        typedAssertInstanceOf(rendered, HTMLElement);
        const popupMenu = queryByTestId(rendered, 'popup-menu');
        typedAssertInstanceOf(popupMenu, HTMLElement);
        assertVisible(popupMenu, false, 'popup menu should not be present before hovering');

        const popupTrigger = queryByTestId(rendered, 'popup-trigger');
        typedAssertInstanceOf(popupTrigger, HTMLElement, 'could not find popup trigger');

        await moveToElement(popupTrigger);

        assertVisible(popupMenu, true, 'popup menu should not be present before hovering');
    });
});
