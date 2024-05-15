import m from "mithril";
import { span, icon, input, button, label, textarea, link, hr, hx, select, radio, table, list } from "./simple";
import { form, group, paragraph } from "./container";
import store from "../store";

export const Viewer = {
  view: function (vnode) {
    const { component, container, dnd, containers } = vnode.attrs;
    const ComponentMap = {
      span,
      hx,
      hr,
      group,
      button,
      label,
      input,
      textarea,
      paragraph,
      icon,
      form,
      link,
      select,
      radio,
      table,
      list,
    };

    const Component = ComponentMap[component.tag];

    if (Component) {
      return m(Component, { component, container, dnd, containers });
    } else {
      return m("div", `Unknown component: ${component.tag}`);
    }
  },
};
