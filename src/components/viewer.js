import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  enterContainer,
  leaveContainer,
} from "../utils/dnd";

export const Viewer = {
  view: function (vnode) {
    if (vnode.attrs.component.type == "span")
      return m(
        "span",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
        },
        vnode.attrs.component.attributs.value || "Default"
      );
    else if (vnode.attrs.component.type == "hx")
      return m(
        vnode.attrs.component.attributs.balise,
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
          ondragstart: (e) => {
            e.stopPropagation();
            const [src, drag] = dragItemStart(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            vnode.attrs.dnd.drag = drag;
            vnode.attrs.containers.source = src;
            console.log("Item ", drag, " source ", src);
          },
          ondragover: (e) => {
            e.preventDefault();
            e.stopPropagation();
            vnode.attrs.containers.sink = dragItemOver(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
          },
          ondrop: (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("drop ", vnode.attrs.dnd.drag);
            const {source, sink, drag} = dropItem(
              vnode.attrs.containers,
              vnode.attrs.component.attributs.id,
              vnode.attrs.dnd.drag
            );
            vnode.attrs.containers.source = source;
            vnode.attrs.containers.sink = sink;
            vnode.attrs.dnd.drag = drag;
            vnode.attrs.dnd.drop = null;

          },

        },
        vnode.attrs.component.attributs.value
      );
    else if (vnode.attrs.component.type == "hr")
      return m("hr", {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        style: vnode.attrs.component.attributs.style,
        draggable: true,
      });
    else if (vnode.attrs.component.type == "icon")
      return m("i", {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        style: vnode.attrs.component.attributs.style,
        draggable: true,
      });
    else if (vnode.attrs.component.type == "group")
      return m(
        "div",
        {
          id: vnode.attrs.component.attributs.id,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
          ondragstart: (e) => {
            //e.preventDefault();
            e.stopPropagation();
            const [src, drag] = dragItemStart(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            vnode.attrs.dnd.drag = drag;
            vnode.attrs.containers.source = src;
            console.log("Item ", drag, " source ", src);
          },
          ondragover: (e) => {
            e.preventDefault();
            e.stopPropagation();
            // vnode.attrs.containers.sink = dragItemOver(
            //   vnode.attrs.container,
            //   vnode.attrs.component.attributs.id
            // );
          },
          ondragenter: (e) => {
            e.preventDefault();
            e.stopPropagation();
            vnode.attrs.containers.sink = enterContainer(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id,
              vnode.attrs.dnd
            );
          },
          ondrop: (e) => {  
            e.preventDefault();
            e.stopPropagation();
            console.log("drop ", vnode.attrs.dnd.drop);
            console.log("Sink ", vnode.attrs.containers.sink);
            const {source, sink, drag} = dropItem(
              vnode.attrs.containers,
              vnode.attrs.component.attributs.id,
              vnode.attrs.dnd.drag
            );
            vnode.attrs.containers.source = source;
            vnode.attrs.containers.sink = sink;
            vnode.attrs.dnd.drag = drag;
            vnode.attrs.dnd.drop = null;
          },
          ondragleave: (e) =>{
            // e.preventDefault();
            e.stopPropagation();
            leaveContainer(vnode.attrs.container, vnode.attrs.containers, vnode.attrs.component.attributs.id)
          }
        },
        vnode.attrs.component.children.map((item) => {
          return m(Viewer, {
            component: item,
            dnd: vnode.attrs.dnd,
            container: vnode.attrs.container,
            containers: vnode.attrs.containers,
          });
        })
      );
    else if (vnode.attrs.component.type == "button") {
      return m(
        "button",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
        },
        vnode.attrs.component.attributs.value
      );
    } else if (vnode.attrs.component.type == "label") {
      return m(
        "label",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
        },
        vnode.attrs.component.attributs.value
      );
    } else if (vnode.attrs.component.type == "input") {
      return m(
        "label",
        { for: this.id },
        vnode.attrs.component.attributs.label,

        m("input", {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          type: vnode.attrs.component.attributs.subtype,
          placeholder: vnode.attrs.component.attributs.placeholder,
          draggable: true,
        })
      );
    } else if (vnode.attrs.component.type == "textarea")
      return m("textarea", {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        placeholder: vnode.attrs.component.attributs.placeholder,
        style: vnode.attrs.component.attributs.style,
        draggable: true,
      });
    else if (vnode.attrs.component.type == "form")
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
          return m(viewer, { component: item });
        })
      );
    else if (vnode.attrs.component.type == "paragraph")
      return m(
        "p",
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          draggable: true,
        },
        vnode.attrs.component.attributs.value
      );
    else if (vnode.attrs.component.type == "radio") {
      return vnode.attrs.component.attributs.items.map((item) => {
        return m("div", [
          m("input", {
            id: vnode.attrs.component.attributs.item,
            class: vnode.attrs.component.attributs.class,
            name: vnode.attrs.component.attributs.name,
            title: vnode.attrs.component.attributs.title,
            style: vnode.attrs.component.attributs.style,
            type: "radio",
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
    } else if (vnode.attrs.component.type == "select") {
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
    } else if (vnode.attrs.component.type == "table") {
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
    } else if (vnode.attrs.component.type == "link") {
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
    } else if (vnode.attrs.component.type == "list") {
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
