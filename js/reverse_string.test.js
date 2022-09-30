const reverseString = require('./tests');


describe(
    "My Check - Test",
    () => {
        const testCases = [
            {
                inString: 'hello',
                expected: 'olleh'
            },
            {
                inString: 'blin ha',
                expected: 'ah nilb'
            },
            {
                inString: 'Привет как дела?',
                expected: '?алед как тевирП'
            }
        ];
        testCases.forEach(test => {
            it(
                `Incoming string : ${test.inString} expect: ${test.expected}`,
                () => {
                    const res = reverseString(test.inString);
                    expect(res).toBe(test.expected);
                }
            );
        });
    }
);