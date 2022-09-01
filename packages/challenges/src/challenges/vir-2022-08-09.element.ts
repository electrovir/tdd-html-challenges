import {css, defineElementNoInputs, html} from 'element-vir';
import {assignTestId} from '../test-helpers/test-id';

export const Vir_2022_08_09 = defineElementNoInputs({
    tagName: 'vir-2022-08-09',
    stateInit: {},
    styles: css`
        .popup-trigger {
            display: inline-block;
            padding: 16px;
            border: 1px solid black;
        }

        .popup-trigger:hover + .menu {
            display: flex;
        }

        .menu {
            display: none;
            flex-direction: column;
        }
    `,
    renderCallback: () => {
        return html`
            <div class="popup-trigger" ${assignTestId('popup-trigger')}>
                Hover me to show the popup
            </div>
            <div class="menu" ${assignTestId('popup-menu')}>
                <span>One</span>
                <span>Two</span>
                <span>Three</span>
            </div>
        `;
    },
});
