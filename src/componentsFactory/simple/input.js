import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  handleComponentClicked,
} from "../../utils/dnd";
import store from "../../store";

export const input = {
  view: function (vnode) {
    return m(
      "input",
      {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        value: vnode.attrs.component.attributs.value || "Default",
        title: vnode.attrs.component.attributs.title,
        style: vnode.attrs.component.attributs.style,
        // tag: vnode.attrs.component.attributs.subtype,
        placeholder: vnode.attrs.component.attributs.placeholder,
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
        onclick: (e) => {
          e.preventDefault();
          vnode.attrs.eltClicked = handleComponentClicked(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          console.log(vnode.attrs.eltClicked);
        },
      },
      
    );
  },
};
