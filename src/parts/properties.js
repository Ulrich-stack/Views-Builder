import m from "mithril";
import store from "../store";

const Properties = {
  oninit: function (vnode) {
    vnode.state.active = 1; // Initialize the state
  },
  view: function (vnode) {
    const eltClicked = store.state.eltClicked;
    const hasProps =
      eltClicked &&
      eltClicked.attributs &&
      Array.isArray(eltClicked.attributs.props) &&
      eltClicked.attributs.props.length > 0;

    if (!hasProps) {
      return <div class="properties-container">No properties to display</div>;
    }

    return (
      <div class="properties-container">
        <div class="properties-header">
          <button
            class={`tab ${vnode.state.active === 1 ? "active" : ""}`}
            onclick={() => {
              vnode.state.active = 1;
            }}
          >
            Attributs
          </button>
          <button
            class={`tab ${vnode.state.active === 2 ? "active" : ""}`}
            onclick={() => {
              vnode.state.active = 2;
            }}
          >
            Visuel
          </button>
        </div>
        {vnode.state.active === 1 && (
          <div class="properties-content">
            {eltClicked.attributs.props.map((item) => (
              <div key={item.name} className="attribut">
                <label class="label-attribut">{item.name}</label>
                <input
                  class="input-text"
                  type={item.type || "text"}
                  readonly={item.readOnly}
                  defaultValue={eltClicked[item.name] || eltClicked.attributs[item.name]}
                  placeholder={"Type "+item.name}
                ></input>
              </div>
            ))}
          </div>
        )}
        {vnode.state.active === 2 && <div>Visual content here</div>}
      </div>
    );
  },
};

export default Properties;
