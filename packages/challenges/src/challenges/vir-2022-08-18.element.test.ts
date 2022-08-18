import {assert, fixture as renderFixture} from '@open-wc/testing';
import {randomString} from 'augment-vir';
import {html} from 'element-vir';
import {clickElement, deleteAllTextInInput, typeString} from '../test-helpers/interactions';
import {queryByTestId} from '../test-helpers/test-id';
import {typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {buttonUpdatePhrase, TestIds, Vir_2022_08_18} from './vir-2022-08-18.element';

describe(Vir_2022_08_18.tagName, () => {
    async function renderElement() {
        const rendered = await renderFixture(html`
            <${Vir_2022_08_18}></${Vir_2022_08_18}>
        `);
        typedAssertInstanceOf(rendered, HTMLElement);

        const input = queryByTestId(rendered, TestIds.Input);
        typedAssertInstanceOf(input, HTMLInputElement);
        const button = queryByTestId(rendered, TestIds.Button);
        typedAssertInstanceOf(button, HTMLButtonElement);

        return {input, button, rendered};
    }

    async function typeRandomnessIntoInput(input: HTMLInputElement): Promise<string> {
        const randomInput = randomString();
        await clickElement(input);
        await typeString(randomInput);
        return randomInput;
    }

    it('should render an element', async () => {
        await renderElement();
    });

    it('should respond to user input', async () => {
        const {input} = await renderElement();

        const randomPhrase = await typeRandomnessIntoInput(input);

        assert.strictEqual(input.value, randomPhrase);
    });

    it('should update input value programmatically', async () => {
        const {input, button} = await renderElement();

        await typeRandomnessIntoInput(input);
        await clickElement(button);

        assert.strictEqual(input.value, buttonUpdatePhrase);
    });

    it('should still allow user inputs after button update', async () => {
        const {input, button} = await renderElement();

        await typeRandomnessIntoInput(input);
        await clickElement(button);
        await deleteAllTextInInput(input);
        const randomPhrase = await typeRandomnessIntoInput(input);

        assert.strictEqual(input.value, randomPhrase);
    });
});
