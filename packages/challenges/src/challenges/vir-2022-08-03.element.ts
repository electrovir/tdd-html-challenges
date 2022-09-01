import {defineElementNoInputs, html} from 'element-vir';

export const Vir_2022_08_03 = defineElementNoInputs({
    tagName: 'vir-2022-08-03',
    stateInit: {
        greeting: 'hello there',
    },
    initCallback: ({updateState}) => {
        setTimeout(() => {
            updateState({greeting: 'This greeting has been updated!'});
        }, 1000);
    },
    renderCallback: ({state}) => {
        return html`
            <span class="greeting">${state.greeting}</span>
        `;
    },
});
