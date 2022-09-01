export function extractText(element: Element | ShadowRoot): string {
    if ('shadowRoot' in element && element.shadowRoot) {
        return extractText(element.shadowRoot);
    }

    if (element instanceof HTMLInputElement) {
        return element.value;
    } else {
        return element.textContent?.trim() ?? '';
    }
}
