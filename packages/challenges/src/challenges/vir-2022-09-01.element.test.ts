import {assert, fixture as renderFixture} from '@open-wc/testing';
import {randomString} from 'augment-vir';
import {html} from 'element-vir';
import {extractText} from '../test-helpers/element-text';
import {clickElement, typeStringIntoElement} from '../test-helpers/interactions';
import {queryThroughShadow} from '../test-helpers/query-through-shadow';
import {queryByTestId} from '../test-helpers/test-id';
import {assertArray, assertLength, typedAssertInstanceOf} from '../test-helpers/typed-assert';
import {TestIds, Vir_2022_09_01} from './vir-2022-09-01.element';

describe(Vir_2022_09_01.tagName, () => {
    async function renderElement() {
        const rendered = await renderFixture(html`
            <${Vir_2022_09_01}></${Vir_2022_09_01}>
        `);
        typedAssertInstanceOf(rendered, Vir_2022_09_01);
        return rendered;
    }

    function getInputs(context: HTMLElement) {
        const matches = queryThroughShadow({
            element: context,
            query: 'input',
            all: true,
        });

        assertArray(matches, (match): asserts match is HTMLInputElement => {
            typedAssertInstanceOf(match, HTMLInputElement);
        });
        assertLength(matches, 2);

        return matches;
    }

    async function typeIntoFirstInput(context: HTMLElement): Promise<string> {
        const inputs = getInputs(context);
        const inputText = randomString();
        await typeStringIntoElement(inputText, inputs[0]);
        return inputText;
    }

    function getChangeScreenButton(context: HTMLElement): HTMLElement {
        const changeScreenButton = queryByTestId(context, TestIds.changeScreenButton);
        typedAssertInstanceOf(changeScreenButton, HTMLElement);
        return changeScreenButton;
    }

    async function typeAndChangeScreen() {
        const rendered = await renderElement();

        const inputText = await typeIntoFirstInput(rendered);
        await clickElement(getChangeScreenButton(rendered));

        return {rendered, inputText};
    }

    it('should render an element', async () => {
        await renderElement();
    });

    it('should allow user input on first screen', async () => {
        const rendered = await renderElement();

        const text = await typeIntoFirstInput(rendered);
        assert.strictEqual(
            extractText(getInputs(rendered)[0]),
            text,
            'input text did not propagate to the input element',
        );
        assert.strictEqual(
            extractText(getInputs(rendered)[1]),
            '',
            'unused input element should not be affected',
        );
    });

    it('should change input values when page changes', async () => {
        const {rendered} = await typeAndChangeScreen();

        assert.strictEqual(
            extractText(getInputs(rendered)[0]),
            '',
            'inputs on first screen should not affect inputs on second screen',
        );
    });

    it('should be able to change back to previous state', async () => {
        const {rendered, inputText} = await typeAndChangeScreen();
        await clickElement(getChangeScreenButton(rendered));

        assert.strictEqual(
            extractText(getInputs(rendered)[0]),
            inputText,
            'first screen state should be reinstated',
        );
    });
});
