import m from "mithril";
import tags from "/assets/tags.json";
import { createStart, dragStart } from "../utils/dnd";

export const Tags = {
  oninit: function (vnode) {
    vnode.state.showTypes = [false, false, false];
  },
  view: function (vnode) {
    const types = ["simple", "container", "widgets"];
    return (
      <div className="w-2/12 border bg-black text-xs text-white overflow-auto">
        {types.map((type, indexType) => {
          return (
            <div>
              <div
                className="flex justify-between items-center w-full p-2 border hover:bg-[#363636] border-gray-300"
                onclick={(e) => {
                  console.log(vnode.state.showTypes[indexType]);

                  vnode.state.showTypes[indexType] =
                    !vnode.state.showTypes[indexType];
                }}
              >
                <span>{type}</span>
                <i
                  className={`fa-solid fa-chevron-left transform transition-all duration-200 ease-in-out text-xs ${
                    vnode.state.showTypes[indexType] && "rotate-90 text-red-400"
                  }`}
                />
              </div>

              <div>
                {tags.map((item) => {
                  return (
                    vnode.state.showTypes[indexType] &&
                    item.type === type && (
                      <div
                        className="p-2 hover:bg-[#363636] hover:cursor-pointer"
                        draggable
                        ondragstart = { ()=> {vnode.attrs.dnd.drag =  createStart(item.id);
                        console.log("start ",vnode.attrs.dnd);
                        }
}
                      >
                        {item.value}
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};
