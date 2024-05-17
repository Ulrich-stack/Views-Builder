import { buttonProps } from "../components/properties/button";
import { groupProps } from "../components/properties/group";
import { hrProps } from "../components/properties/hr";
import { hxProps } from "../components/properties/hx";
import { spanProps } from "../components/properties/span";
import { labelProps } from "../components/properties/label";
import { paragraphProps } from "../components/properties/paragraph";
import { inputProps } from "../components/properties/input";
import { textareaProps } from "../components/properties/textarea";
import { radioProps } from "../components/properties/radio";
import { navProps } from "../components/properties/nav";
import { tagProps } from "../components/properties/tag";
import { listProps } from "../components/properties/list";
import { linkProps } from "../components/properties/link";
import { formProps } from "../components/properties/form";
import { tableProps } from "../components/properties/table";
import { applyClickedBorderStyle, styleFormat } from "./utils";

let count = 0;

export function modelCreate(tag) {
    if (tag === "span") {
        count++;
        return {
            tag: "span",
            attributs: {
                id: count,
                class: "",
                name: "span" + count,
                title: "",
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                onclick: " CODE",
                value: "Span " + count,
                props: spanProps
            },
        }
    } else if (tag === "hx") {
        count++;
        return {
            tag: "hx",
            attributs: {
                id: count,
                class: "",
                name: "hx" + count,
                title: "",
                xparam: 2,
                get balise() {
                    return "h" + this.xparam;
                },
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle);
                },
                value: "Titre " + count,
                props: hxProps
            },
        }
    } else if (tag === "hr") {
        count++;
        return {
            tag: "hr",
            attributs: {
                id: count,
                class: "",
                name: "hr" + count,
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: hrProps
            },
        }
    } else if (tag === "icon") {
        count++;
        return {
            tag: "icon",
            attributs: {
                id: count,
                class: "",
                name: "icon" + count,
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    } else if (tag === "select") {
        count++;
        return {
            tag: "select",
            attributs: {
                id: count,
                name: "select" + count,
                class: "",
                items: "item 1 ,item 2",
                get tab() {
                    return this.items.split(",");
                },
                get value() {
                    return this.items;
                },
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    } else if (tag === "group") {
        count++;
        return {
            tag: "group",
            attributs: {
                id: count,
                name: "group" + count,
                myStyle: applyClickedBorderStyle({
                    "width": "100%",
                    "border": "dotted 1px black",
                    "min-height": "100px",
                    "padding": "10px"
                }, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: groupProps
            },
            children: [],
        }
    } else if (tag === "button") {
        count++;
        return {
            tag: "button",
            attributs: {
                id: count,
                class: "",
                name: "button" + count,
                title: "",
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                value: "Button " + count,
                props: buttonProps
            },
        }
    } else if (tag === "label") {
        count++;
        return {
            tag: "label",
            attributs: {
                id: count,
                name: "label" + count,
                title: "",
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                value: "Label " + count,
                props: labelProps
            },
        }
    } else if (tag === "input") {
        count++;
        return {
            tag: "input",
            attributs: {
                id: count,
                class: "",
                placeholder: "",
                name: "input" + count,
                title: "",
                label: "",
                subtype: "",
                myStyle: applyClickedBorderStyle({}, count),
                disabled: false,
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: inputProps
            },
        }
    } else if (tag === "textarea") {
        count++;
        return {
            tag: "textarea",
            attributs: {
                id: count,
                name: "textarea" + count,
                class: "",
                placeholder: "",
                value: "",
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: textareaProps
            },
        }
    } else if (tag === "form") {
        count++;
        return {
            tag: "form",
            attributs: {
                id: count,
                name: "form" + count,
                class: "",
                myStyle: applyClickedBorderStyle({
                    "min-height": "100px",
                    "padding": "10px",
                    "border": "1px black solid"
                }, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: formProps
            },
            children: [],
        }
    } else if (tag === "paragraph") {
        count++;
        return {
            tag: "paragraph",
            attributs: {
                id: count,
                class: "",
                name: "paragraph" + count,
                title: "",
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                value: "Paragraph " + count,
                props: paragraphProps
            },
        }
    } else if (tag === "radio") {
        count++;
        return {
            tag: "radio",
            attributs: {
                id: count,
                class: "",
                name: "radio" + count,
                title: "",
                label: "",
                items: ["item 1", "item 2"],
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: radioProps
            },
        }
    } else if (tag === "table") {
        count++;
        return {
            tag: "table",
            attributs: {
                id: count,
                class: "",
                name: "table" + count,
                title: "",
                label: "",
                headers: "item 1, item 2",
                get head() {
                    return this.headers.split(",");
                },
                data: "nom, prénom",
                get dataItems() {
                    return this.data.split(",");
                },
                myStyle: applyClickedBorderStyle({
                    "border-collapse": "collapse",
                }, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: tableProps
            },
        }
    } else if (tag === "link") {
        count++;
        return {
            tag: "link",
            attributs: {
                id: count,
                class: "",
                name: "link" + count,
                href: "",
                myStyle: applyClickedBorderStyle({
                    "font-family": "Times New Roman"
                }, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                value: "Link " + count,
                props: linkProps
            },
        }
    } else if (tag === "list") {
        count++;
        return {
            tag: "list",
            attributs: {
                id: count,
                class: "",
                name: "list" + count,
                data: "item 1, item 2",
                myStyle: applyClickedBorderStyle({}, count),
                get style() {
                    return styleFormat(this.myStyle)
                },
                get dataItems() {
                    return this.data.split(",");
                },
                props: listProps
            }
        }
    }
    else if (tag === "nav") {
        count++;
        return {
            tag: "nav",
            attributs: {
                id: count,
                class: "",
                name: "nav" + count,
                title: "",
                myStyle: applyClickedBorderStyle({
                    "width": "100%",
                    "border": "dotted 1px black",
                    "min-height": "100px",
                    "padding": "10px"
                }, count),
                get style() {
                    return styleFormat(this.myStyle);
                },
                value: "Navigation " + count,
                props: navProps,
            },
            children: []
        }
    } 
}
