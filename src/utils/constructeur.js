import { buttonProps } from "../components/properties/button";
import { groupProps } from "../components/properties/group";
import { hrProps } from "../components/properties/hr";
import { hxProps } from "../components/properties/hx";
import { spanProps } from "../components/properties/span";

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
            tag: "span",
            attributs: {
                id: count,
                class: "",
                name: "span" + count,
                title: "",
                myStyle: {
                },
                get style() {
                    return styleFormat(this.myStyle)
                },
                onclick: " CODE",
                value: "Span " + count,
                props: spanProps
            },
        }
    }
    else if (tag == "hx") {
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
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle);
                },
                value: "Titre " + count,
                props: hxProps
            },
        }
    }
    else if (tag == "hr") {
        count++;
        return {
            tag: "hr",
            attributs: {
                id: count,
                class: "",
                name: "hr" + count,
                myStyle: {

                },
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: hrProps
                
            },
        }
    }
    else if (tag == "icon") {
        count++;
        return {
            tag: "icon",
            attributs: {
                id: count,
                class: "",
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
            tag: "select",
            // labelValue: "",
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
            tag: "group",
            attributs: {
                id: count,
                name: "group" + count,
                myStyle: {
                    "width":"100%",
                    "border": "dotted 1px black",
                    "min-height": "100px",
                    "padding": "10px"
                },
                get style() {
                    return styleFormat(this.myStyle)
                },
                props: groupProps
            },
            children: [],
        }
    }
    else if (tag == "button") {
        count++;
        return {
            tag: "button",
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
                value: "Button " + count,
                props: buttonProps
            },
        }
    }
    else if (tag == "label") {
        count++;
        return {
            tag: "label",
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
            tag: "input",
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
            tag: "textarea",
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
            tag: "form",
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
            tag: "paragraph",
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
            tag: "radio",
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
            tag: "table",
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
            tag: "link",
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
            tag: "list",
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


export function generateHTML(components) {
    let html = '';

    components.forEach(component => {
        let attrs = component.attributs;
        let style = attrs.style ? ` style="${attrs.style}"` : '';
        let classAttr = attrs.class ? ` class="${attrs.class}"` : '';
        let idAttr = attrs.id ? ` id="${attrs.id}"` : '';
        let nameAttr = attrs.name ? ` name="${attrs.name}"` : '';
        let titleAttr = attrs.title ? ` title="${attrs.title}"` : '';
        let placeholderAttr = attrs.placeholder ? ` placeholder="${attrs.placeholder}"` : '';
        let valueAttr = attrs.value ? ` value="${attrs.value}"` : '';
        let hrefAttr = attrs.href ? ` href="${attrs.href}"` : '';
        let onclickAttr = attrs.onclick ? ` onclick="${attrs.onclick}"` : '';
        let xparamAttr = attrs.xparam ? ` xparam="${attrs.xparam}"` : '';
        let subtypeAttr = attrs.subtype ? ` subtype="${attrs.subtype}"` : '';

        switch (component.tag) {
            case 'span':
                html += `<span${idAttr}${classAttr}${titleAttr}${style}${onclickAttr}>${attrs.value}</span>`;
                break;
            case 'hx':
                let hxTag = attrs.xparam ? `h${attrs.xparam}` : 'h1';
                html += `<${hxTag}${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</${hxTag}>`;
                break;
            case 'hr':
                html += `<hr${idAttr}${classAttr}${style} />`;
                break;
            case 'icon':
                html += `<i${idAttr}${classAttr}${style}></i>`;
                break;
            case 'select':
                html += `<select${idAttr}${nameAttr}${classAttr}${style}>`;
                attrs.tab.forEach(item => {
                    html += `<option value="${item}">${item}</option>`;
                });
                html += `</select>`;
                break;
            case 'group':
                html += `<div${idAttr}${nameAttr}${style}>${generateHTML(component.children)}</div>`;
                break;
            case 'button':
                html += `<button${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</button>`;
                break;
            case 'label':
                html += `<label${idAttr}${nameAttr}${titleAttr}${style}>${attrs.value}</label>`;
                break;
            case 'input':
                html += `<input${idAttr}${classAttr}${placeholderAttr}${style}${nameAttr}${titleAttr}${subtypeAttr}/>`;
                break;
            case 'textarea':
                html += `<textarea${idAttr}${nameAttr}${classAttr}${placeholderAttr}${style}>${attrs.value}</textarea>`;
                break;
            case 'form':
                html += `<form${idAttr}${nameAttr}${classAttr}${style}>${generateHTML(component.children)}</form>`;
                break;
            case 'paragraph':
                html += `<p${idAttr}${classAttr}${titleAttr}${style}>${attrs.value}</p>`;
                break;
            case 'radio':
                attrs.items.forEach((item, index) => {
                    html += `<input type="radio"${idAttr}${classAttr}${style}${nameAttr}${titleAttr} value="${item}" id="radio${attrs.id}_${index}" />`;
                    html += `<label for="radio${attrs.id}_${index}">${item}</label>`;
                });
                break;
            case 'table':
                html += `<table${idAttr}${classAttr}${style}>`;
                html += `<thead><tr>`;
                attrs.head.forEach(header => {
                    html += `<th>${header}</th>`;
                });
                html += `</tr></thead>`;
                html += `<tbody><tr>`;
                attrs.dataItems.forEach(dataItem => {
                    html += `<td>${dataItem}</td>`;
                });
                html += `</tr></tbody>`;
                html += `</table>`;
                break;
            case 'link':
                html += `<a${idAttr}${classAttr}${nameAttr}${hrefAttr}${style}>${attrs.value}</a>`;
                break;
            case 'list':
                html += `<ul${idAttr}${classAttr}${nameAttr}>`;
                attrs.dataItems.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul>`;
                break;
            default:
                break;
        }
    });

    return html;
}