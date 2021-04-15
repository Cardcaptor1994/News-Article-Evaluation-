const isValidURL = require("../client/js/urlChecker");

test('The url is valid', () => {
    expect(isValidURL("https://www.redhat.com/en/topics/api")).toBeTruthy();
});

test('The url is invalid', () => {
    expect(isValidURL("Invalid URL")).toBeFalsy();
});