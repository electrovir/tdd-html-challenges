import {css, defineElementNoInputs} from 'element-vir';
import {html} from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {allChallenges} from './all-challenges';

export const VirChallengesApp = defineElementNoInputs({
    tagName: 'vir-challenges-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    `,
    renderCallback: () => {
        console.log(allChallenges.map((challenge) => challenge.element.tagName));
        return html`
            ${allChallenges.map((challenge) => {
                const thing = `<${challenge.element.tagName}></${challenge.element.tagName}>`;
                return html`
                    <div class="element-test">
                        <h2>${challenge.element.tagName}</h2>
                        ${unsafeHTML(thing)}
                    </div>
                `;
            })}
        `;
    },
});
