import m from "mithril";
import { dropTag } from "../utils/dnd";
import { Viewer } from "../componentsFactory/viewer";
import store from "../store";

const Page = {
  view: function (vnode) {
    return (
      <div class="page-container"
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
