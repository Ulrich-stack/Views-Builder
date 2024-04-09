let count = 0;

function styleFormat(st) {
    let key = Object.keys(st);

    let result = "";

    key.map(item => {
        if (item != "")
            result += item + " : " + st[item] + ";";
    })

    return result;
}

export function modelCreate(tag) {
    if (tag == "span") {
        count++;
        return {
            type: "span",
            attributs: {
                id: count,
                class: "",
                name: "span" + count,
                title: "",

                myStyle: {
                    "font-family": " Times New Roman"
                },

                get style() {
                    return styleFormat(this.myStyle)
                },
                onclick: " CODE",
                value: "Span " + count,
            },
        }
    }
    else if (tag == "hx") {
        count++;
        return {
            type: "hx",
            attributs: {
                id: count,
                class: "",
                name: "hx" + count,
                title: "",
                xparam: "",
                get balise() {
                    return "h" + this.xparam;
                },
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle);
                },
                value: "Titre " + count
            },
        }
    }
    else if (tag == "hr") {
        count++;
        return {
            type: "hr",
            attributs: {
                id: count,
                class: "",
                name: "hr" + count,
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    }
    else if (tag == "icon") {
        count++;
        return {
            type: "icon",
            attributs: {
                id: count,
                class: "fa-brands fa-html5",
                name: "icon" + count,
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    }
    else if (tag == "select") {
        count++;
        return {
            type: "select",
            labelValue: "",
            attributs: {
                id: count,
                name: "select" + count,
                class: "",
                items: "item 1 ,item 2",
                get tab(){
                    return this.items.split(",");
                },
                get value(){
                    return this.items;
                },
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    }
    else if (tag == "group") {
        count++;
        return {
            type: "group",
            attributs: {
                id: count,
                name: "group" + count,
                myStyle: {
                    "width":"100%",
                    "border": "dotted 1px black",
                    "min-height": "100px",
                    "color": "",
                    "padding": "10px"
                },
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
            children: [],
        }
    }
    else if (tag == "button") {
        count++;
        return {
            type: "button",
            attributs: {
                id: count,
                class: "",
                name: "button" + count,
                title: "",
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                },
            value: "Button " + count

            },
        }
    }
    else if (tag == "label") {
        count++;
        return {
            type: "label",
            attributs: {
                id: count,
                name: "label" + count,
                title: "",
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                },
            value: "Label" + count

            },
        }
    }
    else if (tag == "input") {
        count++;
        return {
            type: "input",
            attributs: {
                id: count,
                class: "",
                placeholder: "",
                style: "",
                name: "input" + count,
                title: "",
                label: "" ,
                subtype: "",
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    }
    else if (tag == "textarea") {
        count++;
        return {
            type: "textarea",
            labelValue: "",
            attributs: {
                id: count,
                name: "textarea" + count,
                class: "",
                placeholder: "",
                value: "",
                myStyle: {},
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    }

    else if(tag == "form"){
        count++;
        return{
            type: "form",
            attributs: {
                id: count,
                name: "form"+ count,
                class: "",
                myStyle:{
                    "height": "100px",
                    "border":"1px black solid"
                },
                get style() {
                    return styleFormat(this.myStyle)
                },
            },
            children: [],


        }
    }
    else if (tag == "paragraph") {
        count++;
        return {
            type: "paragraph",
            attributs: {
                id: count,
                class: "",
                name: "paragraph" + count,
                title: "",
                myStyle: {},
                get style() {
                    return styleFormat(this.myStyle)
                },
                value: "Paragraph " + count,
            },
        }
    }
    else if (tag == "radio") {
        count++;
        return {
            type: "radio",
            attributs: {
                id: count,
                class: "",
                style: "",
                name: "radio" + count,
                title: "",
                label: "" ,
                items: ["item 1", "item 2"],
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    }
    else if (tag == "table") {
        count++;
        return {
            type: "table",
            attributs: {
                id: count,
                class: "",
                style: "",
                name: "table" + count,
                title: "",
                label: "" ,
                headers: "item 1, item 2",
                get head(){
                    return this.headers.split(",");
                },
                data: "nom, prénom",
                get dataItems(){
                    return this.data.split(",");
                },
                myStyle: {
                    "border-collapse": "collapse",
                },
                get style() {
                    return styleFormat(this.myStyle)
                }
            },
        }
    }
    else if (tag == "link") {
        count++;
        return {
            type: "link",
            attributs: {
                id: count,
                class: "",
                name: "link" + count,
                href: "",
                myStyle: {
                    "font-family": " Times New Roman"
                },
                get style() {
                    return styleFormat(this.myStyle)
                },
                value: "Link " + count,
            },
        }
    }
    else if(tag == "list"){
        count++;
        return {
            type: "list",
            attributs: {
                id: count,
                class: "",
                name: "list" + count,
                data: "item 1, item 2",
                get dataItems(){
                    return this.data.split(",");
                }
            }
        }
    }

}

