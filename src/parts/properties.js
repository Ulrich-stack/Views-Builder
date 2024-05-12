import m from "mithril";
import store from "../store";

const Properties = {
  view: function () {
    const eltClicked = store.state.eltClicked;
    const hasProps = eltClicked && eltClicked.attributs && Array.isArray(eltClicked.attributs.props) && eltClicked.attributs.props.length > 0;

    if (!hasProps) {
      return <div class="properties-container empty">No properties to display</div>;
    }

    return (
      <div class="properties-container">
        <div class="properties-header">
          <h3>Properties</h3>
          {eltClicked.attributs.props.map((item) => (
            <div key={item.name} class="property-item">
              <label>{item.name}</label>
              <input type={item.type || 'text'} class="property-input" defaultValue = {eltClicked.attributs[item.name]} />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export default Properties;
