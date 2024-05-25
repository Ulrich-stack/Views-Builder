import m from "mithril";
import "./modalEvent.css";
import store from "../../store";
import CodeEditor from "../CodeEditor/CodeEditor";

const ModalEvent = {
  oninit: function (vnode) {
    vnode.state.editorContent = vnode.attrs.initialContent || "";
  },
  view: function (vnode) {
    return (
      store.state.showEventModal && (
        <div class="modal">
          <div class="modal-content">
            <div class="editor-container">
              <CodeEditor
                lang="javascript"
                code={vnode.state.editorContent}
                oninput={(value) => (vnode.state.editorContent = value)}
              />
            </div>
            <div class="actions">
              <button
                class="action-button save-button"
                onclick={() => {
                  vnode.attrs.onSave(vnode.state.editorContent);
                  store.state.showEventModal = false;
                }}
              >
                Save
              </button>
              <button
                class="action-button cancel-button"
                onclick={() => {
                  store.state.showEventModal = false;
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )
    );
  },
};

export default ModalEvent;
