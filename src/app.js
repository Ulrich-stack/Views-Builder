// src/app.js
import m from "mithril";
import store from "./store";
// import { Tags, Page, Properties } from "./components";
import Tags from "./parts/tags";
import Page from "./parts/page"
import  Properties from "./parts/properties";

const App = {
  view() {
    return (
      <main>
        <div className="h-full w-full flex overflow-hidden">
          <Tags dnd={store.state.dnd} />
          <Page dnd={store.state.dnd} container={store.state.container} eltClicked={store.state.eltClicked} />
          <Properties eltClicked={store.state.eltClicked} />
        </div>
      </main>
    );
  },
};

m.mount(document.body, App);
