import {defineElementNoInputs, html, listen} from 'element-vir';
import {assignTestId} from '../test-helpers/test-id';

export const elementTestIds = {
    hiddenElement: 'hidden-element',
    triggerButton: 'trigger-button',
};

export const Vir_2022_08_17 = defineElementNoInputs({
    tagName: 'vir-2022-08-17',
    stateInit: {
        shouldShow: false,
    },
    renderCallback: ({state, updateState}) => {
        return html`
            <div ?hidden="${!state.shouldShow}" ${assignTestId(elementTestIds.hiddenElement)}>
                hidden element
            </div>
            <button
                ${assignTestId(elementTestIds.triggerButton)}
                ${listen('click', () => {
                    updateState({
                        shouldShow: !state.shouldShow,
                    });
                })}
            >
                Click me
            </button>
        `;
    },
});
