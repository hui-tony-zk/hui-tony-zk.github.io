var dropdown_options = [{
    value: "value1",
    text: "value1 text"
}, {
    value: "value2",
    text: "value2 text"
}]

$('#dropdown').selectize({
    maxItems: 1,
    "options": dropdown_options
});