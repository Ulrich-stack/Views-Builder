import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  handleComponentClicked,
} from "../../utils/dnd";

export const hr = {
  view: function (vnode) {
    return m(
      "hr",
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
          const { source, sink, drag } = dropItem(
            vnode.attrs.containers,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd.drag
          );
          vnode.attrs.containers.source = source;
          vnode.attrs.containers.sink = sink;
          vnode.attrs.dnd.drag = drag;
          vnode.attrs.dnd.drop = null;
        },
        onclick: (e) => {
          e.preventDefault();
          vnode.attrs.eltClicked = handleComponentClicked(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          console.log(vnode.attrs.eltClicked);
        },
      }
    );
  },
};
