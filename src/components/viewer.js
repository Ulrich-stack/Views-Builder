import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  enterContainer,
  handleComponentClicked,
  leaveContainer,
} from "../utils/dnd";
import { hx } from "../componentsFactory/simple/hx";
import { span } from "../componentsFactory/simple/span";
import { hr } from "../componentsFactory/simple/hr";
import { group } from "../componentsFactory/containers/group";
import { button } from "../componentsFactory/simple/button";
import { label } from "../componentsFactory/simple/label";
import { input } from "../componentsFactory/simple/input";
import { textarea } from "../componentsFactory/simple/textarea";
import { paragraph } from "../componentsFactory/containers/paragraph";
import store from "../store";

export const Viewer = {
  view: function (vnode) {
    if (vnode.attrs.component.tag == "span")
      return m(span, {
        // Utilisation du composant span
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    else if (vnode.attrs.component.tag == "hx")
      return m(hx, {
        // Utilisation du composant hx
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    else if (vnode.attrs.component.tag == "hr")
      return m(hr, {
        // Utilisation du composant hx
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    else if (vnode.attrs.component.tag == "icon")
      return m("i", {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        style: vnode.attrs.component.attributs.style,
        draggable: true,
      });
    else if (vnode.attrs.component.tag == "group")
      return m(group, {
        // Utilisation du composant group
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    else if (vnode.attrs.component.tag == "button") {
      return m(button, {
        // Utilisation du composant button
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    } else if (vnode.attrs.component.tag == "label") {
      return m(label, {
        // Utilisation du composant label
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    } else if (vnode.attrs.component.tag == "input") {
      return m(input, {
        // Utilisation du composant input
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    } else if (vnode.attrs.component.tag == "textarea")
    return m(textarea, {
      // Utilisation du composant input
      component: vnode.attrs.component,
      container: vnode.attrs.container,
      dnd: vnode.attrs.dnd,
      containers: vnode.attrs.containers,
      eltClicked: vnode.attrs.eltClicked,
    });
    else if (vnode.attrs.component.tag == "form")
      return m(
        "form",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
        },
        vnode.attrs.component.children.map((item) => {
          return m(Viewer, { component: item });
        })
      );
    else if (vnode.attrs.component.tag == "paragraph")
    return m(paragraph, {
      // Utilisation du composant span
      component: vnode.attrs.component,
      container: vnode.attrs.container,
      dnd: vnode.attrs.dnd,
      containers: vnode.attrs.containers,
      eltClicked: vnode.attrs.eltClicked,
    });
    else if (vnode.attrs.component.tag == "radio") {
      return vnode.attrs.component.attributs.items.map((item) => {
        return m("div", [
          m("input", {
            id: vnode.attrs.component.attributs.item,
            class: vnode.attrs.component.attributs.class,
            name: vnode.attrs.component.attributs.name,
            title: vnode.attrs.component.attributs.title,
            style: vnode.attrs.component.attributs.style,
            tag: "radio",
          }),
          m(
            "label",
            {
              for: this.id,
              draggable: true,
            },
            item
          ),
        ]);
      });
    } else if (vnode.attrs.component.tag == "select") {
      return m(
        "label",
        { for: this.id },
        vnode.attrs.component.attributs.label,

        m(
          "select",
          {
            id: vnode.attrs.component.attributs.id,
            class: vnode.attrs.component.attributs.class,
            name: vnode.attrs.component.attributs.name,
            title: vnode.attrs.component.attributs.title,
            style: vnode.attrs.component.attributs.style,
            draggable: true,
          },
          [
            vnode.attrs.component.attributs.tab.map((item) => {
              return m("option", { value: item }, item);
            }),
          ]
        )
      );
    } else if (vnode.attrs.component.tag == "table") {
      return m(
        "table",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
        },
        [
          vnode.attrs.component.attributs.head.map((item) => {
            return m(
              "tr",
              { style: "border: 1px solid black;" },

              [
                m("td", { style: "border: 1px solid black" }, item),
                vnode.attrs.component.attributs.dataItems.map((x) => {
                  return m("td", { style: "border: 1px solid black;" }, x);
                }),
              ]
            );
          }),
        ]
      );
    } else if (vnode.attrs.component.tag == "link") {
      return m(
        "a",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          href: vnode.attrs.component.attributs.href,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
          ondragstart: startItem,
          ondragover: dragoverItem,
          ondrop: dropItem,
          ondragend: end,
          onclick: clickItem,
        },
        vnode.attrs.component.attributs.value
      );
    } else if (vnode.attrs.component.tag == "list") {
      return m(
        "ul",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
          ondragstart: startItem,
          ondragover: dragoverItem,
          ondrop: dropItem,
          ondragend: end,
          onclick: clickItem,
        },
        [
          vnode.attrs.component.attributs.dataItems.map((item) => {
            return m("li", item);
          }),
        ]
      );
    }
  },
};
