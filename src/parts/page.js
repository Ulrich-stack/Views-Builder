import m from "mithril";
import { dropTag } from "../utils/dnd";
import { Viewer } from "../components/viewer";
import store from "../store";

const Page = {
  view: function (vnode) {
    return (
      <div
        className="w-8/12 overflow-y-scroll overflow-x-hidden"
        // style = "all: unset"
        ondragenter={(e) => {
          vnode.attrs.dnd.drop = vnode.attrs.container;
          vnode.attrs.containers.sink = vnode.attrs.container;
          console.log("Premiere div",vnode.attrs.dnd);
        }}
        ondragover={(e) => e.preventDefault()}
        ondrop={(e) => {
          e.preventDefault();
          dropTag(vnode.attrs.dnd.drag, vnode.attrs.container);
          vnode.attrs.dnd = { drag: null, drop: null };
        }}
      >
        {vnode.attrs.container.map((item) => {
          return (
            <Viewer
              component={item}
              container={vnode.attrs.container}
              containers={vnode.attrs.containers}
              dnd={vnode.attrs.dnd}
              eltClicked={vnode.attrs.eltClicked}
            />
          );
        })}
      </div>
    );
  },
};

export default Page;
