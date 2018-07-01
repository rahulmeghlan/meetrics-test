let {
    adIsViewable,
    viewabilityTime,
    viewabilityPercentage,
    clickCount
} = require('./script');

describe('Initial values of the closure variables', () => {
    test('adIsViewable to be false', () => {
        expect(adIsViewable).toBeFalsy();
    });

    test('InitValue of viewabilityTime to be 0', () => {
        expect(viewabilityTime).toBe(0);
    });

    test('InitValue of viewabilityPercentage to be 0', () => {
        expect(viewabilityPercentage).toBe(0);
    });

    test('InitValue of clickCount to be 0', () => {
        expect(clickCount).toBe(0);
    });
});


