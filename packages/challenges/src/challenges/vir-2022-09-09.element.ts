import {css, defineElementNoInputs, html, listen} from 'element-vir';
import {TemplateResult} from 'lit';
import {assignTestId} from '../test-helpers/test-id';

export enum TestIds {
    ExpandTrigger = 'expand-trigger',
    ExpandContent = 'expand-content',
}

export const Vir_2022_09_09 = defineElementNoInputs({
    tagName: 'vir-2022-09-09',
    stateInit: {
        showExpandContent: false,
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .expand-content {
            display: flex;
            flex-direction: column;
        }
    `,
    renderCallback: ({state, updateState}) => {
        const expandedContentTemplate: TemplateResult | '' = state.showExpandContent
            ? html`
                  <div class="expand-content" ${assignTestId(TestIds.ExpandContent)}>
                      <span>stuff in here</span>
                      <span>stuff in here</span>
                      <span>stuff in here</span>
                      <span>stuff in here</span>
                  </div>
              `
            : '';

        return html`
            <button
                ${listen('click', () => {
                    updateState({
                        showExpandContent: !state.showExpandContent,
                    });
                })}
                ${assignTestId(TestIds.ExpandTrigger)}
            >
                TRIGGERED
            </button>
            ${expandedContentTemplate}
        `;
    },
});
