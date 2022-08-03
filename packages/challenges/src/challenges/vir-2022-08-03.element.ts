import {defineFunctionalElement, html} from 'element-vir';

export const Vir_2022_08_03 = defineFunctionalElement({
    tagName: 'vir-2022-08-03',
    props: {
        greeting: 'hello there',
    },
    initCallback: ({setProps}) => {
        setTimeout(() => {
            setProps({greeting: 'This greeting has been updated!'});
        }, 1000);
    },
    renderCallback: ({props}) => {
        return html`
            <span class="greeting">${props.greeting}</span>
        `;
    },
});
