import m from "mithril";
import styleData from "/assets/styles.json";
import store from "../store";

const Properties = {
  oninit: function (vnode) {
    vnode.state.active = 1; // For tab navigation
    vnode.state.openCategories = {}; // For accordion states
  },
  isStyleApplicable: function (style, eltType) {
    // Check if the current element's tag is in the style's notApplicableTo array
    return !style.notApplicableTo.includes(eltType);
  },
  view: function (vnode) {
    const eltClicked = store.state.eltClicked;
    const hasProps =
      eltClicked &&
      eltClicked.attributs &&
      Array.isArray(eltClicked.attributs.props) &&
      eltClicked.attributs.props.length > 0;
    const hasStyles =
      eltClicked && eltClicked.attributs && eltClicked.attributs.myStyle;
    const eltType = eltClicked.tag;

    if (!hasProps && !hasStyles) {
      return <div class="properties-container">No properties to display</div>;
    }

    const toggleCategory = (category) => {
      vnode.state.openCategories[category] =
        !vnode.state.openCategories[category];
    };

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
                  class={`input-text ${item.readOnly ? "disabled" : ""}`}
                  type={item.type || "text"}
                  readonly={item.readOnly}
                  value={eltClicked[item.name] || eltClicked.attributs[item.name]}
                  placeholder={`Type ${item.name}`}
                  min={item.type === "number" ? item.min : undefined}
                  max={item.type === "number" ? item.max : undefined}
                  oninput={(e) => {
                    eltClicked.attributs[item.name] = e.target.value;
                    store.updateEltClicked(eltClicked);
                  }}
                />
              </div>
            ))}
          </div>
        )}
        {vnode.state.active === 2 && (
          <div class="">
            {styleData.map((category) => (
              <div key={category.category}>
                <div
                  class="type-header"
                  onclick={() => toggleCategory(category.category)}
                >
                  <span>{category.category}</span>
                </div>
                {vnode.state.openCategories[category.category] && (
                  <div class="properties-content gap-2">
                    {category.styles.filter(style => this.isStyleApplicable(style, eltType)).map((style) => (
                      <div key={style.name} class="attribut">
                        <label class="label-attribut">{style.name}</label>
                        {style.type === "select" ? (
                          <select
                            onchange={(e) => {
                              eltClicked.attributs.myStyle[style.cssProperty] = e.target.value;
                              store.updateEltClicked(eltClicked);
                            }}
                            value={eltClicked.attributs.myStyle[style.cssProperty] || ""}
                            class="input-select"
                          >
                            {style.options.map((option) => (
                              <option class="style-option" value={option}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            class="input-text"
                            type={style.type}
                            value={eltClicked.attributs.myStyle[style.cssProperty] || ""}
                            oninput={(e) => {
                              eltClicked.attributs.myStyle[style.cssProperty] = e.target.value;
                              store.updateEltClicked(eltClicked);
                            }}
                            placeholder={`Enter ${style.name}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export default Properties;
