import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  enterContainer,
  handleComponentClicked,
  leaveContainer,
} from "../utils/dnd";
import { hx } from "./simple/hx";
import { span } from "./simple/span";
import { hr } from "./simple/hr";
import { group } from "./containers/group";
import { button } from "./simple/button";
import { label } from "./simple/label";
import { input } from "./simple/input";
import { textarea } from "./simple/textarea";
import { paragraph } from "./containers/paragraph";
import store from "../store";
import { table } from "./containers/table";
import { link } from "./simple/link";
import { list } from "./containers/list";
import { form } from "./containers/form";
import { nav } from "./containers/nav";

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
    else if (vnode.attrs.component.tag === "nav") {
      return m(nav, {
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    } else if (vnode.attrs.component.tag == "form")
      return m(form, {
        // Utilisation du composant group
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
      });
    else if (vnode.attrs.component.tag == "paragraph")
      return m(paragraph, {
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
      return m(table, {
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
        eltClicked: vnode.attrs.eltClicked,
      });
    } else if (vnode.attrs.component.tag == "link") {
      return m(link, {
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
        eltClicked: vnode.attrs.eltClicked,
      });
    } else if (vnode.attrs.component.tag == "list") {
      return m(list, {
        component: vnode.attrs.component,
        container: vnode.attrs.container,
        dnd: vnode.attrs.dnd,
        containers: vnode.attrs.containers,
        eltClicked: vnode.attrs.eltClicked,
      });
    }
  },
};
