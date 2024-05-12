import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  handleComponentClicked,
} from "../../utils/dnd";
import store from "../../store";
export const span = {
  view: function (vnode) {
    return m(
      "span",
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
          // vnode.attrs.dnd.drag = drag;
          // vnode.attrs.containers.source = src;
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
          console.log("drop ", vnode.attrs.dnd.drag);
          const { source, sink, drag } = dropItem(
            vnode.attrs.containers,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd.drag
          );
          // vnode.attrs.containers.source = source;
          // vnode.attrs.containers.sink = sink;
          // vnode.attrs.dnd.drag = drag;
          // vnode.attrs.dnd.drop = null;
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
          console.log("click", vnode.attrs.eltClicked);
        },
      },
      vnode.attrs.component.attributs.value || "Default"
    );
  },
};
