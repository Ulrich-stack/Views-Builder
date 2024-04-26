import m from "mithril";
import {
  dragItemOver,
  dragItemStart,
  dropItem,
  enterContainer,
  handleComponentClicked,
  leaveContainer,
} from "../../utils/dnd";
import { Viewer } from "../../components/viewer";

export const group = {
  view: function (vnode) {
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
          },
          onclick: (e) =>{
            e.preventDefault();
            vnode.attrs.eltClicked = handleComponentClicked(vnode.attrs.container, vnode.attrs.component.attributs.id);
            console.log(vnode.attrs.eltClicked);
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
  },
};
