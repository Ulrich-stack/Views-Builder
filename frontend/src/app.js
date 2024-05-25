import m from "mithril";
import Tags from "./parts/tags";
import Page from "./parts/page";
import Properties from "./parts/properties";
import store from "./store";

import "../style.css";
import { generateHTML } from "./utils/generate/generate";
import Modal from "./components/modal/modal";
const App = {
  view() {
    return (
      <main class="main-container">
        <div class="full-size">
          <div class="head-container w-full bg-secondary text-white">
            <button
              class="generate text-white"
            >
              <img src="/frontend/assets/svgs/play.svg" width={25}></img>
              <span>Preview</span>
            </button>
            <button
              class="generate text-white"
              onclick={() =>
                // console.log("Génère ", generateHTML(store.state.container))
                store.updateModal()
              }
            >
              <img src="/frontend/assets/svgs/code.svg" width={25}></img>
              <span>Generate</span>
            </button>
          </div>
          <div class="flex-container full-size">
            <Tags />
            <Page />
            <Properties />
          </div>
          <Modal/>
        </div>
      </main>
    );
  },
};

m.mount(document.body, App);
