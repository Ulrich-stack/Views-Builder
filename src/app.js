import m from "mithril";
import Tags from "./parts/tags";
import Page from "./parts/page";
import Properties from "./parts/properties";
import store from "./store";

import "../style.css";
import { generateHTML } from "./utils/generate";
const App = {
  view() {
    return (
      <main class="main-container">
        <div class="full-size">
          <div class="head-container w-full bg-primary text-white">
            <button class="generate text-white" onclick={()=> console.log("Génère ", generateHTML(store.state.container))}>Generate</button>
          </div>
          <div class="flex-container full-size">
            <Tags />
            <Page />
            <Properties />
          </div>
        </div>
      </main>
    );
  },
};

m.mount(document.body, App);
