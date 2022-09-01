import {randomString} from 'augment-vir';
import {defineElementNoInputs, html, listen} from 'element-vir';
import {assignTestId} from '../test-helpers/test-id';

export enum TestIds {
    Input = 'user-input',
    Button = 'click-button',
}

export const buttonUpdatePhrase = randomString(32);

export const Vir_2022_08_18 = defineElementNoInputs({
    tagName: 'vir-2022-08-18',
    stateInit: {
        inputValue: '',
    },
    renderCallback: ({state, updateState}) => {
        return html`
            <input
                ${listen('input', (event) => {
                    const inputElement = event.target as HTMLInputElement;
                    updateState({
                        inputValue: inputElement.value,
                    });
                })}
                ${assignTestId(TestIds.Input)}
                .value=${state.inputValue}
            />
            <button
                ${assignTestId(TestIds.Button)}
                ${listen('click', () => {
                    updateState({
                        inputValue: buttonUpdatePhrase,
                    });
                })}
            >
                Update input
            </button>
        `;
    },
});
