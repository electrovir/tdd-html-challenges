import {sendMouse} from '@web/test-runner-commands';
import {wait} from 'augment-vir';

function getCenterOfElement(element: Element): [number, number] {
    const rect = element.getBoundingClientRect();
    return [
        Math.floor((rect.left + rect.right) / 2),
        Math.floor((rect.bottom + rect.top) / 2),
    ];
}

export async function clickElement(element: Element): Promise<void> {
    await sendMouse({
        position: getCenterOfElement(element),
        type: 'click',
    });
}

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
