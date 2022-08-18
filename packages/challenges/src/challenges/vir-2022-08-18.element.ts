import {randomString} from 'augment-vir';
import {defineFunctionalElement, html, listen} from 'element-vir';
import {assignTestId} from '../test-helpers/test-id';

export enum TestIds {
    Input = 'user-input',
    Button = 'click-button',
}

export const buttonUpdatePhrase = randomString(32);

export const Vir_2022_08_18 = defineFunctionalElement({
    tagName: 'vir-2022-08-18',
    props: {
        inputValue: '',
    },
    renderCallback: ({props, setProps}) => {
        return html`
            <input
                ${listen('input', (event) => {
                    const inputElement = event.target as HTMLInputElement;
                    setProps({
                        inputValue: inputElement.value,
                    });
                })}
                ${assignTestId(TestIds.Input)}
                .value=${props.inputValue}
            />
            <button
                ${assignTestId(TestIds.Button)}
                ${listen('click', () => {
                    setProps({
                        inputValue: buttonUpdatePhrase,
                    });
                })}
            >
                Update input
            </button>
        `;
    },
});
