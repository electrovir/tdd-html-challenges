import {fixture as renderFixture} from '@open-wc/testing';
import {html} from 'element-vir';
import {queryByTestId} from '../test-helpers/test-id';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {Vir_2022_08_05} from './vir-2022-08-05.element';

describe(Vir_2022_08_05.tagName, () => {
    async function renderElement() {
        return await renderFixture(html`<${Vir_2022_08_05}></${Vir_2022_08_05}>`);
    }

    async function getLoginFormElements() {
        const rendered = await renderElement();
        const usernameInput = queryByTestId(rendered, 'username-input');
        const passwordInput = queryByTestId(rendered, 'password-input');
        const loginButton = queryByTestId(rendered, 'login-button');

        typedAssertInstanceOf(usernameInput, HTMLInputElement);
        typedAssertInstanceOf(passwordInput, HTMLInputElement);
        typedAssertInstanceOf(loginButton, HTMLButtonElement);

        return {
            usernameInput,
            passwordInput,
            loginButton,
            fullElement: rendered,
        };
    }

    it('should has all the necessary children', async () => {
        // const elements = await getLoginFormElements();
        // assert.strictEqual(Object.keys(elements).length, 4);
    });

    it('should not allow logging in without data entry', async () => {
        // const elements = await getLoginFormElements();
        // const fullInitialTextContent = elements.fullElement.shadowRoot?.textContent;
        // assertNotNullish(fullInitialTextContent);
        // assert.isNotEmpty(fullInitialTextContent);
        // await clickElement(elements.loginButton);
    });
});
