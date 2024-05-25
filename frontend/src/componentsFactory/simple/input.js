import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  handleComponentClicked,
} from "../../utils/dnd";
import store from "../../store";
import { applyClickedBorderStyle } from "../../utils/utils";

export const input = {
  view: function (vnode) {
    return m(
      "input",
      {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        value: vnode.attrs.component.attributs.value || "",
        title: vnode.attrs.component.attributs.title,
        style: applyClickedBorderStyle(
          vnode.attrs.component.attributs.myStyle,
          vnode.attrs.component.attributs.id
        ),
        // tag: vnode.attrs.component.attributs.subtype,
        placeholder: vnode.attrs.component.attributs.placeholder,
        disabled:vnode.attrs.component.attributs.disabled,
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
      
    );
  },
};
