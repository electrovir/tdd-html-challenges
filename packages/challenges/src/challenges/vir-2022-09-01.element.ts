import {defineElementNoInputs, html, listen} from 'element-vir';
import {live} from 'lit/directives/live.js';
import {assignTestId} from '../test-helpers/test-id';

export enum TestIds {
    changeScreenButton = 'change-screen-button',
}

export const Vir_2022_09_01 = defineElementNoInputs({
    tagName: 'vir-2022-09-01',
    stateInit: {
        showFirstScreen: true,
        firstInputValue: '',
    },
    renderCallback: ({state, updateState}) => {
        return html`
            <button
                ${assignTestId(TestIds.changeScreenButton)}
                ${listen('click', () => {
                    updateState({
                        showFirstScreen: !state.showFirstScreen,
                    });
                })}
            >
                Change Screen
            </button>
            ${state.showFirstScreen
                ? html`
                      first
                      <input
                          .value=${live(state.firstInputValue)}
                          ${listen('input', (event) => {
                              if (!(event.target instanceof HTMLInputElement)) {
                                  throw new Error('wat');
                              }
                              const value = event.target.value;
                              updateState({
                                  firstInputValue: value,
                              });
                          })}
                      />
                      <input />
                  `
                : html`
                      second
                      <input />
                      <input />
                  `}
        `;
    },
});
