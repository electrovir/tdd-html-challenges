export function queryThroughShadow(
    element: Element | ShadowRoot,
    query: string,
): Element | undefined {
    if ('shadowRoot' in element && element.shadowRoot) {
        return queryThroughShadow(element.shadowRoot, query);
    }

    return element.querySelector(query) ?? undefined;
}
