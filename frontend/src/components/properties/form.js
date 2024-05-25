export const formProps = [
    {
        name: "tag",
        tag: "input",
        type: "text",
        readOnly: true
    },
    {
        name: "id",
        tag: "input",
        type: "text",
        readOnly: true
    },
    {
        name: "class",
        tag: "input",
        type: "text",
        readOnly: false
    },
    {
        name: "name",
        tag: "input",
        type: "text",
        readOnly: false
    },
    {
        name: "action",
        tag: "input",
        type: "text",
        readOnly: false
    },
    {
        name: "method",
        tag: "select",
        options: ["GET", "POST"],
        readOnly: false
    },
    {
        name: "autocomplete",
        tag: "select",
        options: ["on", "off"],
        readOnly: false
    },
    {
        name: "onsubmit",
        tag: "textarea",
        type: "text",
        readOnly: false
    },
];
