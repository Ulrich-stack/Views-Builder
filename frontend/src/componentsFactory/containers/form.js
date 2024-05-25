import m from "mithril";
import {
  dragItemStart,
  dropItem,
  end,
  enterContainer,
  handleComponentClicked,
  leaveContainer,
} from "../../utils/dnd";
import { Viewer } from "../viewer";
import store from "../../store";
import { applyClickedBorderStyle } from "../../utils/utils";

export const form = {
  view: function (vnode) {
    return m(
      "form",
      {
        id: vnode.attrs.component.attributs.id,
        style: applyClickedBorderStyle(
          vnode.attrs.component.attributs.myStyle,
          vnode.attrs.component.attributs.id
        ),
        class: vnode.attrs.component.attributs.class,
        draggable: vnode.attrs.component.attributs.id ==="root" ? false : true,
        ondragstart: (e) => {
          //e.preventDefault();
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
        },
        ondragenter: (e) => {
          const sinkCopy = enterContainer(
            vnode.attrs.container,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd,
            e
          );
          store.updateSink(sinkCopy);
        },
        ondrop: (e) => {
          console.log("drop ", vnode.attrs.dnd.drop);
          console.log("Sink ", vnode.attrs.containers.sink);
          dropItem(
            vnode.attrs.containers,
            vnode.attrs.component.attributs.id,
            vnode.attrs.dnd,
            e
          );
        },
        ondragleave: (e) => {
          leaveContainer(
            vnode.attrs.container,
            vnode.attrs.containers.sink,
            vnode.attrs.component.attributs.id,
            e
          );
        },
        ondragend:()=>{
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
      vnode.attrs.component.children.map((item) => {
        return m(Viewer, {
          component: item,
          dnd: vnode.attrs.dnd,
          container: vnode.attrs.container,
          containers: vnode.attrs.containers,
        });
      })
    );
  },
};
