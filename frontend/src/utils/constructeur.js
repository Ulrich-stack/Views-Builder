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
import { listProps } from "../components/properties/list";
import { linkProps } from "../components/properties/link";
import { formProps } from "../components/properties/form";
import { tableProps } from "../components/properties/table";
import { applyClickedBorderStyle, styleFormat } from "./utils";

// Object to keep track of counts for each tag type
const counts = {
  span: 0,
  hx: 0,
  hr: 0,
  icon: 0,
  select: 0,
  group: 0,
  button: 0,
  label: 0,
  input: 0,
  textarea: 0,
  form: 0,
  paragraph: 0,
  radio: 0,
  table: 0,
  link: 0,
  list: 0,
  nav: 0,
};

export function modelCreate(tag) {
  counts[tag]++;
  const id = `${tag}${counts[tag]}`;

  const baseAttributes = {
    id: id,
    class: "",
    name: `${tag}${counts[tag]}`,
    title: "",
    myStyle: applyClickedBorderStyle({}, counts[tag]),
    get style() {
      return styleFormat(this.myStyle);
    },
  };

  switch (tag) {
    case "span":
      return {
        tag: "span",
        attributs: {
          ...baseAttributes,
          onclick: " CODE",
          value: "Span " + counts[tag],
          props: spanProps,
        },
      };
    case "hx":
      return {
        tag: "hx",
        attributs: {
          ...baseAttributes,
          xparam: 2,
          get balise() {
            return "h" + this.xparam;
          },
          value: "Titre " + counts[tag],
          props: hxProps,
        },
      };
    case "hr":
      return {
        tag: "hr",
        attributs: {
          ...baseAttributes,
          props: hrProps,
        },
      };
    case "icon":
      return {
        tag: "icon",
        attributs: {
          ...baseAttributes,
        },
      };
    case "select":
      return {
        tag: "select",
        attributs: {
          ...baseAttributes,
          items: "item 1,item 2",
          get tab() {
            return this.items.split(",");
          },
          get value() {
            return this.items;
          },
        },
      };
    case "group":
      return {
        tag: "group",
        attributs: {
          ...baseAttributes,
          myStyle: applyClickedBorderStyle(
            {
              width: "100%",
              border: "dotted 1px black",
              "min-height": "100px",
              padding: "10px",
            },
            counts[tag]
          ),
          props: groupProps,
        },
        children: [],
      };
    case "button":
      return {
        tag: "button",
        attributs: {
          ...baseAttributes,
          value: "Button " + counts[tag],
          props: buttonProps,
        },
      };
    case "label":
      return {
        tag: "label",
        attributs: {
          ...baseAttributes,
          value: "Label " + counts[tag],
          props: labelProps,
        },
      };
    case "input":
      return {
        tag: "input",
        attributs: {
          ...baseAttributes,
          placeholder: "",
          label: "",
          subtype: "",
          disabled: false,
          props: inputProps,
        },
      };
    case "textarea":
      return {
        tag: "textarea",
        attributs: {
          ...baseAttributes,
          placeholder: "",
          value: "",
          props: textareaProps,
        },
      };
    case "form":
      return {
        tag: "form",
        attributs: {
          ...baseAttributes,
          myStyle: applyClickedBorderStyle(
            {
              "min-height": "100px",
              padding: "10px",
              border: "1px black solid",
            },
            counts[tag]
          ),
          onsubmit: "JE submit",
          props: formProps,
        },
        children: [],
      };
    case "paragraph":
      return {
        tag: "paragraph",
        attributs: {
          ...baseAttributes,
          value: "Paragraph " + counts[tag],
          props: paragraphProps,
        },
      };
    case "radio":
      return {
        tag: "radio",
        attributs: {
          ...baseAttributes,
          label: "",
          items: ["item 1", "item 2"],
          props: radioProps,
        },
      };
    case "table":
      return {
        tag: "table",
        attributs: {
          ...baseAttributes,
          headers: "item 1,item 2",
          get head() {
            return this.headers.split(",");
          },
          data: "nom, prénom",
          get dataItems() {
            return this.data.split(",");
          },
          myStyle: applyClickedBorderStyle(
            {
              "border-collapse": "collapse",
            },
            counts[tag]
          ),
          props: tableProps,
        },
      };
    case "link":
      return {
        tag: "link",
        attributs: {
          ...baseAttributes,
          href: "",
          myStyle: applyClickedBorderStyle(
            {
              "font-family": "Times New Roman",
            },
            counts[tag]
          ),
          value: "Link " + counts[tag],
          props: linkProps,
        },
      };
    case "list":
      return {
        tag: "list",
        attributs: {
          ...baseAttributes,
          data: "item 1, item 2",
          get dataItems() {
            return this.data.split(",");
          },
          props: listProps,
        },
      };
    case "nav":
      return {
        tag: "nav",
        attributs: {
          ...baseAttributes,
          myStyle: applyClickedBorderStyle(
            {
              width: "100%",
              border: "dotted 1px black",
              "min-height": "100px",
              padding: "10px",
            },
            counts[tag]
          ),
          value: "Navigation " + counts[tag],
          props: navProps,
        },
        children: [],
      };
    default:
      return {};
  }
}
