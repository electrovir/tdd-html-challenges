export function extractText(element: Element | ShadowRoot): string {
    if ('shadowRoot' in element && element.shadowRoot) {
        return extractText(element.shadowRoot);
    }

    return element.textContent?.trim() ?? '';
}
