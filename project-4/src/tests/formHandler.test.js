const handleSubmit = require("../client/js/formHandler");

test('Form is submitted when the URL is valid', () => {
    expect(handleSubmit("https://www.redhat.com/en/topics/api")).toBeTruthy();
});

test('Form is not submitted when the URL is invalid', () => {
    expect(handleSubmit("Invalid URL")).toBeFalsy();
});