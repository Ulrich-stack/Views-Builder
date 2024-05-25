import m from "mithril";
import "./modal.css";
import store from "../../store";
import CodeEditor from "../CodeEditor/CodeEditor";
import {
  downloadGeneratedFilesAsZip,
  generateCSSFile,
  generateHTMLFile,
} from "../../utils/generate/generate";
import { generateReactApp } from "../../utils/generate/generateReact";

const Modal = {
  oninit: function (vnode) {
    vnode.state.file = 0;
  },
  view: function (vnode) {
    return (
      store.state.openModal && (
        <div class="modal">
          <div class="modal-content">
            <div class="frameworks">
              <button class="framework">
                <img src = "/frontend/assets/frameworks/html5.svg" width={50}></img>
                <span>HTML</span>
              </button>
              <button class="framework">
                <img src = "/frontend/assets/frameworks/react.svg" width={50}></img>
                <span>React</span>
              </button>
              <button class="framework">
                <img src = "/frontend/assets/frameworks/nextjs.svg" width={50}></img>
                <span>Next</span>
              </button>
              <button class="framework">
                <img src = "/frontend/assets/frameworks/angular.svg" width={50}></img>
                <span>Angular</span>
              </button>
            </div>
            <div class="editor-wrapper">
              <div class="modal-head">
                <button
                  class={`file ${vnode.state.file === 0 ? "file-active" : ""}`}
                  onclick={() => (vnode.state.file = 0)}
                >
                  index.html
                </button>
                <button
                  class={`file ${vnode.state.file === 1 ? "file-active" : ""}`}
                  onclick={() => (vnode.state.file = 1)}
                >
                  styles.css
                </button>
              </div>
              {vnode.state.file === 0 && (
                <div class="editor-container">
                  <CodeEditor
                    lang="javascript"
                    code={generateReactApp(store.state.container)}
                  />
                </div>
              )}
              {vnode.state.file === 1 && (
                <div class="editor-container">
                  <CodeEditor
                    lang="css"
                    code={generateCSSFile(store.state.container)}
                  />
                </div>
              )}
              <div class="actions">
                <button
                  class="action-button download-button"
                  onclick={() => {
                    downloadGeneratedFilesAsZip(store.state.container, "mithril");
                    store.updateModal();
                  }}
                >
                  Download
                </button>
                <button
                  class="action-button cancel-button"
                  onclick={() => {
                    store.updateModal();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  },
};

export default Modal;
