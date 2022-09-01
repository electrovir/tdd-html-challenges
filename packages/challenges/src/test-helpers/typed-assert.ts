import {assert} from '@open-wc/testing';
import {Tuple} from '../augments/type';

export function typedAssertInstanceOf<InstanceOfGeneric>(
    valueToCheck: unknown,
    constructor: new () => InstanceOfGeneric,
    message = '',
): asserts valueToCheck is InstanceOfGeneric {
    assert.instanceOf(valueToCheck, constructor, message);
}

export function assertNotNullish<T>(
    valueToCheck: T,
    message = '',
): asserts valueToCheck is NonNullable<T> {
    assert.isNotNull(valueToCheck, message);
    assert.isDefined(valueToCheck, message);
}

export function assertArray<ElementGeneric, AssertedElementGeneric extends ElementGeneric>(
    input: ElementGeneric[],
    callback: (
        element: ElementGeneric,
        index: number,
        array: ElementGeneric[],
    ) => asserts element is AssertedElementGeneric,
): asserts input is AssertedElementGeneric[] {
    input.every(callback);
}

export function assertLength<ArrayElementGeneric, LengthGeneric extends number>(
    array: ArrayElementGeneric[],
    length: LengthGeneric,
    message?: string,
): asserts array is Tuple<ArrayElementGeneric, LengthGeneric> {
    const finalMessage = message ? `: ${message}` : '';
    assert.strictEqual(array.length, length, `Array length mismatch${finalMessage}`);
}
