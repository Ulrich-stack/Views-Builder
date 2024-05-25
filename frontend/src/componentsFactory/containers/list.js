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

export const list = {
  view: function (vnode) {
    return m(
      "ul",
      {
        id: vnode.attrs.component.attributs.id,
        class: vnode.attrs.component.attributs.class,
        name: vnode.attrs.component.attributs.name,
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
          const [sink, dropItem] = dragItemOver(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id,
            e
          );
          store.updateSink(sink);
          store.updateDrop(dropItem);
        },
        ondrop: (e) => {
          dropItem(
            vnode.attrs.containers,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd,
            e
          );
        },
        ondragend: () => {
          end(vnode.attrs.containers.sink);
          store.reset();
        },
        onclick: (e) => {
          e.stopPropagation();
          e.preventDefault();
          const elt = handleComponentClicked(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id
          );
          store.updateEltClicked(elt);
        },
      },
      vnode.attrs.component.attributs.dataItems.map((item) => m("li", item))
    );
  },
};
