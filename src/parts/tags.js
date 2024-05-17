import m from "mithril";
import tags from "/assets/tags.json"; // Ensure tags.json is structured as shown above
import { createStart, end } from "../utils/dnd";
import store from "../store";
import tagIcon from "../components/tagIcon";
import { Tree } from "../components/tree/tree";

const Tags = {
  oninit: function (vnode) {
    vnode.state.showTab = 0;
    vnode.state.showTypes = new Array(tags.length).fill(false); // Adjust to handle dynamic number of categories
  },
  view: function (vnode) {
    return (
      <div class="options-tag">
        <div class="options">
          <button class={`tab-option ${vnode.state.showTab === 0 && 'tab-active'}`} onclick = { () => vnode.state.showTab = 0} >
            <img src="/assets/svgs/add_box.svg" width={30}></img>
          </button>
          <button class={`tab-option ${vnode.state.showTab === 1 && 'tab-active'}`} onclick = { () => vnode.state.showTab = 1}>
            <img src="/assets/svgs/tree.svg" width={30}></img>
          </button>
        </div>

        {
          vnode.state.showTab === 0 && <div class="tags-container">
          {tags.map((category, index) => (
            <div key={category.category}>
              <div
                class="type-header"
                onclick={() => {
                  vnode.state.showTypes[index] = !vnode.state.showTypes[index];
                  console.log("Toggle category:", category.category);
                }}
              >
                <span>{category.category}</span>
                <i
                  class={`chevron ${
                    vnode.state.showTypes[index] ? "rotate" : ""
                  }`}
                />
              </div>

              {vnode.state.showTypes[index] && (
                <div class="tag-items">
                  {category.elements.map((item) => (
                    <div
                      key={item.id}
                      class="tag-item"
                      draggable
                      ondragstart={() => {
                        const dragItem = createStart(item.id);
                        store.updateDrag(dragItem);
                        console.log("Drag start:", store.state.dnd.drag);
                      }}
                      ondragend={()=>{
                        end(store.state.containers.sink)
                      }}
                    >
                      {tagIcon(item.value)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        }
        {
          vnode.state.showTab === 1 && <div className="tags-container dom">
            <h3 style = "text-align: center">DOM</h3>
            <Tree container={store.state.container}/>
          </div>
        }
      </div>
    );
  },
};

export default Tags;
