import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  end,
  handleComponentClicked,
} from "../../utils/dnd";
import store from "../../store";
import { applyClickedBorderStyle } from "../../utils/utils";

export const button = {
  view: function (vnode) {
    return m(
      "button",
      {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
        title: vnode.attrs.component.attributs.title,
        style: applyClickedBorderStyle(
          vnode.attrs.component.attributs.myStyle,
          vnode.attrs.component.attributs.id
        ),
        draggable: true,
        ondragstart: (e) => {
          e.stopPropagation();
          const [src, drag] = dragItemStart(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id,
            e
          );
          store.updateDrag(drag);
          store.updateSource(src);
        },
        ondragover: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const [sink, dropItem] = dragItemOver(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id,
            e
          );
          store.updateSink(sink);
          store.updateDrop(dropItem);
        },
        ondrop: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const { source, sink, drag } = dropItem(
            vnode.attrs.containers,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd,
            e
          );
          store.updateSource(source);
          store.updateSink(sink);
          store.updateDrag(drag);
        },
        ondragend: () => {
          end(vnode.attrs.containers.sink);
          store.reset();
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
