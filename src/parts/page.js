import m from "mithril";
import { dropTag } from "../utils/dnd";
import { Viewer } from "../components/viewer";
import store from "../store";

const Page = {
  view: function (vnode) {
    return (
      <div class="page-container"
        ondragenter={(e) => {
          store.updateDrop(store.container);
          store.updateSink(store.container);
        }}
        ondragover={(e) => e.preventDefault()}
        ondrop={(e) => {
          e.preventDefault();
          dropTag(store.state.dnd.drag, store.state.container);
          store.state.dnd = { drag: null, drop: null };
        }}
      >
        {store.state.container.map((item) => {
          return (
            <Viewer
              component={item}
              container={store.state.container}
              containers={store.state.containers}
              dnd={store.state.dnd}
              eltClicked={store.state.eltClicked}
            />
          );
        })}
      </div>
    );
  },
};

export default Page;
