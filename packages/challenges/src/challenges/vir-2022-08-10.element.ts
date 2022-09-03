import {css, defineElementNoInputs, html} from 'element-vir';

export const Vir_2022_08_10 = defineElementNoInputs({
    tagName: 'vir-2022-08-10',
    styles: css`
        :host {
            border: 1px solid red;
            padding: 5px;
            margin: 10px;
        }
    `,
    renderCallback: () => {
        return html`
            HELLO THERE
        `;
    },
});
