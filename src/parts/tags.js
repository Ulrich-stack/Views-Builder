import m from "mithril";
import tags from "/assets/tags.json"; // Ensure tags.json is structured as shown above
import { createStart } from "../utils/dnd";
import store from "../store";

const Tags = {
  oninit: function (vnode) {
    vnode.state.showTypes = new Array(tags.length).fill(false); // Adjust to handle dynamic number of categories
  },
  view: function (vnode) {
    return (
      <div class="tags-container">
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
              <i class={`chevron ${vnode.state.showTypes[index] ? "rotate" : ""}`} />
            </div>

            {vnode.state.showTypes[index] && (
              <div>
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
                  >
                    {item.value}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
};

export default Tags;
