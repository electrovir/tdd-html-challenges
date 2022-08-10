import {sendMouse} from '@web/test-runner-commands';
import {wait} from 'augment-vir';

function getCenterOfElement(element: Element): [number, number] {
    const rect = element.getBoundingClientRect();
    return [
        Math.floor((rect.left + rect.right) / 2),
        Math.floor((rect.bottom + rect.top) / 2),
    ];
}

async function sendMouseToMiddleOfElement(
    element: Element,
    operationType: 'click' | 'move',
): Promise<void> {
    await sendMouse({
        position: getCenterOfElement(element),
        type: operationType,
    });
}

export async function clickElement(element: Element): Promise<void> {
    return sendMouseToMiddleOfElement(element, 'click');
}

// this doesn't work
export async function clickDatePicker(triggerElement: HTMLInputElement): Promise<void> {
    await clickElement(triggerElement);
    await wait(100);
    const rect = triggerElement.getBoundingClientRect();
    await sendMouse({
        position: [
            Math.floor(rect.right),
            Math.floor(rect.bottom) + 50,
        ],
        type: 'click',
    });
}

export async function moveToElement(element: Element): Promise<void> {
    return sendMouseToMiddleOfElement(element, 'move');
}
