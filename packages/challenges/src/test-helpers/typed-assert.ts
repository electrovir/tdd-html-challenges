import {assert} from '@open-wc/testing';

export function typedAssertInstanceOf<InstanceOfGeneric>(
    valueToCheck: unknown,
    constructor: new () => InstanceOfGeneric,
): asserts valueToCheck is InstanceOfGeneric {
    assert.instanceOf(valueToCheck, constructor);
}
