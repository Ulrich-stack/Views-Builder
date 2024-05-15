import m from "mithril";
import { dragItemOver, dragItemStart, dropItem, handleComponentClicked } from "../utils/dnd";
import store from "../store";
import { Viewer } from "./viewer";

export const form = {
  view: function (vnode) {
    return m(
      "form",
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
      vnode.attrs.component.children.map((item) => m(Viewer, { component: item, container: vnode.attrs.container, dnd: vnode.attrs.dnd, containers: vnode.attrs.containers }))
    );
  },
};

export const group = {
  view: function (vnode) {
    return m(
      "div",
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
      vnode.attrs.component.children.map((item) => m(Viewer, { component: item, container: vnode.attrs.container, dnd: vnode.attrs.dnd, containers: vnode.attrs.containers }))
    );
  },
};

export const paragraph = {
  view: function (vnode) {
    return m(
      "p",
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
      vnode.attrs.component.attributs.value || "Paragraph"
    );
  },
};
