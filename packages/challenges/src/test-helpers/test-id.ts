import {noChange} from 'lit';
import {directive, Directive, ElementPartInfo, PartInfo, PartType} from 'lit/directive.js';
import {queryThroughShadow} from './query-through-shadow';

export function createTestIdSelector(testId: string) {
    return `[data-test-id="${testId}"]`;
}

export function queryByTestId(context: Element | ShadowRoot, testId: string) {
    return queryThroughShadow(context, createTestIdSelector(testId));
}

export const assignTestId = directive(
    class extends Directive {
        public readonly element: Element;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'assignTestId', HTMLElement);
        }

        render(testId: string) {
            this.element.setAttribute('data-test-id', testId);
            return noChange;
        }
    },
);

/** For some reason these aren't defined in lit's types already. */
type ExtraPartInfoProperties = {
    element: Element;
    options: {
        host: Element;
        renderBefore: Element;
        isConnected: boolean;
    };
};

function extractElement<ElementType = HTMLElement>(
    partInfo: PartInfo,
    directiveName: string,
    constructorClass: (new () => ElementType) | (abstract new () => ElementType),
): ElementType {
    assertsIsElementPartInfo(partInfo, directiveName);
    const element = (partInfo as ElementPartInfo & ExtraPartInfoProperties).element;
    if (!(element instanceof constructorClass)) {
        throw new Error(`${directiveName} attached to non ${constructorClass.name} element.`);
    }
    return element as ElementType;
}

function assertsIsElementPartInfo(
    partInfo: PartInfo,
    directiveName: string,
): asserts partInfo is ElementPartInfo & ExtraPartInfoProperties {
    if (partInfo.type !== PartType.ELEMENT) {
        throw new Error(`${directiveName} directive can only be attached directly to an element.`);
    }
    if (!(partInfo as ElementPartInfo & ExtraPartInfoProperties).element) {
        throw new Error(`${directiveName} directive found no element.`);
    }
}
