import {defineFunctionalElement, html, listen} from 'element-vir';
import {assignTestId} from '../test-helpers/test-id';

export const elementTestIds = {
    hiddenElement: 'hidden-element',
    triggerButton: 'trigger-button',
};

export const Vir_2022_08_17 = defineFunctionalElement({
    tagName: 'vir-2022-08-17',
    props: {
        shouldShow: false,
    },
    renderCallback: ({props, setProps}) => {
        return html`
            <div ?hidden="${!props.shouldShow}" ${assignTestId(elementTestIds.hiddenElement)}>
                hidden element
            </div>
            <button
                ${assignTestId(elementTestIds.triggerButton)}
                ${listen('click', () => {
                    setProps({
                        shouldShow: !props.shouldShow,
                    });
                })}
            >
                Click me
            </button>
        `;
    },
});
