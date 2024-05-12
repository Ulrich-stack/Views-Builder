import m from "mithril";
import Tags from "./parts/tags";
import Page from "./parts/page";
import Properties from "./parts/properties";
import "../style.css"
const App = {
  view() {
    return (
      <main class="main-container">
        <div class="full-size flex-container">
          <Tags />
          <Page />
          <Properties />
        </div>
      </main>
    );
  },
};

m.mount(document.body, App);
