import m from "mithril";
import { dragItemOver, dragItemStart, dropItem, handleComponentClicked } from "../utils/dnd";
import store from "../store";

const createComponent = (tag) => {
  return {
    view: function (vnode) {
      return m(
        tag ==='hx'? vnode.attrs.component.attributs.balise: tag,
        {
          id: vnode.attrs.component.attributs.id,
          class: vnode.attrs.component.attributs.class,
          name: vnode.attrs.component.attributs.name,
          title: vnode.attrs.component.attributs.title,
          style: vnode.attrs.component.attributs.style,
          placeholder: vnode.attrs.component.attributs.placeholder,
          href: vnode.attrs.component.attributs.href,
          draggable: true,
          ondragstart: (e) => {
            e.stopPropagation();
            const [src, drag] = dragItemStart(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            store.updateDrag(drag);
            store.updateSource(src);
          },
          ondragover: (e) => {
            e.preventDefault();
            e.stopPropagation();
            const sinkCopy = dragItemOver(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            store.updateSink(sinkCopy);
          },
          ondrop: (e) => {
            e.preventDefault();
            e.stopPropagation();
            const { source, sink, drag } = dropItem(
              vnode.attrs.containers,
              vnode.attrs.component.attributs.id,
              vnode.attrs.dnd.drag
            );
            store.updateSource(source);
            store.updateSink(sink);
            store.updateDrag(drag);
            store.updateDrop(null);
          },
          onclick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            const eltClickedCopy = handleComponentClicked(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            store.updateEltClicked(eltClickedCopy);
          },
        },
        vnode.attrs.component.attributs.value || "Default"
      );
    },
  };
};

export const span = createComponent("span");
export const icon = createComponent("i");
export const input = createComponent("input");
export const button = createComponent("button");
export const label = createComponent("label");
export const textarea = createComponent("textarea");
export const link = createComponent("a");
export const hr = createComponent("hr");
export const hx = createComponent("hx"); 

export const select = {
  view: function (vnode) {
    return m(
      "label",
      { for: vnode.attrs.component.attributs.id },
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
          ondragstart: (e) => {
            e.stopPropagation();
            const [src, drag] = dragItemStart(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            store.updateDrag(drag);
            store.updateSource(src);
          },
          ondragover: (e) => {
            e.preventDefault();
            e.stopPropagation();
            const sinkCopy = dragItemOver(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            store.updateSink(sinkCopy);
          },
          ondrop: (e) => {
            e.preventDefault();
            e.stopPropagation();
            const { source, sink, drag } = dropItem(
              vnode.attrs.containers,
              vnode.attrs.component.attributs.id,
              vnode.attrs.dnd.drag
            );
            store.updateSource(source);
            store.updateSink(sink);
            store.updateDrag(drag);
            store.updateDrop(null);
          },
          onclick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            const eltClickedCopy = handleComponentClicked(
              vnode.attrs.container,
              vnode.attrs.component.attributs.id
            );
            store.updateEltClicked(eltClickedCopy);
          },
        },
        vnode.attrs.component.attributs.tab.map((item) => m("option", { value: item }, item))
      )
    );
  },
};

export const radio = {
  view: function (vnode) {
    return vnode.attrs.component.attributs.items.map((item) => m("div", [
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
    ]));
  },
};

export const table = {
  view: function (vnode) {
    return m(
      "table",
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
          store.updateDrag(drag);
          store.updateSource(src);
        },
        ondragover: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const sinkCopy = dragItemOver(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          store.updateSink(sinkCopy);
        },
        ondrop: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const { source, sink, drag } = dropItem(
            vnode.attrs.containers,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd.drag
          );
          store.updateSource(source);
          store.updateSink(sink);
          store.updateDrag(drag);
          store.updateDrop(null);
        },
        onclick: (e) => {
          e.stopPropagation();
          e.preventDefault();
          const eltClickedCopy = handleComponentClicked(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          store.updateEltClicked(eltClickedCopy);
        },
      },
      [
        vnode.attrs.component.attributs.head.map((item) => m(
          "tr",
          { style: "border: 1px solid black;" },
          [
            m("td", { style: "border: 1px solid black" }, item),
            vnode.attrs.component.attributs.dataItems.map((x) => m("td", { style: "border: 1px solid black;" }, x)),
          ]
        )),
      ]
    );
  },
};

export const list = {
  view: function (vnode) {
    return m(
      "ul",
      {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        style: vnode.attrs.component.attributs.style,
        draggable: true,
        ondragstart: (e) => {
          e.stopPropagation();
          const [src, drag] = dragItemStart(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          store.updateDrag(drag);
          store.updateSource(src);
        },
        ondragover: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const sinkCopy = dragItemOver(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          store.updateSink(sinkCopy);
        },
        ondrop: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const { source, sink, drag } = dropItem(
            vnode.attrs.containers,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd.drag
          );
          store.updateSource(source);
          store.updateSink(sink);
          store.updateDrag(drag);
          store.updateDrop(null);
        },
        onclick: (e) => {
          e.stopPropagation();
          e.preventDefault();
          const eltClickedCopy = handleComponentClicked(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          store.updateEltClicked(eltClickedCopy);
        },
      },
      vnode.attrs.component.attributs.dataItems.map((item) => m("li", item))
    );
  },
};
